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
  propSettings:any;
  setSettings:any;
  patientNote:any;
  setPatientNote:any;
  generate:any;
}

const LeftSideBar: React.FC<SliderProps> = ({
  isLeftSidebarOpen,
  toggleLeftSidebar,
  propSettings,
  setSettings,
  patientNote,
  setPatientNote,
  generate
}) => {
  const sizes = ["sm"];
  const [activeTab, setActiveTab] = useState("he");
  const [dropdownValue, setDropdownValue] = useState("Soup");
  const [dropdownValueStyle, setDropdownValueStyle] = useState("Bullet Point");
  const [instruction,setInstruction]=useState("");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setSettings({
      ...propSettings,
      pronoun: tab,
    });
  };

  const handleDropdownChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setDropdownValue(event.target.value);
    setSettings({
      ...propSettings,
      template: event.target.value,
    });
  };
  const handleDropdownChangeStyle = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setDropdownValueStyle(event.target.value);
    setSettings({
      ...propSettings,
      style: event.target.value,
    });
  };
 const generateNote = async ()=>{
  //show button loader
  await generate();
  toggleLeftSidebar()
  //hide button loader
 }
  return (
    <div
      className={`sidebar bg-white h-full p-4 sm:w-[400px] fixed top-0 right-0 z-20 transition-transform duration-300 ease-in-out transform ${
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
              <option value="SOAP">SOAP</option>
              <option value="General Medicine">General Medicine</option>
              <option value="Cardilogy">Cardilogy</option>
              <option value="Psychiatry">Psychiatry</option>
              <option value="Psychology">Psychology</option>
              <option value="Diet">Diet</option>
            </select>

            <p className="text-xs mb-2 font-medium text-[#008080]">STYLE</p>
            <select
              className="w-full p-4 bg-white rounded-xl mb-4"
              name=""
              id=""
              value={dropdownValueStyle}
              onChange={handleDropdownChangeStyle}
            >
              <option value="Auto">Auto</option>
              <option value="Bullet Point">Bullet Point</option>
              <option value="Paragraph">Paragraph</option>
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
              value={instruction}
              onChange={(e)=>{
                setInstruction(e.target.value)
                setSettings({
                  ...propSettings,
                  customInstruction: e.target.value,
                });
              }}
            />
            <Button className="bg-[#008080]" onClick={()=>{
              //show button loader
             generateNote()
            }}>
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
            <Textarea placeholder="Based on your conversation, i have jotted down some things to take into consideration"
            value={patientNote}
            onChange={(e)=>{
              setPatientNote(e.target.value);
            }}
            />
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
