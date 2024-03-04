import React from "react";
import bg from "../../../public/bgauth.svg";
import star from "../../../public/star.svg";
import Image from "next/image";
import { Button, Card, CardBody, Input } from "@nextui-org/react";
import Link from "next/link";
import apple from "../../../public/apple.svg";
import goggle from "../../../public/goggle.svg";
import mail from "../../../public/fb.svg";
import arrowback from "../../../public/menu2.svg";

function Index() {
  return (
    <div className="bg-cover bg-center h-screen flex items-center justify-center">
      <Image src={bg} alt="Background" layout="fill" objectFit="cover" />
      <Card className="w-96 sm:w-[450px]  p-6 bg-opacity-75 ">
        <div className="mb-4 ">
          <Link href="">
            <Image src={arrowback} alt="" />
          </Link>
        </div>
        <CardBody className="flex flex-col items-center">
          <Image src={star} alt="" className="mt-2" />

          <h1 className="text-lg font-bold mb-2">Create an account</h1>
          <p className="text-gray-500 mb-6">Start your 3-day free trial</p>

          <Input
            type="email"
            variant="bordered"
            label="Enter your email"
            className=""
          />

          <Button size="lg" className="w-full mt-6 bg-[#008080]">
            <Link href="/auth/verify">
              <p className="text-white text-semibold ">Next</p>
            </Link>
          </Button>

          <div className="flex items-center mt-6 mb-4">
            <div className="flex-1 border-t border-black"></div>
            <p className="mx-4">or</p>
            <div className="flex-1 border-t border-black"></div>
          </div>

          <Button size="lg" className="w-full bg-white mb-4" onClick={() => {}}>
            <Image src={goggle} alt="google" />
            <p>Sign up with Google</p>
          </Button>

          <Button
            size="lg"
            className="w-full  bg-white mb-4"
            onClick={() => {}}
          >
            <Link href={"/auth/login"} className="flex">
              <Image src={mail} alt="google" className="mr-4" />
              <p>Sign up with Facebook</p>
            </Link>
          </Button>

          <Button size="lg" className="w-full bg-white mb-4" onClick={() => {}}>
            <Image src={apple} alt="google" />
            <p>Sign up with Apple</p>
          </Button>
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
