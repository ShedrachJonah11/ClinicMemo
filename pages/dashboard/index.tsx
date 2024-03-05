import React, { useState, useEffect, useRef } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Divider,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Textarea,
} from "@nextui-org/react";
import Image from "next/image";
import "../../app/style.css";

import menu from "../../public/indent-decrease.svg";
import menu2 from "../../public/menu2.svg";
import copy2 from "../../public/white_copy.svg";
import Sidebar from "@/components/Sidebar";
import SaveModal from "@/components/SaveModal";
import LeftSideBar from "@/components/LeftSideBar";
import AuthProvider from "@/application/utils/authProvider";
import { getCurrentDateTime, getJSONdata } from "@/application/utils/functions";
import PageData from "@/components/PageData";
import { createNewEncounterDB, updateEncounterDB } from "@/application/database/database";
import { generateNote } from "@/application/api/apis";

// Extend the Window interface to include SpeechRecognition
interface Window {
  SpeechRecognition: new () => SpeechRecognition;
}

// Declare the SpeechRecognition interface if it doesn't exist
interface SpeechRecognition {
  results: any;
  // Define the properties and methods of SpeechRecognition
  // Example:
  lang: string;
  start(): void;
  onresult: (event: SpeechRecognition) => void;
}

// Declare a global interface to add the webkitSpeechRecognition property to the Window object
declare global {
  interface Window {
    webkitSpeechRecognition: any;
    SpeechRecognition: new () => SpeechRecognition;
  }
}

function Index() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("transcript");
  const [transcript, setTranscript] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showNoteCards, setShowNoteCards] = useState(false);
  const [userData,setUserData]=useState<any>()
  const [currentDocument,setCurrentDocument]=useState("")
  const [patientNote,setPatientNote]=useState("")
  const [propSettings,setPropSettings]=useState({
    pronoun:"",
    template:"SOAP",
    style:"AUTO",
    customInstruction:"",
  })
  const [gnote,setGNote]=useState<any>();
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleLeftSideBar = () => {
    setIsLeftSidebarOpen(!isLeftSidebarOpen);
  };


  

  useEffect(() => {
    const handleResize = () => {
      // Check screen width
      if (window.innerWidth <= 768) {
        setIsSidebarOpen(false); // Close sidebar for small screens
      } else {
        setIsSidebarOpen(true); // Open sidebar for larger screens
      }
    };

    // Call handleResize when the window is resized
    window.addEventListener("resize", handleResize);

    // Call handleResize when the component mounts
    handleResize();
   if(window){
    setUserData(getJSONdata("profile"));
   }
    // Remove event listener when component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const resetState = async () => {
    //setShowUploadContent(false); // Reset the state to hide upload content
    //setTranscript(""); // Reset transcript
    //setIsRecording(false); // Reset recording state
    //setRecordingDuration(0);
    //setShowNoteCards(false);
    const ecid = await createNewEncounterDB();
    setCurrentDocument(ecid);
  };

  const handleHistoryCardClick = (id:any) => {
    setShowNoteCards(true);
    setActiveTab("note");
    setCurrentDocument(id);
  };

  const generateAutoNote= async ()=>{
    console.log(currentDocument,"DOCUMENT");
    if(currentDocument=="") return;
    const postdata={
        "templates": propSettings.template,
        "custom_prompt": propSettings.customInstruction,
        "section_style": propSettings.style,
        "dot_phrases": [],
        "split_hpi_sections": false,
        "pronouns": propSettings.pronoun,
        "action": "NOTE",
        "transcript": transcript || ''
      }
      console.log(postdata)
  const req= await generateNote(postdata);
  await updateEncounterDB(currentDocument,"summary",JSON.stringify(req.note_content));
  setActiveTab('note');
  setGNote(req.note_content)
  console.log(req)
  return req.note_content;
  }
  const regenerate= async ()=>{
//show loader
await generateAutoNote();
//hide loader
  }
  return (
    <AuthProvider>
      <div className="relative flex">
      {/* Sidebar */}
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        resetState={resetState}
        handleHistoryCardClick={handleHistoryCardClick}
        activeId={currentDocument}
      />

      <SaveModal isOpen={isOpen} onClose={onClose} />

      <LeftSideBar
        isLeftSidebarOpen={isLeftSidebarOpen}
        toggleLeftSidebar={toggleLeftSideBar}
        propSettings={propSettings}
        setSettings={setPropSettings}
        patientNote={patientNote}
        setPatientNote={setPatientNote}
        generate={generateAutoNote}

      />

      {/* Main Content */}
      <div
        className={`transition-all duration-300 ease-in-out h-screen flex-1 ${
          isSidebarOpen ? "ml-96 opacity-80" : ""
        } bg-[#FBFBFB]`}
      >
        {/* Header */}
        <div
          className={`bg-white shadow h-16 flex items-center justify-between px-4 ${
            isSidebarOpen ? "w-full" : ""
          }`}
        >
          {/* Button to toggle the sidebar */}
          {!isSidebarOpen && (
            <button className="text-gray-700" onClick={toggleSidebar}>
              <Image src={menu} alt="logo" width={30} height={30} />
            </button>
          )}

          {/* Tabs */}
          <div className="flex justify-center items-center flex-1">
            <div className="flex justify-center items-center bg-[#E5E8EC] rounded-full p-1 px-6">
              <div
                className={`cursor-pointer mr-4 ${
                  activeTab === "transcript"
                    ? "bg-[#008080] rounded-full py-2 px-4 text-white font-semibold"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab("transcript")}
              >
                Transcript
              </div>
              <div
                className={`cursor-pointer ${
                  activeTab === "note"
                    ? "bg-[#008080] rounded-full py-2 px-4 text-white font-semibold"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab("note")}
              >
                Note
              </div>
            </div>
          </div>

          {activeTab === "note" && showNoteCards && (
            <div className="gap-4 flex items-center">
              <Button className="px-6 border" variant="light" onClick={()=>{
                regenerate()
              }}>
                <h1 className=" ">Regenerate</h1>
              </Button>
              <Button className=" px-6 bg-[#008080]">
                <Image src={copy2} alt="copy" />
                <h1 className="text-white font-semibold">Copy Note</h1>
              </Button>

              <button
                onClick={toggleLeftSideBar}
                type="button"
                className="ml-4"
              >
                <Image src={menu2} alt="" />
              </button>
            </div>
          )}
        </div>

        {/* Card Section */}
       {currentDocument!="" &&
       <PageData activeTab={activeTab} id={currentDocument} key={currentDocument} setActiveTab={setActiveTab} generateAutoNote={generateAutoNote} updateTranscript={setTranscript}
       gnote={gnote}
       setGNote={setGNote}
       />
       }
      </div>
    </div>
   
    </AuthProvider>
  );
}

export default Index;
