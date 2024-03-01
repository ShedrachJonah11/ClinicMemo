import Nav from "@/components/nav";
import Image from "next/image";
import React from "react";
import doc from "../public/doc.png";
import slash from "../public/slash.svg";
import { Button } from "@nextui-org/react";

function index() {
  return (
    <div>
      <Nav />

      {/* Hero Section */}
      <div className="flex h-full ">
        {/* Content */}
        <div className="flex-1 flex flex-col  px-6  py-28 md:py-32 md:px-24">
          <div className="py-2 px-4 bg-[#FAE5D3] w-96 rounded-full">
            <p className="text-[#808080] text-sm">
              Learn how AI can help you with documentation.
            </p>
          </div>
          <h1 className="text-5xl lg:text-7xl font-semibold mt-16 mb-4">
            Innovating Veterinary Documentation!
          </h1>
          <div>
            <Image src={slash} alt="slash" />
          </div>
          <p className="text-lg lg:text-2xl text-[#808080] mt-6">
            Transform your veterinary practice with cutting-edge technology.
            Simplify documentation, enhance care, one pet at a time.
          </p>

          <div className="flex gap-4  mt-20">
            <Button>Get Started</Button>
            <button>Try Demo</button>
          </div>
        </div>

        {/* Background Image */}
        <div className="hidden lg:block flex-1 bg-cover bg-center relative mt-32">
          <Image src={doc} alt="Background" width={600} height={600} />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
        {/* First column */}
        <div className="flex flex-col items-center">
          <div className="text-center font-semibold text-2xl mb-4">
            120 Minutes
          </div>
          <p className="text-center text-lg text-[#808080] w-80">
            Clinicmemo saves doctors time on clinical documentation.
          </p>
        </div>

        {/* Vertical line */}
        <div className="hidden lg:block h-20 border-l border-[#808080]"></div>

        {/* Second column */}
        <div className="flex flex-col items-center">
          <div className="text-center font-semibold text-2xl mb-4">95%</div>
          <p className="text-center text-lg text-[#808080] w-80">
            Clinicmemo significantly reduces fatigue for many clinicians using
            us.
          </p>
        </div>

        {/* Vertical line */}
        <div className="hidden lg:block h-20 border-l border-[#808080]"></div>

        {/* Third column */}
        <div className="flex flex-col items-center">
          <div className="text-center font-semibold text-2xl mb-4">
            60 Seconds
          </div>
          <p className="text-center text-lg text-[#808080] w-80">
            To set up Clinicmemo and start documenting.
          </p>
        </div>
      </div>

      {/* How it works */}
      <div className="h-screen relative flex flex-col items-center overflow-y-auto"></div>
    </div>
  );
}

export default index;
