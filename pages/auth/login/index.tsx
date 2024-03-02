"use client";
import React from "react";
import bg from "../../../public/bgauth.png";
import star from "../../../public/star.svg";
import Image from "next/image";
import { Button, Card, CardBody, Checkbox, Input } from "@nextui-org/react";
import Link from "next/link";
import { EyeFilledIcon } from "../../../public/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../../../public/EyeSlashFilledIcon";

function Index() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="bg-cover bg-center h-screen flex items-center justify-center">
      <Image src={bg} alt="Background" layout="fill" objectFit="cover" />
      <Card className="w-96 sm:w-[450px]  p-6 opacity-75 ">
        <CardBody className="flex flex-col items-center">
          <Image src={star} alt="" className="mt-2" />

          <h1 className="text-lg font-bold mb-2">Log in your account</h1>
          <p className="text-gray-500 mb-6">
            Welcome back! Please enter your details.
          </p>

          <Input type="email" label="Email" placeholder="Enter your email" />
          <Input
            label="Password"
            placeholder="Enter your password"
            endContent={
              <button type="button" onClick={toggleVisibility}>
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
            className="mt-4"
          />

          <Button size="lg" className="w-full mt-6 bg-[#008080]">
            <p className="text-white text-semibold ">Login</p>
          </Button>

          <div className="flex justify-between items-center gap-12 mt-2">
            <div className="flex items-center">
              <Checkbox defaultSelected />
              <p className="ml-2">Remember for 30 days</p>
            </div>
            <div>
              <Link href={"/auth/forgot"} className="text-[#008080]">
                Forgot password
              </Link>
            </div>
          </div>

          <div className="flex items-center mt-6 mb-4">
            <div className="flex-1 border-t border-black"></div>
            <p className="mx-4">or</p>
            <div className="flex-1 border-t border-black"></div>
          </div>

          <Card className="w-full mb-4 ">
            <CardBody className="justify-center items-center">
              <p>Sign up with Google</p>
            </CardBody>
          </Card>
          <div className="flex justify-center items-center">
            <p className="flex">
              Don&apos;t have an account already?
              <Link href={"/auth/signup"} className="ml-1 text-[#008080]">
                Signup
              </Link>
            </p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default Index;
