import Nav from "@/components/NavBar";
import Image from "next/image";
import React from "react";
import doc from "../public/doc.png";
import slash from "../public/slash.svg";
import {
  Button,
  Avatar,
  AvatarGroup,
  Card,
  CardBody,
  CardHeader,
} from "@nextui-org/react";
import arrowright from "../public/arrowright.svg";
import "../app/style.css";
import Link from "next/link";
import step1 from "../public/step1.svg";
import step2 from "../public/step2.svg";
import step3 from "../public/step3.svg";
import feat1 from "../public/feature1.svg";
import feat2 from "../public/feature2.svg";
import feat3 from "../public/feat3.svg";
import feat4 from "../public/feat4.svg";
import feat5 from "../public/feat5.svg";
import star from "../public/starr.svg";
import stars from "../public/yellowstar.svg";
import bgsec from "../public/bgsec.svg";
import ellipse from "../public/ellipse.svg";

function Index() {
  return (
    <div>
      <Nav />
      {/* Hero Section */}
      <section>
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
                <Link href="/auth/create">
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
      </section>

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
      <section>
        <div className="h-full bg-[#FAF9F6] relative flex flex-col py-10 lg:py-32 px-6 md:px-10 lg:px-28 ">
          <h1 className="text-2xl lg:text-4xl font-medium mb-4 lg:mb-8">
            How It Works
          </h1>
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <Button className="bg-[#008080] px-4 py-6 lg:px-6 lg:py-8 mb-4 lg:mb-0">
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
              <h1 className="text-white text-xs lg:text-sm font-semibold">
                Get Started
              </h1>
            </Button>

            <p className="text-[#808080] text-base lg:text-xl max-w-[600px] ">
              Whether you&apos;re advanced with computers or not, you can
              simplify your documentation in minutes instead of hours.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-center gap-4 md:gap-24 mt-6 md:mt-10">
            <Card className="flex-shrink-0">
              <CardBody>
                <Image src={step1} alt="alt" />
              </CardBody>
            </Card>
            <Card className="flex-shrink-0">
              <CardBody>
                <Image src={step2} alt="alt" />
              </CardBody>
            </Card>
            <Card className="flex-shrink-0">
              <CardBody>
                <Image src={step3} alt="alt" />
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Features */}
      <section>
        <div className="p-4 bg-[#FAF9F6] relative px-6 md:px-10 lg:px-28">
          <div className="flex flex-col md:flex-row items-center mb-2 md:mb-8">
            <h1 className="text-2xl lg:text-4xl font-medium mb-4 lg:mb-0">
              Our Features
            </h1>
            <Image src={star} alt="star" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
            <Card>
              <CardBody>
                <div className="flex mt-6 items-center justify-center">
                  <Image src={feat1} alt="alt" />
                </div>
                <div className="p-4">
                  <h1 className="text-xl lg:text-2xl font-semibold mt-6">
                    AI Analysis
                  </h1>
                  <p className="text-gray-400 mt-4 mb-4">
                    We implement the AI system that can analyze and interpret
                    patient complaints to generate meaningful documentation.
                  </p>
                </div>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <div className="flex mt-6 items-center justify-center">
                  <Image src={feat2} alt="alt" />
                </div>
                <div className="p-4">
                  <h1 className="text-xl lg:text-2xl font-semibold mt-6">
                    Integration with EHR Systems
                  </h1>
                  <p className="text-gray-400 mt-4 mb-4">
                    We provide the ability to integrate with existing Electronic
                    Health Record (EHR) systems used by healthcare providers.
                  </p>
                </div>
              </CardBody>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 mt-6">
            <Card>
              <CardHeader className="flex justify-center">
                <Image src={feat3} alt="alt" width={500} />
              </CardHeader>
              <CardBody>
                <h1 className="font-medium text-xl lg:text-2xl">
                  Multi-language Support
                </h1>
                <p className="text-gray-400 mt-4 mb-4">
                  We offer support for multiple languages to accommodate a
                  diverse user base. We help you transcribe all audios.
                </p>
              </CardBody>
            </Card>
            <Card>
              <CardHeader className="flex justify-center">
                <Image src={feat4} alt="alt" width={500} />
              </CardHeader>
              <CardBody>
                <h1 className="font-medium text-xl lg:text-2xl">
                  Security and Compliance
                </h1>
                <p className="text-gray-400 mt-4 mb-4">
                  We ensure robust security measures to protect your data and
                  comply with healthcare regulations.
                </p>
              </CardBody>
            </Card>
            <Card>
              <CardHeader className="flex justify-center">
                <Image src={feat5} alt="alt" width={500} />
              </CardHeader>
              <CardBody>
                <h1 className="font-medium text-xl lg:text-2xl">
                  User Support
                </h1>
                <p className="text-gray-400 mt-4 mb-4">
                  We offer a support system to address common queries. A contact
                  option is also included for more personalized assistance.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* What Our Users Say About Us */}
      <section>
        <div className="h-full bg-[#FAF9F6] justify-center items-center flex flex-col  relative">
          <div className="flex flex-col items-center pt-14 mb-6">
            <h1 className="text-2xl sm:text-4xl mb-4 font-medium text-center">
              What Our Users Say About Us
            </h1>
            <p className="text-lg text-center">
              Rated 4.9/5 by our users worldwide.
            </p>
            <div className="mt-4">
              <Image src={stars} alt="" />
            </div>
          </div>
          {/* Testimonies */}
          <div className="flex gap-4 px-10 justify-center">
            <Image src={ellipse} alt="bg" className="z-10 absolute" />
            {/* First section */}
            <div className="flex-col flex">
              <Card className=" w-80 mb-2">
                <CardHeader className="flex gap-3">
                  <div className="p-2">
                    <div className="flex items-center mb-6">
                      <div className=" justify-center items-center flex  mr-2 rounded-full">
                        <Avatar />
                      </div>
                      <div className="text-start ">
                        <p className="mb-1 font-medium">Shedrach Jonah</p>
                        <p className="font-light text-sm">CEO</p>
                      </div>
                    </div>
                    <p>
                      As a healthcare solutions provider, we constantly seek
                      tools that enhance our services. This platform has become
                      an indispensable asset, offering a powerful blend of AI
                      technology and user-friendly design. It&apos;s a win-win
                      for both our clients and us.
                    </p>
                  </div>
                </CardHeader>
              </Card>
              <Card className=" w-80 mb-2">
                <CardHeader className="flex gap-3">
                  <div className="p-2">
                    <div className="flex items-center mb-6">
                      <div className=" justify-center items-center flex  mr-2 rounded-full">
                        <Avatar />
                      </div>
                      <div className="text-start ">
                        <p className="mb-1 font-medium">Shedrach Jonah</p>
                        <p className="font-light text-sm">CEO</p>
                      </div>
                    </div>
                    <p>
                      As a healthcare solutions provider, we constantly seek
                      tools that enhance our services. This platform has become
                      an indispensable asset, offering a powerful blend of AI
                      technology and user-friendly design. It&apos;s a win-win
                      for both our clients and us.
                    </p>
                  </div>
                </CardHeader>
              </Card>
              <Card className=" w-80 mb-2">
                <CardHeader className="flex gap-3">
                  <div className="p-2">
                    <div className="flex items-center mb-6">
                      <div className=" justify-center items-center flex  mr-2 rounded-full">
                        <Avatar />
                      </div>
                      <div className="text-start ">
                        <p className="mb-1 font-medium">Shedrach Jonah</p>
                        <p className="font-light text-sm">CEO</p>
                      </div>
                    </div>
                    <p>
                      As a healthcare solutions provider, we constantly seek
                      tools that enhance our services. This platform has become
                      an indispensable asset, offering a powerful blend of AI
                      technology and user-friendly design. It&apos;s a win-win
                      for both our clients and us.
                    </p>
                  </div>
                </CardHeader>
              </Card>
            </div>
            {/* Section Section */}
            <div className="flex-col flex">
              <Card className=" w-80 mb-2">
                <CardHeader className="flex gap-3">
                  <div className="p-2">
                    <div className="flex items-center mb-6">
                      <div className=" justify-center items-center flex  mr-2 rounded-full">
                        <Avatar />
                      </div>
                      <div className="text-start ">
                        <p className="mb-1 font-medium">Shedrach Jonah</p>
                        <p className="font-light text-sm">CEO</p>
                      </div>
                    </div>
                    <p>
                      As a healthcare solutions provider, we constantly seek
                      tools that enhance our services. This platform has become
                      an indispensable asset, offering a powerful blend of AI
                      technology and user-friendly design. It&apos;s a win-win
                      for both our clients and us.
                    </p>
                  </div>
                </CardHeader>
              </Card>
              <Card className=" w-80 mb-2">
                <CardHeader className="flex gap-3">
                  <div className="p-2">
                    <div className="flex items-center mb-6">
                      <div className=" justify-center items-center flex  mr-2 rounded-full">
                        <Avatar />
                      </div>
                      <div className="text-start ">
                        <p className="mb-1 font-medium">Shedrach Jonah</p>
                        <p className="font-light text-sm">CEO</p>
                      </div>
                    </div>
                    <p>
                      As a healthcare solutions provider, we constantly seek
                      tools that enhance our services. This platform has become
                      an indispensable asset, offering a powerful blend of AI
                      technology and user-friendly design. It&apos;s a win-win
                      for both our clients and us.
                    </p>
                  </div>
                </CardHeader>
              </Card>
              <Card className=" w-80 mb-2">
                <CardHeader className="flex gap-3">
                  <div className="p-2">
                    <div className="flex items-center mb-6">
                      <div className=" justify-center items-center flex  mr-2 rounded-full">
                        <Avatar />
                      </div>
                      <div className="text-start ">
                        <p className="mb-1 font-medium">Shedrach Jonah</p>
                        <p className="font-light text-sm">CEO</p>
                      </div>
                    </div>
                    <p>
                      As a healthcare solutions provider, we constantly seek
                      tools that enhance our services. This platform has become
                      an indispensable asset, offering a powerful blend of AI
                      technology and user-friendly design. It&apos;s a win-win
                      for both our clients and us.
                    </p>
                  </div>
                </CardHeader>
              </Card>
            </div>
            {/* Third section */}
            <div className="flex-col flex">
              <Card className=" w-80 mb-2">
                <CardHeader className="flex gap-3">
                  <div className="p-2">
                    <div className="flex items-center mb-6">
                      <div className=" justify-center items-center flex  mr-2 rounded-full">
                        <Avatar />
                      </div>
                      <div className="text-start ">
                        <p className="mb-1 font-medium">Shedrach Jonah</p>
                        <p className="font-light text-sm">CEO</p>
                      </div>
                    </div>
                    <p>
                      As a healthcare solutions provider, we constantly seek
                      tools that enhance our services. This platform has become
                      an indispensable asset, offering a powerful blend of AI
                      technology and user-friendly design. It&apos;s a win-win
                      for both our clients and us.
                    </p>
                  </div>
                </CardHeader>
              </Card>
              <Card className=" w-80 mb-2">
                <CardHeader className="flex gap-3">
                  <div className="p-2">
                    <div className="flex items-center mb-6">
                      <div className=" justify-center items-center flex  mr-2 rounded-full">
                        <Avatar />
                      </div>
                      <div className="text-start ">
                        <p className="mb-1 font-medium">Shedrach Jonah</p>
                        <p className="font-light text-sm">CEO</p>
                      </div>
                    </div>
                    <p>
                      As a healthcare solutions provider, we constantly seek
                      tools that enhance our services. This platform has become
                      an indispensable asset, offering a powerful blend of AI
                      technology and user-friendly design. It&apos;s a win-win
                      for both our clients and us.
                    </p>
                  </div>
                </CardHeader>
              </Card>
              <Card className=" w-80 mb-2">
                <CardHeader className="flex gap-3">
                  <div className="p-2">
                    <div className="flex items-center mb-6">
                      <div className=" justify-center items-center flex  mr-2 rounded-full">
                        <Avatar />
                      </div>
                      <div className="text-start ">
                        <p className="mb-1 font-medium">Shedrach Jonah</p>
                        <p className="font-light text-sm">CEO</p>
                      </div>
                    </div>
                    <p>
                      As a healthcare solutions provider, we constantly seek
                      tools that enhance our services. This platform has become
                      an indispensable asset, offering a powerful blend of AI
                      technology and user-friendly design. It&apos;s a win-win
                      for both our clients and us.
                    </p>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <div></div>

      {/* Footer */}
      <div></div>
    </div>
  );
}

export default Index;
