import React, { useState } from "react";
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

interface SliderProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  resetState: () => void;
  handleHistoryCardClick: () => void;
}

const Sidebar: React.FC<SliderProps> = ({
  isSidebarOpen,
  toggleSidebar,
  resetState,
  handleHistoryCardClick,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isHovered, setIsHovered] = useState(false);

  const handleResetState = () => {
    resetState(); // Call resetState function
  };

  const handleHistoryClick = () => {
    // Call the handleHistoryCardClick function passed from the parent component
    handleHistoryCardClick();
  };

  return (
    <div
      className={`sidebar bg-white h-full w-96 fixed top-0 left-0 z-10 transition-transform duration-300 ease-in-out transform ${
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
        <div className="mt-6">
          <h4 className="font-regular text-[#8B909A] text-sm">TODAY</h4>
          <button
            className={`bg-[#E5E8EC] rounded-xl w-full p-3 mt-4 ${
              isHovered ? "bg-gray-300" : ""
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleHistoryClick}
          >
            <div className="flex items-center justify-between">
              <div>
                <h1 className="font-semibold mr-6">Documentation</h1>
                <p className="font-light text-[#808080] text-sm">
                  11:50Pm . 2 Mins Long
                </p>
              </div>

              {isHovered && (
                <button type="button" onClick={onOpen}>
                  <Image src={trash} alt="trash" className="delete-button" />
                </button>
              )}
              <DeleteModal isOpen={isOpen} onClose={onClose} />
            </div>
          </button>
          <h4 className="font-regular text-[#8B909A] mt-4 text-sm">
            YESTERDAY
          </h4>
        </div>
      </div>

      <div className="flex flex-col mb-2 mt-auto p-2 bg-white">
        <Popover
          showArrow
          backdrop="opaque"
          placement="right"
          classNames={{
            base: [
              // arrow color
              "before:bg-default-200",
            ],
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
                    <p className="text-[#0058FA]">Pro</p>
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
                        <p className="text-[#0058FA]">Pro</p>
                      </div>
                    </div>
                    <p className="text-tiny">Shedrachjonah11@gmail.com</p>
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

                <div></div>
              </div>
            )}
          </PopoverContent>
        </Popover>
        {/* Profile button */}

        <button className="w-full px-2 mt-4">
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
  );
};

export default Sidebar;
