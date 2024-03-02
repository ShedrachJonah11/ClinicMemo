import React from "react";
import bg from "../../../public/bgauth.png";
import star from "../../../public/star.svg";
import Image from "next/image";
import { Button, Card, CardBody, Input } from "@nextui-org/react";
import Link from "next/link";

function Index() {
  return (
    <div className="bg-cover bg-center h-screen flex items-center justify-center">
      <Image src={bg} alt="Background" layout="fill" objectFit="cover" />
      <Card className="w-96 sm:w-[450px]  p-6 opacity-75 ">
        <CardBody className="flex flex-col items-center">
          <Image src={star} alt="" className="mt-2" />

          <h1 className="text-lg font-bold mb-2">Create an account</h1>
          <p className="text-gray-500 mb-6">Start your 3-day free trial</p>

          <Input type="email" label="Enter your email" className="" />

          <Button size="lg" className="w-full mt-6 bg-[#008080]">
            <p className="text-white text-semibold ">Get Started</p>
          </Button>

          <div className="flex items-center mt-6 mb-4">
            <div className="flex-1 border-t border-black"></div>
            <p className="mx-4">or</p>
            <div className="flex-1 border-t border-black"></div>
          </div>

          <Card className="w-full mb-4">
            <CardBody className="justify-center items-center">
              <p>Sign up with mail</p>
            </CardBody>
          </Card>

          <Card className="w-full mb-4 ">
            <CardBody className="justify-center items-center">
              <p>Sign up with Google</p>
            </CardBody>
          </Card>

          <Card className="w-full ">
            <CardBody className="justify-center items-center">
              <p>Sign up with Apple</p>
            </CardBody>
          </Card>
          <div className="flex justify-center items-center">
            <p className="flex">
              Have an account already?
              <Link href={"/auth/login"} className="ml-1 text-[#008080]">
                Login
              </Link>
            </p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default Index;
