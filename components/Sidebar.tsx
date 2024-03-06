import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../public/vetmemo.svg";
import arrowback from "../public/indent-decrease.svg";
import plus from "../public/plus.svg";
import star from "../public/stars-02.svg";
import trash from "../public/trash.svg";
import {
  Avatar,
  Button,
  Card,
  useDisclosure,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Divider,
} from "@nextui-org/react";
import DeleteModal from "./DeleteModal";
import PaymentPlanModal from "./PaymentPlanModal";
import "../app/style.css";
import settings from "../public/settings.svg";
import help from "../public/help.svg";
import tag from "../public/tag-user.svg";
import sign from "../public/sign out.svg";
import { getJSONdata, getPlan } from "@/application/utils/functions";
import { getAllEncouterDB } from "@/application/database/database";

interface SliderProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  resetState: () => void;
  handleHistoryCardClick: (id: any) => void;
  activeId: any;
}

const Sidebar: React.FC<SliderProps> = ({
  isSidebarOpen,
  toggleSidebar,
  resetState,
  handleHistoryCardClick,
  activeId,
}) => {
  const {
    isOpen: isDeleteModalOpen,
    onOpen: onDeleteModalOpen,
    onClose: onDeleteModalClose,
  } = useDisclosure();
  const {
    isOpen: isPaymentModalOpen,
    onOpen: onPaymentModalOpen,
    onClose: onPaymentModalClose,
  } = useDisclosure();
  const [hoveredStates, setHoveredStates] = useState<boolean[]>([]);
  const [userData, setUserData] = useState<any>();
  const [documents, setDocuments] = useState<any>([]);

  const handleResetState = () => {
    resetState();
    loadDocuments();
  };

  const handleHistoryClick = (id: any) => {
    handleHistoryCardClick(id);
  };

  useEffect(() => {
    if (window) {
      setUserData(getJSONdata("profile"));
    }
  }, []);

  const groupedDocuments: any = {};
  documents.forEach((doc: any) => {
    const date = new Date(doc.date).toDateString();
    if (!groupedDocuments[date]) {
      groupedDocuments[date] = [];
    }
    groupedDocuments[date].push(doc);
  });

  const loadDocuments = async () => {
    try {
      const alldoc = await getAllEncouterDB();
      console.log(alldoc);
      setDocuments(alldoc);
    } catch (e) {
      setDocuments([]);
    }
  };

  useEffect(() => {
    loadDocuments();
  }, []);

  useEffect(() => {
    setHoveredStates(new Array(documents.length).fill(false));
  }, [documents]);

  const handleMouseEnter = (index: number) => {
    setHoveredStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = true;
      return newStates;
    });
  };

  const handleMouseLeave = (index: number) => {
    setHoveredStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = false;
      return newStates;
    });
  };

  return (
    <div
      className={`sidebar bg-[#FAFAFA] h-full w-96 fixed top-0 left-0 z-20 transition-transform duration-300 ease-in-out transform ${
        isSidebarOpen ? "translate-x-0 " : "-translate-x-full"
      } flex flex-col `}
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
          onClick={handleResetState}
        >
          <Image src={plus} alt="plus" className="" />
          <h1 className="text-center font-semibold">New Documentation</h1>
        </Button>

        {/* History Cards */}
        {Object.keys(groupedDocuments).map((date) => (
          <div key={date} className="mt-6">
            <h4 className="font-regular text-[#8B909A] mt-4 text-sm">{date}</h4>
            {groupedDocuments[date].map((document: any, index: number) => (
              <button
                key={document.id} // Assuming each document has a unique ID
                className={`bg-[#E5E8EC] rounded-xl h-16 w-full p-3 mt-4 ${
                  hoveredStates[index] ? "bg-gray-300" : ""
                } ${activeId === document.id ? "active" : ""}`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                onClick={() => {
                  handleHistoryClick(document.id);
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="font-normal mr-6 text-left">
                      {document.title}
                    </h1>
                    <p className="font-light text-[#808080] text-sm">
                      {document.date} . {document?.duration || "..."} Mins Long
                    </p>
                  </div>

                  {hoveredStates[index] && (
                    <button type="button" onClick={onDeleteModalOpen}>
                      <Image src={trash} alt="trash" />
                    </button>
                  )}
                  <DeleteModal
                    isOpen={isDeleteModalOpen}
                    onClose={onDeleteModalClose}
                  />
                </div>
              </button>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom section */}
      <div className="flex flex-col mt-auto p-2 bg-[#FAFAFA]  sticky bottom-0 z-50">
        <Popover
          showArrow
          placement="top"
          classNames={{
            base: ["before:bg-default-200"],
            content: [
              "py-3 px-4 border border-default-200",
              "bg-gradient-to-br from-white to-default-300",
              "dark:from-default-100 dark:to-default-50",
            ],
          }}
        >
          <PopoverTrigger>
            <Button className="w-full flex py-8 px-2 bg-[#FBFBFB] rounded-xl justify-between items-center ">
              <div className="items-center">
                <div className="flex items-center mt-2">
                  <Avatar
                    src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                    size="lg"
                    className="mr-2"
                  />
                  <p className="mb-1 font-medium mr-2">John Deo</p>
                  <div className=" border px-2 border-blue-400 b-t-2 rounded-lg bg-blue-200 ">
                    <p className="text-[#0058FA]">
                      {getPlan(userData?.roles || [])}
                    </p>
                  </div>
                </div>
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
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            {(titleProps) => (
              <div>
                <div className="px-1 py-2 flex gap-2">
                  <Avatar src="https" />
                  <div>
                    <div className="flex gap-2">
                      <h3 className="text-small font-bold" {...titleProps}>
                        John Deo
                      </h3>
                      <div className=" border px-2 border-blue-400 b-t-2 rounded-lg bg-blue-200 ">
                        <p className="text-[#0058FA]">
                          {getPlan(userData?.roles || [])}
                        </p>
                      </div>
                    </div>
                    <p className="text-tiny">{userData?.email}</p>
                  </div>
                  {/* <button> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M18 6L6 18M6 6l12 12"
                    />
                  </svg>
                  {/* </button> */}
                </div>
                <Divider />

                <div>
                  <button className="flex p-2 items-center mt-2 mb-4">
                    <Image
                      src={settings}
                      alt=""
                      width={25}
                      height={25}
                      className="mr-4"
                    />
                    <h1 className="text-base font-medium">Account</h1>
                  </button>
                  <button className="flex p-2 items-center mb-4">
                    <Image
                      src={tag}
                      alt=""
                      width={25}
                      height={25}
                      className="mr-4"
                    />
                    <h1 className="text-base font-medium">Preferences</h1>
                  </button>
                  <button className="flex p-2 items-center mb-4">
                    <Image
                      src={help}
                      alt=""
                      width={25}
                      height={25}
                      className="mr-4"
                    />
                    <h1 className="text-base font-medium">Contact Us</h1>
                  </button>
                  <Divider />
                  <button className="flex p-2 items-center mb-4">
                    <Image
                      src={sign}
                      alt=""
                      width={25}
                      height={25}
                      className="mr-4"
                    />
                    <h1 className="text-base font-medium">Sign Out</h1>
                  </button>
                </div>
              </div>
            )}
          </PopoverContent>
        </Popover>
        {/* Profile button */}

        <button
          type="button"
          onClick={onPaymentModalOpen}
          className="w-full px-2 py-2 mt-4 rounded-xl upgrade-button"
        >
          <div className="flex items-center">
            <div className="w-14 h-14 justify-center items-center flex bg-[#D1FADF] mr-2 rounded-full">
              <Image src={star} alt="star" />
            </div>
            <div className="text-start ">
              <p className="mb-1 font-medium">Upgrade Plan</p>
              <p className="font-light text-sm">
                Upgrade for access to additional features
              </p>
            </div>
          </div>
        </button>

        <PaymentPlanModal
          isOpen={isPaymentModalOpen}
          onClose={onPaymentModalClose}
        />
      </div>
    </div>
  );
};

export default Sidebar;
