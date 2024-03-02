import Image from "next/image";
import React from "react";
import menu2 from "../public/menu2.svg";
import { useState } from "react";
import { Button, Card, CardBody, Textarea } from "@nextui-org/react";

interface SliderProps {
  isLeftSidebarOpen: boolean;
  toggleLeftSidebar: () => void;
}

const LeftSideBar: React.FC<SliderProps> = ({
  isLeftSidebarOpen,
  toggleLeftSidebar,
}) => {
  const sizes = ["sm"];
  const [activeTab, setActiveTab] = useState("he");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div
      className={`sidebar bg-white h-full p-4 w-96 fixed top-0 right-0 opacity-90 z-10 transition-transform duration-300 ease-in-out transform ${
        isLeftSidebarOpen ? "translate-x-0 " : "translate-x-full"
      } flex flex-col `}
      style={{ maxHeight: "100vh", overflowY: "auto" }}
    >
      {isLeftSidebarOpen && (
        <button onClick={toggleLeftSidebar} className="ml-4">
          <Image src={menu2} alt="" />
        </button>
      )}

      <div className="p-4">
        <h1 className="mb-2 font-medium text-lg">Pronous</h1>
        <div>
          <div className="flex  gap-4">
            {sizes.map((size) => (
              <div key={size} className="space-x-2 flex">
                <div
                  className={`${
                    activeTab === "he"
                      ? "bg-[#008080] text-white"
                      : "bg-transparent hover:bg-gray-200"
                  } cursor-pointer py-2 px-4 rounded-md`}
                  onClick={() => handleTabClick("he")}
                >
                  He
                </div>
                <div
                  className={`${
                    activeTab === "she"
                      ? "bg-[#008080] text-white"
                      : "bg-transparent hover:bg-gray-200"
                  } cursor-pointer py-2 px-4 rounded-md`}
                  onClick={() => handleTabClick("she")}
                >
                  She
                </div>
                <div
                  className={`${
                    activeTab === "they"
                      ? "bg-[#008080] text-white"
                      : "bg-transparent hover:bg-gray-200"
                  } cursor-pointer py-2 px-4 rounded-md`}
                  onClick={() => handleTabClick("they")}
                >
                  They
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <Card>
          <CardBody>
            <h1>Advanced Options</h1>
          </CardBody>
        </Card>
      </div>
      <div>
        <Card>
          <CardBody>
            <h1>Custom instructions</h1>
            <Textarea />
            <Button>Generate</Button>
          </CardBody>
        </Card>
      </div>
      <div>
        <Card>
          <CardBody>
            <h1>Patient instructions</h1>
            <Textarea />
            <Button>Copy Note</Button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default LeftSideBar;
