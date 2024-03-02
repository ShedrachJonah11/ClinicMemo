"use client";
import React, { useState } from "react";
import {
  Avatar,
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
} from "@nextui-org/react";
import Image from "next/image";
import logo from "../../public/vetmemo.svg";
import arrowback from "../../public/indent-decrease.svg";
import plus from "../../public/plus.svg";
import trash from "../../public/trash.svg";
import star from "../../public/stars-02.svg";
import record from "../../public/record-circle.svg";
import doc from "../../public/document-upload.svg";
import sound from "../../public/sound.svg";
import edit from "../../public/edit-2.svg";
import arrowdown from "../../public/arrow-down.svg";
import file from "../../public/document-forward.svg";

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
  const [selectedLanguage, setSelectedLanguage] = useState("English (US)");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [activeTab, setActiveTab] = useState("transcript");
  const [transcript, setTranscript] = useState("");
  const [isRecording, setIsRecording] = useState(false);

  const [recordingDuration, setRecordingDuration] = useState(0);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
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
  const stopRecording = () => {};

  // Function to pause recording
  const pauseRecording = () => {};

  // Function to resume recording
  const resumeRecording = () => {};

  return (
    <div className="relative flex">
      {/* Sidebar */}
      <div
        className={`sidebar bg-white h-full w-96 fixed top-0 left-0 transition-transform duration-300 ease-in-out transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } flex flex-col`}
        style={{ maxHeight: "100vh", overflowY: "auto" }}
      >
        {/* Sidebar Content */}
        <div className="sidebar-content p-4 flex justify-between">
          <Image src={logo} alt="logo" width={150} height={150} />
          <button className="text-gray-700" onClick={toggleSidebar}>
            <Image src={arrowback} alt="logo" width={30} height={30} />
          </button>
        </div>
        {/* add document button  */}
        <div className="px-4 mt-2">
          <Button
            size="lg"
            className="border-1 border-[#ccc] bg-white w-full  flex justify-center items-center rounded-xl"
          >
            <Image src={plus} alt="plus" className="" />
            <h1 className="text-center font-semibold">New Documentation</h1>
          </Button>

          <div className="mt-6">
            <h4 className="font-regular text-[#8B909A] text-sm">TODAY</h4>

            <Card className="bg-[#E5E8EC] p-3 mt-4">
              <div className="flex justify-between">
                <div>
                  <h1 className="font-semibold">Documentation</h1>
                  <p className=" font-light text-[#808080] text-sm">
                    11:50Pm . 2 Mins Long
                  </p>
                </div>

                <Image src={trash} alt="trash" className="delete-button" />
              </div>
            </Card>
            <Card className="bg-[#E5E8EC] p-3 mt-4">
              <div className="flex justify-between">
                <div>
                  <h1 className="font-semibold">Documentation</h1>
                  <p className=" font-light text-[#808080] text-sm">
                    11:50Pm . 2 Mins Long
                  </p>
                </div>

                <button type="button" onClick={onOpen}>
                  <Image src={trash} alt="trash" className="delete-button" />
                </button>
                <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                  <ModalContent>
                    {(onClose) => (
                      <>
                        <ModalHeader className="flex flex-col gap-1">
                          Are you sure you want to delete this
                        </ModalHeader>
                        <ModalBody>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nullam pulvinar risus non risus hendrerit
                            venenatis. Pellentesque sit amet hendrerit risus,
                            sed porttitor quam.
                          </p>
                        </ModalBody>
                        <ModalFooter>
                          <Button
                            color="danger"
                            variant="light"
                            onPress={onClose}
                          >
                            Close
                          </Button>
                          <Button color="primary" onPress={onClose}>
                            Delete
                          </Button>
                        </ModalFooter>
                      </>
                    )}
                  </ModalContent>
                </Modal>
              </div>
            </Card>
            <h4 className="font-regular text-[#8B909A] mt-4 text-sm">
              YESTERDAY
            </h4>
            <Card className="bg-[#E5E8EC] p-3 mt-4">
              <div className="flex justify-between">
                <div>
                  <h1 className="font-semibold">Documentation</h1>
                  <p className=" font-light text-[#808080] text-sm">
                    11:50Pm . 2 Mins Long
                  </p>
                </div>

                <Image src={trash} alt="trash" className="delete-button" />
              </div>
            </Card>
          </div>
        </div>

        {/* Avatar section (moved to the bottom) */}
        <div className="flex flex-col mb-2 mt-auto p-2 bg-white">
          <button className="w-full flex py-2 px-2 bg-[#FBFBFB] rounded justify-between items-center ">
            <div className="flex items-center mt-2">
              <Avatar
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                size="lg"
                className="mr-2"
              />
              <p className="mb-1 font-regular">John Deo</p>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  d="m5.157 13.069l4.611-4.685a.546.546 0 0 0 0-.768L5.158 2.93a.552.552 0 0 1 0-.771a.53.53 0 0 1 .759 0l4.61 4.684a1.65 1.65 0 0 1 0 2.312l-4.61 4.684a.53.53 0 0 1-.76 0a.552.552 0 0 1 0-.771"
                />
              </svg>
            </div>
          </button>
          <button className="w-full px-2 mt-2">
            <div className="flex items-center">
              <div className="w-14 h-14 justify-center items-center flex bg-[#D1FADF] mr-2 rounded-full">
                <Image src={star} alt="star" />
              </div>
              <div className="text-start ">
                <p className="mb-1 font-regular">Upgrade Plan</p>
                <p className="font-light text-sm">
                  Upgrade for access to additional features
                </p>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`transition-all duration-300 ease-in-out h-screen overflow-hidden flex-1 ${
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
              <Image src={arrowback} alt="logo" width={30} height={30} />
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
        </div>

        {/* Card Section */}
        <div className="h-full ">
          {activeTab === "transcript" && !isRecording && (
            <div className="h-full flex justify-center items-center">
              <div className="p-4 flex justify-center items-center absolute">
                <Card className="w-full px-4">
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
                      <div>
                        <div className="justify-center items-center flex flex-col ">
                          <Image src={file} alt="" className="mt-10" />
                          <h1 className="font-semibold text-lg mt-2">
                            Upload Audio
                          </h1>
                          <p className="text-center text-lg p-3 text-[#808080]">
                            Supported files: MP3, WAV,M4A
                          </p>
                          <Button
                            size="lg"
                            className="w-[500px] bg-[#008080] mt-6 mb-6"
                            onClick={handleUploadButtonClick}
                          >
                            <h1 className="text-white font-bold">
                              Upload Audio
                            </h1>
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="justify-center items-center flex flex-col ">
                        <Image src={sound} alt="" className="mt-10" />
                        <p className="text-center w-[500px] mt-6 p-3 text-[#808080]">
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

                        <button type="button" onClick={handleUploadButtonClick}>
                          <div className="flex mt-2 mb-6">
                            <Image src={doc} alt="" className="mr-2" />
                            <h1 className="font-semibold text-[#008080]  ">
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
            {activeTab === "note" && (
              <div className="p-4">
                <Card className="w-full bg-white">
                  <CardBody>
                    {/* Your "Note" content here */}
                    <h1 className="mt-4 font-medium text-[#1E1E1E] ">
                      PERSONALIZED NOTE
                    </h1>

                    <textarea
                      className="p-2 h-28 rounded-lg bg-[#F6F4F0] mb-4 mt-4"
                      placeholder="Type anything here....."
                    />
                  </CardBody>
                </Card>
              </div>
            )}
          </div>

          {isRecording && (
            <div className="flex mt-6 justify-between p-4">
              <div className="p-4">
                {/* <p>{recordingDuration}</p> */}
                <p className="text-black">{transcript}</p>
              </div>
              <div className="flex bg-[#E5E8EC] h-16 rounded-full px-6 py-2 gap-4 ">
                {/* pause recording */}
                <button onClick={stopRecording}>
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
                <button onClick={pauseRecording}>
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
                <button onClick={resumeRecording}>
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
