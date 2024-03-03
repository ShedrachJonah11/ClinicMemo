import Image from "next/image";
import React, { useState } from "react";
import menu2 from "../public/menu2.svg";
import { Button, Card, CardBody, Textarea } from "@nextui-org/react";
import copy2 from "../public/white_copy.svg";
import note from "../public/note.svg";
import magicpen from "../public/magicpen.svg";

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
  const [dropdownValue, setDropdownValue] = useState("Soup");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleDropdownChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setDropdownValue(event.target.value);
  };

  return (
    <div
      className={`sidebar bg-white h-full p-4 sm:w-[400px] fixed top-0 right-0 opacity-95 z-10 transition-transform duration-300 ease-in-out transform ${
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
        <h1 className="mb-2 font-medium text-lg">Pronouns</h1>
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
        <Card className="bg-[#FAF9F6] mb-4">
          <CardBody>
            <h1 className="font-medium mb-6 text-lg">Advanced Options</h1>
            <p className="text-xs mb-2 font-medium text-[#008080]">TEMPLATE</p>
            <select
              className="w-full p-4 bg-white rounded-md mb-4"
              value={dropdownValue}
              onChange={handleDropdownChange}
            >
              <option value="Soup">Soup</option>
            </select>

            <p className="text-xs mb-2 font-medium text-[#008080]">STYLE</p>
            <select
              className="w-full p-4 bg-white rounded-xl mb-4"
              name=""
              id=""
            >
              <option value="Bullet Point">Bullet Point</option>
            </select>
          </CardBody>
        </Card>
      </div>
      <div>
        <Card className="bg-[#FAF9F6] mb-4">
          <CardBody>
            <div className="flex items-center mb-4">
              <Image src={magicpen} alt="magicpen" className="mr-2" />
              <h1 className="text-xl font-medium">Custom instructions</h1>
            </div>
            <div className="p-2 bg-white mb-2 rounded-xl">
              <p>Add more details to the plan section</p>
            </div>
            <div className="p-2 bg-white mb-2 rounded-xl">
              <p>Add more details to the plan section</p>
            </div>
            <div className="p-2 bg-white mb-2 rounded-xl">
              <p>Add more details to the plan section</p>
            </div>

            <Textarea
              placeholder="Use an example above or enter your own instructions"
              className="mb-2"
            />
            <Button className="bg-[#008080]">
              <p className="text-white">Generate</p>
            </Button>
          </CardBody>
        </Card>
      </div>
      <div>
        <Card className="bg-[#FAF9F6] mb-4">
          <CardBody>
            <div className="flex items-center mb-4">
              <Image src={note} alt="note" className="mr-2" />
              <h1 className="text-xl font-medium">Patient instructions</h1>
            </div>
            <Textarea placeholder="Based on your conversation, i have jotted down some things to take into consideration" />
            <Button className="mt-4 px-6 bg-[#008080]">
              <Image src={copy2} alt="copy" />
              <h1 className="text-white font-semibold">Copy Note</h1>
            </Button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default LeftSideBar;
