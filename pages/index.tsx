import Nav from "@/components/NavBar";
import Image from "next/image";
import React from "react";
import doc from "../public/doc.png";
import slash from "../public/slash.svg";
import { Button, Avatar, AvatarGroup } from "@nextui-org/react";
import arrowright from "../public/arrowright.svg";
import "../app/style.css";
import Link from "next/link";

function Index() {
  return (
    <div>
      <Nav />

      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row h-screen bg-[#FAF9F6] overflow-x-hidden">
        {/* Content */}
        <div className="flex-1 flex flex-col px-6 py-28 md:py-32 md:px-24 lg:px-32">
          <Button className="flex items-start gap-4 py-2 px-4 bg-[#FAE5D3] rounded-full mb-8 lg:mb-0">
            <p className="text-[#808080] text-sm">
              Learn how AI can help you with documentation.
            </p>
            <div className="bg-[#FBEADA] px-4 rounded-full p-2">
              <Image src={arrowright} alt="" />
            </div>
          </Button>
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

          <div className="flex items-center gap-4 mt-20">
            <Button className="bg-[#008080] px-8 py-6">
              <Link href={"/auth/create"}>
                <h1 className="text-white font-semibold">Get Started</h1>
              </Link>
            </Button>
            <button className="font-semibold text-lg">Try Demo</button>
            <Image src={arrowright} alt="" />
          </div>
        </div>

        {/* Background Image */}
        <div className="hidden lg:block flex-1 bg-cover bg-center relative mt-32">
          <Image src={doc} alt="Background" width={600} height={600} />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 bg-[#FAF9F6]">
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
      <div className="h-screen bg-[#FAF9F6] relative flex flex-col py-32 px-28 overflow-y-auto">
        <h1 className="text-4xl font-medium mb-8">How It Works</h1>
        <div className="flex justify-between items-start lg:items-center">
          <Button className="bg-[#008080] px-6 py-8">
            <AvatarGroup
              isBordered
              max={3}
              total={10}
              className="avatar-group-custom"
            >
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
              <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
              <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
              <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
            </AvatarGroup>
            <h1 className="text-white text-sm font-semibold">Get Started</h1>
          </Button>

          <p className="text-[#808080] text-xl lg:w-[600px]">
            Whether you&apos;re advanced with computers or not, you can simplify
            your documentation in minutes instead of hours.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Index;
