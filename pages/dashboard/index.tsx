import React, { useState, useEffect } from "react";
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
import mic from "../../public/icon-park-outline_voice.svg";
import copy from "../../public/tabler_copy.svg";
import copy2 from "../../public/white_copy.svg";
import record from "../../public/record-circle.svg";
import doc from "../../public/document-upload.svg";
import sound from "../../public/sound.svg";
import edit from "../../public/edit-2.svg";
import arrowdown from "../../public/arrow-down.svg";
import file from "../../public/document-forward.svg";
import Sidebar from "@/components/Sidebar";
import SaveModal from "@/components/SaveModal";
import LeftSideBar from "@/components/LeftSideBar";

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
  const [selectedLanguage, setSelectedLanguage] = useState("English (US)");
  const [activeTab, setActiveTab] = useState("transcript");
  const [transcript, setTranscript] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showNoteCards, setShowNoteCards] = useState(false);

  const [recordingDuration, setRecordingDuration] = useState(0);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleLeftSideBar = () => {
    setIsLeftSidebarOpen(!isLeftSidebarOpen);
  };

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
  };

  const languages = ["English", "Spanish", "French", "German"];

  const [showUploadContent, setShowUploadContent] = useState(false);

  const handleUploadButtonClick = () => {
    setShowUploadContent(true);
  };

  const startRecording = () => {
    const recognition = new (window.SpeechRecognition ||
      window.webkitSpeechRecognition)(); // Initialize SpeechRecognition object
    recognition.lang = selectedLanguage; // Set language for recognition
    recognition.start(); // Start speech recognition
    recognition.onresult = (event: SpeechRecognition) => {
      // When recognition is successful
      const transcript = event.results[0][0].transcript; // Get transcript
      setTranscript(transcript); // Update transcript state
    };
    recognition.start = () => {
      setIsRecording(true);
      setRecordingDuration(0); // Reset recording duration when starting a new recording
    };
    setIsRecording(true);
  };

  // Function to stop recording
  const stopRecording = () => {
    onOpen();
  };

  // Function to pause recording
  const pauseRecording = () => {};

  // Function to resume recording
  const resumeRecording = () => {};

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

    // Remove event listener when component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const resetState = () => {
    setShowUploadContent(false); // Reset the state to hide upload content
    setTranscript(""); // Reset transcript
    setIsRecording(false); // Reset recording state
    setRecordingDuration(0);
    setShowNoteCards(false);
  };

  const handleHistoryCardClick = () => {
    setShowNoteCards(true);
    setActiveTab("note");
  };

  return (
    <div className="relative flex">
      {/* Sidebar */}
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        resetState={resetState}
        handleHistoryCardClick={handleHistoryCardClick}
      />

      <SaveModal isOpen={isOpen} onClose={onClose} />

      <LeftSideBar
        isLeftSidebarOpen={isLeftSidebarOpen}
        toggleLeftSidebar={toggleLeftSideBar}
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
              <Button className="px-6 border" variant="light">
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
        <div className="h-full">
          {activeTab === "transcript" && !isRecording && (
            <div className="h-full flex justify-center items-center">
              <div className="p-4 relative max-w-xl w-full">
                <Card className="w-full">
                  <CardHeader className="flex justify-between items-center">
                    <div className="flex">
                      <h1 className="font-semibold mr-2">Documentation</h1>
                      <Image src={edit} alt="" />
                    </div>
                    <Dropdown>
                      <DropdownTrigger className="rounded-full">
                        <Button
                          variant="bordered"
                          className="capitalize font-medium"
                        >
                          {selectedLanguage}
                          <Image src={arrowdown} alt="arrowdown" />
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu
                        aria-label="Select Language"
                        variant="flat"
                        disallowEmptySelection
                        selectionMode="single"
                        selectedKeys={selectedLanguage}
                        onSelectionChange={(language) =>
                          handleLanguageChange(language as string)
                        }
                      >
                        {languages.map((language) => (
                          <DropdownItem key={language}>{language}</DropdownItem>
                        ))}
                      </DropdownMenu>
                    </Dropdown>
                  </CardHeader>
                  <Divider className=" justify-center items-center" />
                  <CardBody className="flex justify-center items-center flex-col">
                    {showUploadContent ? (
                      <div className="justify-center items-center flex flex-col ">
                        <Image src={file} alt="" className="mt-10" />
                        <h1 className="font-semibold text-lg mt-2">
                          Upload Audio
                        </h1>
                        <p className="text-center text-lg p-3 text-[#808080]">
                          Supported files: MP3, WAV, M4A
                        </p>
                        <Button
                          size="lg"
                          className="w-full md:w-[300px] bg-[#008080] mt-6 mb-6"
                          onClick={handleUploadButtonClick}
                        >
                          <h1 className="text-white font-bold">Upload Audio</h1>
                        </Button>
                      </div>
                    ) : (
                      <div className="justify-center items-center flex flex-col ">
                        <Image src={sound} alt="" className="mt-10" />
                        <p className="text-center max-w-xl mt-6 p-3 text-[#808080]">
                          To ensure we can hear you, make sure your microphone
                          settings are correct
                        </p>

                        <Button
                          onClick={startRecording}
                          size="lg"
                          className="w-full bg-[#008080] mt-10"
                        >
                          <Image src={record} alt="" />
                          <h1 className="text-white font-bold">
                            Record Conversation
                          </h1>
                        </Button>

                        <div className="flex items-center mt-4">
                          <div className="flex-1 h-[1px] bg-black"></div>
                          <div className="mx-4 text-gray-500 font-semibold">
                            or
                          </div>
                          <div className="flex-1 h-[1px] bg-black"></div>
                        </div>

                        <button
                          type="button"
                          onClick={handleUploadButtonClick}
                          className="w-full md:w-[300px] mt-2 mb-6"
                        >
                          <div className="flex justify-center  mt-2">
                            <Image src={doc} alt="" className="mr-2" />
                            <h1 className="font-semibold text-[#008080]">
                              Upload Recordings
                            </h1>
                          </div>
                        </button>
                      </div>
                    )}
                  </CardBody>
                </Card>
              </div>
            </div>
          )}
          <div>
            {activeTab === "note" && showNoteCards && (
              <div className="p-4 justify-between flex-col sm:flex-row">
                <div className="flex flex-col sm:flex-row gap-4 flex-grow justify-between mb-6">
                  <Card className="w-full sm:w-1/2">
                    <CardBody>
                      <CardHeader>
                        <h1 className="font-semibold">MAIN COMPLAINT</h1>
                      </CardHeader>
                      <div className="p-4">
                        <p className="list-dot">Severe headaches</p>
                        <p className="list-dot">Stomach aches</p>
                      </div>
                      <div className="flex p-4 gap-2">
                        <button>
                          <Image src={mic} alt="" />
                        </button>
                        <button>
                          <Image src={copy} alt="" />
                        </button>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="w-full sm:w-1/2">
                    <CardBody>
                      <CardHeader>
                        <h1 className="font-bold">MEDICAL HISTORY</h1>
                      </CardHeader>
                      <div className="p-4">
                        <p className="list-dot">
                          Patient reports to have had this since he was a kid
                        </p>
                      </div>
                      <div className="flex p-4 gap-2">
                        <button type="button">
                          <Image src={mic} alt="" />
                        </button>
                        <button type="button">
                          <Image src={copy} alt="" />
                        </button>
                      </div>
                    </CardBody>
                  </Card>
                </div>

                {/* Second Row */}
                <div className="flex flex-col sm:flex-row gap-4 flex-grow justify-between mb-4">
                  <Card className="w-full sm:w-1/2">
                    <CardBody>
                      <CardHeader>
                        <h1 className="font-semibold">Doctor’s assessment</h1>
                      </CardHeader>
                      <div className="p-4">
                        <p className="list-dot">Severe migraines</p>
                      </div>
                      <div className="flex p-4 gap-2">
                        <button type="button">
                          <Image src={mic} alt="" />
                        </button>
                        <button type="button">
                          <Image src={copy} alt="" />
                        </button>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="w-full sm:w-1/2">
                    <CardBody>
                      <CardHeader>
                        <h1 className="font-bold">PLAN</h1>
                      </CardHeader>
                      <div className="p-4">
                        <p className="list-dot">
                          Follow up appointment on 24th of this month
                        </p>
                      </div>
                      <div className="flex p-4 gap-2">
                        <button type="button">
                          <Image src={mic} alt="" />
                        </button>
                        <button type="button">
                          <Image src={copy} alt="" />
                        </button>
                      </div>
                    </CardBody>
                  </Card>
                </div>
                {/* Second Row */}
                <div className="flex flex-col sm:flex-row gap-4 flex-grow justify-between">
                  <Card className="w-full sm:w-1/2">
                    <CardBody>
                      <CardHeader>
                        <h1 className="font-semibold">PRESCRIPTIONS</h1>
                      </CardHeader>
                      <div className="p-4">
                        <p className="list-dot">50 dosage of ibuprofen</p>
                      </div>
                      <div className="flex p-4 gap-2">
                        <button type="button">
                          <Image src={mic} alt="" />
                        </button>
                        <button type="button">
                          <Image src={copy} alt="" />
                        </button>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="w-full sm:w-1/2">
                    <CardBody>
                      <CardHeader>
                        <h1 className="font-bold">APPOINTMENT</h1>
                      </CardHeader>
                      <div className="p-4">
                        <p className="list-dot">
                          follow up check on the 24th February
                        </p>
                      </div>
                      <div className="flex p-4 gap-2">
                        <button type="button">
                          <Image src={mic} alt="" />
                        </button>
                        <button type="button">
                          <Image src={copy} alt="" />
                        </button>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </div>
            )}
            {activeTab === "note" && (
              <div className="p-4 mt-4">
                <Card className="w-full bg-white">
                  <CardBody>
                    {/* Your "Note" content here */}
                    <h1 className="mt-4 font-medium text-[#1E1E1E]">
                      PERSONALIZED NOTE
                    </h1>
                    <Textarea
                      className=" rounded-lg  mb-4 mt-4"
                      placeholder="Type anything here....."
                    />
                  </CardBody>
                </Card>
              </div>
            )}
          </div>

          {activeTab === "transcript" && isRecording && (
            <div className="flex mt-6 justify-between p-4">
              <div className="p-4">
                {/* <p>{recordingDuration}</p> */}
                <p className="text-black">{transcript}</p>
              </div>
              <div className="flex bg-[#E5E8EC] h-16 rounded-full px-6 py-2 gap-4 ">
                {/* pause recording */}
                <button type="button" onClick={pauseRecording}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 26 26"
                  >
                    <path
                      fill="currentColor"
                      d="M7 5c-.551 0-1 .449-1 1v14c0 .551.449 1 1 1h3c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1H7zm9 0c-.551 0-1 .449-1 1v14c0 .551.449 1 1 1h3c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1h-3z"
                    />
                  </svg>
                </button>

                {/* Stop recording */}
                <button type="button" onClick={stopRecording}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 432 432"
                  >
                    <path
                      fill="#257442"
                      d="M213.5 3q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3z"
                    />
                  </svg>
                </button>

                {/* Hold Recording */}
                <button type="button" onClick={resumeRecording}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="35"
                    viewBox="0 0 26 26"
                  >
                    <path
                      fill="currentColor"
                      d="M21 20c0 .551-.449 1-1 1H6c-.551 0-1-.449-1-1V6c0-.551.449-1 1-1h14c.551 0 1 .449 1 1v14z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Index;
