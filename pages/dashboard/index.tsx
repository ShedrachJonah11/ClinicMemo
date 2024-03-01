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
import logo from "../../public/clinic.svg";
import arrowback from "../../public/indent-decrease.svg";
import plus from "../../public/plus.svg";
import trash from "../../public/trash.svg";
import star from "../../public/stars-02.svg";
import record from "../../public/record-circle.svg";
import doc from "../../public/document-upload.svg";
import sound from "../../public/sound.svg";
import edit from "../../public/edit-2.svg";
import arrowdown from "../../public/arrow-down.svg";

function Index() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState("English (US)");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [activeTab, setActiveTab] = useState("transcript");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
  };

  const languages = ["English", "Spanish", "French", "German"];

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

            <Card className="bg-[#E5E8EC] p-3 mt-4  ">
              <div className="flex justify-between">
                <div>
                  <h1 className="font-semibold">Documentation</h1>
                  <p className=" font-light text-[#808080] text-sm">
                    11:50Pm . 2 Mins Long
                  </p>
                </div>

                <Image src={trash} alt="trash" />
              </div>
            </Card>
            <Card className="bg-[#E5E8EC] p-3 mt-4  ">
              <div className="flex justify-between">
                <div>
                  <h1 className="font-semibold">Documentation</h1>
                  <p className=" font-light text-[#808080] text-sm">
                    11:50Pm . 2 Mins Long
                  </p>
                </div>

                <button type="button" onClick={onOpen}>
                  <Image src={trash} alt="trash" />
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
            <Card className="bg-[#E5E8EC] p-3 mt-4  ">
              <div className="flex justify-between">
                <div>
                  <h1 className="font-semibold">Documentation</h1>
                  <p className=" font-light text-[#808080] text-sm">
                    11:50Pm . 2 Mins Long
                  </p>
                </div>

                <Image src={trash} alt="trash" />
              </div>
            </Card>
          </div>
        </div>

        {/* Avatar section (moved to the bottom) */}
        <div className="flex flex-col mt-auto p-2 bg-white">
          <button className="w-full">
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

          <button className="w-full">
            <div className="flex items-center mt-2">
              <Avatar
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                size="lg"
                className="mr-2"
              />
              <p className="mb-1 font-regular">John Deo</p>
            </div>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`transition-all duration-300 ease-in-out h-screen overflow-hidden flex-1 ${
          isSidebarOpen ? "ml-96 opacity-80" : ""
        } bg-[#808080]`}
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

        {/* Main Content */}

        <div className="h-full ">
          {activeTab === "transcript" && (
            <div className="h-full flex justify-center items-center">
              <div className="p-4 flex justify-center items-center absolute">
                <Card className="max-w-[450px] px-4">
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
                  <CardBody className="flex justify-center items-center">
                    <Image src={sound} alt="" className="mt-10" />
                    <p className="text-center mt-6 p-3 text-[#808080] ">
                      To ensure we can hear you, make sure your microphone
                      settings are correct
                    </p>

                    <Button size="lg" className="w-full bg-[#008080] mt-10">
                      <Image src={record} alt="" />
                      <h1 className="text-white font-bold ">
                        Record Conversation
                      </h1>
                    </Button>

                    <div className="flex items-center mt-4">
                      <div className="flex-1 h-[1px] bg-black"></div>
                      <div className="mx-4 text-gray-500 font-semibold">or</div>
                      <div className="flex-1 h-[1px] bg-black"></div>
                    </div>

                    <button type="button">
                      <div className="flex mb-6">
                        <Image src={doc} alt="" className="mr-2" />
                        <h1 className="font-semibold text-[#008080] mt- ">
                          Upload Recordings
                        </h1>
                      </div>
                    </button>
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
        </div>
      </div>
    </div>
  );
}

export default Index;
