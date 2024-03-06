"use client";
import Nav from "@/components/NavBar";
import Image from "next/image";
import React, { useRef, useState } from "react";
import doc from "../public/doc.png";
import slash from "../public/slash.svg";
import {
  Button,
  Avatar,
  AvatarGroup,
  Card,
  CardBody,
  CardHeader,
  Switch,
  Divider,
  Spacer,
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
import { motion, useScroll } from "framer-motion";
import check from "../public/check .svg";
import checkx from "../public/checkX.svg";
import Footer from "@/components/footer";
import flatArrow from "../public/flatarrow.svg";

function Index() {
  const [isYearlyBilling, setIsYearlyBilling] = useState(true);
  const [scrollX, setscrollX] = useState(0); // For detecting start scroll postion
  const [scrolEnd, setscrolEnd] = useState(false); // For detecting end of scrollin
  const containerRef = useRef<any>();

  const toggleBillingCycle = () => {
    setIsYearlyBilling((prev) => !prev);
  };

  const handleScroll = (scrollAmount: number) => {
    containerRef.current.scrollLeft += scrollAmount;
    setscrollX(scrollX + scrollAmount); // Updates the latest scrolled postion

    //For checking if the scroll has ended
    if (
      Math.floor(
        containerRef.current.scrollWidth - containerRef.current.scrollLeft
      ) <= containerRef.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  return (
    <div>
      <Nav />
      {/* Hero Section */}
      <section>
        <div className="flex flex-col lg:flex-row h-full bg-[#FAF9F6] overflow-x-hidden">
          {/* Content */}
          <div className="flex-1 flex flex-col px-6 py-16 md:py-32 md:px-24 lg:px-32">
            <motion.button
              variants={{
                hidden: { y: 60, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ ease: "linear", delay: 0.7 }}
              viewport={{ once: false }}
              className="flex items-center justify-between gap-4 py-2 px-4 bg-[#FAE5D3] rounded-full mb-8 lg:mb-0 lg:w-[400px] w-80"
            >
              <p className="text-[#808080] text-xs lg:text-sm">
                Learn how AI can help you with documentation.
              </p>
              <div className="bg-[#FBEADA] px-4 rounded-full p-2">
                <Image src={arrowright} alt="" />
              </div>
            </motion.button>

            <motion.h1
              variants={{
                hidden: { y: 60, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ ease: "linear", delay: 0.7 }}
              viewport={{ once: false }}
              className="text-4xl lg:text-7xl font-semibold mt-4 md:mt-16 mb-4"
            >
              Innovating Veterinary Documentation!
            </motion.h1>
            <motion.div
              variants={{
                hidden: { y: 60, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ ease: "linear", delay: 0.5 }}
              viewport={{ once: false }}
            >
              <Image src={slash} alt="slash" />
            </motion.div>
            <motion.p
              variants={{
                hidden: { y: 60, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ ease: "linear", delay: 0.4 }}
              viewport={{ once: false }}
              className="text-lg lg:text-2xl text-[#808080] mt-6"
            >
              Transform your veterinary practice with cutting-edge technology.
              Simplify documentation, enhance care, one pet at a time.
            </motion.p>

            <div className="flex items-center gap-4 mt-20">
              <Link href={"/auth/welcome"}>
                <Button className="bg-[#008080] px-8 py-6">
                  <h1 className="text-white font-semibold">Get Started</h1>
                </Button>
              </Link>
              <button className="font-semibold text-lg">Try Demo</button>
              <Image src={arrowright} alt="" />
            </div>
          </div>

          {/* Background Image */}
          <motion.div
            variants={{
              hidden: { y: 60, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ ease: "linear", delay: 0.7 }}
            viewport={{ once: false }}
            className="flex-1 bg-cover bg-center relative mb-10 md:mb-0 md:mt-32"
          >
            <Image src={doc} alt="Background" width={600} height={600} />
          </motion.div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 bg-[#FAF9F6]">
          {/* First column */}
          <motion.div
            variants={{
              hidden: { y: 60, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ ease: "linear", delay: 0.7 }}
            viewport={{ once: false }}
            className=""
          >
            <div className="text-center font-semibold text-2xl mb-4">
              120 Minutes
            </div>
            <p className="text-center text-lg text-[#808080] w-80">
              VetMemos saves doctors time on clinical documentation.
            </p>
          </motion.div>

          {/* Vertical line */}
          <div className="hidden lg:block h-20 border-l border-[#808080]"></div>

          {/* Second column */}
          <motion.div
            variants={{
              hidden: { y: 60, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ ease: "linear", delay: 0.7 }}
            viewport={{ once: false }}
            className="flex flex-col items-center"
          >
            <div className="text-center font-semibold text-2xl mb-4">95%</div>
            <p className="text-center text-lg text-[#808080] w-80">
              VetMemos significantly reduces fatigue for many clinicians using
              us.
            </p>
          </motion.div>

          {/* Vertical line */}
          <div className="hidden lg:block h-20 border-l border-[#808080]"></div>

          {/* Third column */}
          <motion.div
            variants={{
              hidden: { y: 60, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ ease: "linear", delay: 0.7 }}
            viewport={{ once: false }}
            className="flex flex-col items-center"
          >
            <div className="text-center font-semibold text-2xl mb-4">
              60 Seconds
            </div>
            <p className="text-center text-lg text-[#808080] w-80">
              To set up VetMemos and start documenting.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section>
        <div className="h-full bg-[#FAF9F6] relative flex flex-col py-10 lg:py-32 px-6 md:px-10 lg:px-28 ">
          <motion.h1
            variants={{
              hidden: { y: 60, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ ease: "linear", delay: 0.7 }}
            viewport={{ once: false }}
            className="text-2xl lg:text-4xl font-medium mb-6 lg:mb-8"
          >
            How It Works
          </motion.h1>
          <motion.div
            variants={{
              hidden: { y: 60, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ ease: "linear", delay: 0.7 }}
            viewport={{ once: false }}
            className="flex flex-col lg:flex-row justify-between items-center"
          >
            <Button className="bg-[#008080] px-4 py-6 lg:px-6 lg:py-8 mb-8 lg:mb-0">
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
          </motion.div>

          <div className="flex flex-col lg:flex-row justify-center items-center gap-4 md:gap-24 mt-6 md:mt-10">
            <motion.div
              variants={{
                hidden: { y: 60, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ ease: "linear", delay: 0.2 }}
              viewport={{ once: false }}
            >
              <Card className="flex-shrink-0">
                <CardBody>
                  <Image src={step1} alt="alt" />
                </CardBody>
              </Card>
            </motion.div>
            <motion.div
              variants={{
                hidden: { y: 60, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ ease: "linear", delay: 0.5 }}
              viewport={{ once: false }}
            >
              <Card className="flex-shrink-0">
                <CardBody>
                  <Image src={step2} alt="alt" />
                </CardBody>
              </Card>
            </motion.div>
            <motion.div
              variants={{
                hidden: { y: 60, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ ease: "linear", delay: 0.7 }}
              viewport={{ once: false }}
            >
              <Card className="flex-shrink-0">
                <CardBody>
                  <Image src={step3} alt="alt" />
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Features */}
      <section>
        <div className="p-4 bg-[#FAF9F6] relative px-6 md:px-10 lg:px-28">
          <motion.div
            variants={{
              hidden: { y: 60, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ ease: "linear", delay: 0.7 }}
            viewport={{ once: false }}
            className="flex flex-col md:flex-row items-center mb-2 md:mb-8"
          >
            <h1 className="text-2xl lg:text-4xl font-medium mb-4 lg:mb-0">
              Our Features
            </h1>
            <Image src={star} alt="star" />
          </motion.div>

          <div
            ref={containerRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8"
          >
            <motion.div
              variants={{
                hidden: { y: 60, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ ease: "linear", delay: 0.5 }}
              viewport={{ once: false }}
            >
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
            </motion.div>
            <motion.div
              variants={{
                hidden: { y: 60, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ ease: "linear", delay: 0.7 }}
              viewport={{ once: false }}
            >
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
                      We provide the ability to integrate with existing
                      Electronic Health Record (EHR) systems used by healthcare
                      providers.
                    </p>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
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
          <div className=" gap-4 px-10 items-center flex flex-col justify-center">
            <Image
              src={ellipse}
              alt="bg"
              className="z-10 absolute hidden md:block w-[600px]"
            />

            {/* First section */}
            <div
              ref={containerRef}
              className="flex flex-col gap-4 md:flex-row md:gap-9 mb-4"
            >
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
            <div className="flex gap-8">
              <Button
                isIconOnly
                className={`bg-[#F74D4D] bg-opacity-40  p-5 rounded-full ${
                  scrollX === 0 && "filter grayscale "
                }`}
                onClick={() => handleScroll(-200)}
                disabled={scrollX === 0 && true}
                startContent={
                  <Image
                    alt="arrow"
                    className="w-[120px] max-w-[unset] rotate-180"
                    src={flatArrow}
                    width={100}
                  ></Image>
                }
              ></Button>
              <Button
                isIconOnly
                className={`bg-[#F74D4D] bg-opacity-40 p-5 rounded-full ${
                  scrolEnd && "filter grayscale "
                }`}
                onClick={() => handleScroll(200)}
                disabled={scrolEnd && true}
                startContent={
                  <Image
                    alt="arrow"
                    className="relative z-50 w-8 max-w-[unset]"
                    src={flatArrow}
                    width={100}
                  ></Image>
                }
              ></Button>
            </div>
          </div>
        </div>
        <div className="px-4  md:px-10 lg:px-20 py-8 md:py-10 lg:py-32 bg-[#FAF9F6]">
          <Card className="bg-[#008080] w-full">
            <CardBody>
              <div className="flex flex-col md:flex-row justify-between items-center py-8 md:py-12 lg:py-16 px-6 md:px-10 lg:px-20">
                <div className="text-center md:text-left">
                  <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-regular max-w-xl md:max-w-lg lg:max-w-2xl">
                    Ready to save time on your consultations?
                  </h1>
                  <p className="text-gray-300 text-base md:text-lg lg:text-xl mt-4 max-w-xl md:max-w-lg lg:max-w-2xl">
                    Approximately 2 hours per day has been saved from automated
                    documentations
                  </p>
                </div>
                <div className="mt-6 md:mt-0">
                  <Button size="lg" className="bg-white">
                    <h1 className="font-medium">Try Demo</h1>
                    <Image src={arrowright} alt="" />
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Pricing */}
      <section id="Pricing" className="h-auto md:h-full">
        <div className=" relative bg-[#FAF9F6]  flex flex-col justify-center items-center py-10 px-4 sm:px-0">
          <h1 className="text-black mb-10 text-4xl text-center font-semibold">
            Upgrade your plan
          </h1>
          <div className="flex mb-10">
            <h1
              className={`mr-4 ${
                isYearlyBilling ? "text-[#E67E22]" : "text-[#ccc]"
              }`}
            >
              Billed Yearly
            </h1>
            <Switch
              className="mr-4"
              checked={isYearlyBilling}
              onChange={toggleBillingCycle}
            />
            <h1
              className={`mr-4 ${
                isYearlyBilling ? "text-[#ccc]" : "text-[#E67E22]"
              }`}
            >
              Billed Monthly
            </h1>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-10">
            <motion.div
              layout
              variants={{
                hidden: { y: 30, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ ease: "linear", delay: 0.3 }}
              viewport={{ once: false }}
            >
              <Card className="w-full md:w-[350px] px-4 py-6 bg-transparent border border-[#008080] mb-4">
                <h3 className="mb-4 font-semibold text-2xl">Free</h3>
                <h1 className="text-black text-4xl mb-2 font-regular">$0</h1>
                <p className="mb-4 text-sm text-gray-400">Per month</p>

                <p className="text-sm mb-4 text-gray-400">
                  Perfect for individuals or Companies looking to try things
                  out.
                </p>

                <Button
                  size="lg"
                  variant="bordered"
                  className="border-[#008080] mb-6"
                >
                  Get Started
                </Button>

                <Divider className="mb-4" />

                <h3 className="font-semibold mb-4">Features:</h3>

                <div className="flex mb-4">
                  <Image src={checkx} alt="x" className="mr-4" />
                  <p className="text-black">5 sessions</p>
                </div>
                <div className="flex mb-4">
                  <Image src={checkx} alt="x" className="mr-4" />
                  <p className="text-black">1 account</p>
                </div>
                <div className="flex mb-4">
                  <Image src={checkx} alt="x" className="mr-4" />
                  <p className="text-black">Custom templates</p>
                </div>
                <div className="flex mb-4">
                  <Image src={check} alt="x" className="mr-4" />
                  <p className="text-black">Email support</p>
                </div>
              </Card>
            </motion.div>
            <motion.div
              variants={{
                hidden: { y: 30, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ ease: "linear", delay: 0.3 }}
              viewport={{ once: false }}
            >
              <Card className="w-full md:w-[350px] bg-transparent px-4 py-6 border border-[#008080] mb-4">
                <h3 className="mb-4 font-semibold text-2xl">Basic</h3>
                <h1 className="text-black text-4xl mb-2 font-regular">
                  {isYearlyBilling ? "$119.99" : "$9.99"}
                </h1>
                <p className="mb-4 text-sm text-gray-400">
                  {" "}
                  {isYearlyBilling ? "Per year" : "Per month"}
                </p>

                <p className="text-sm mb-4 text-gray-400">
                  Perfect for individuals or Companies looking to try things
                  out.
                </p>

                <Button
                  variant="bordered"
                  size="lg"
                  className="border-[#008080] mb-6"
                >
                  Get Started
                </Button>

                <Divider className="mb-4" />

                <h3 className="font-semibold mb-4">Features:</h3>

                <div className="flex mb-4">
                  <Image src={check} alt="x" className="mr-4" />
                  <p className="text-black">
                    {isYearlyBilling ? "2500 Summaries" : "200 Summaries"}
                  </p>
                </div>
                <div className="flex mb-4">
                  <Image src={check} alt="x" className="mr-4" />
                  <p className="text-black">
                    {isYearlyBilling
                      ? "Maximum of 20GB yearly"
                      : "Maximum of 1,600MB per month"}
                  </p>
                </div>
                <div className="flex mb-4">
                  <Image src={check} alt="x" className="mr-4" />
                  <p className="text-black">
                    {isYearlyBilling
                      ? "Maximum of 120,000 pages"
                      : "Maximum of 10,000 pages"}
                  </p>
                </div>
                <div className="flex mb-4">
                  <Image src={check} alt="x" className="mr-4" />
                  <p className="text-black">Try 3 days free</p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Index;
