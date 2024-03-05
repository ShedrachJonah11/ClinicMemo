import React from "react";
import bg from "../../../public/bgauth.svg";
import lock from "../../../public/lock.svg";
import Image from "next/image";
import { Button, Card, CardBody, Input } from "@nextui-org/react";
import Link from "next/link";
import arrowback from "../../../public/menu2.svg";

function Index() {
  return (
    <div className="bg-cover bg-center h-screen flex items-center justify-center">
      <Image src={bg} alt="Background" layout="fill" objectFit="cover" />
      <Card className="w-96 sm:w-[450px]  p-6 bg-opacity-75 ">
        <CardBody className="flex flex-col items-center">
          <Image src={lock} alt="" className="mt-2" />

          <h1 className="text-lg font-bold mb-2">Account recovery</h1>
          <p className="text-gray-500 mb-6">
            Enter your email address to reset your password
          </p>

          <Input
            type="email"
            variant="bordered"
            label="Enter your email"
            className=""
          />

          <div className="flex w-full gap-4">
            <Link href="/auth/verify" className="w-full">
              <Button variant="bordered" size="lg" className="w-full mt-6 ">
                <p className="text-black text-semibold ">Cancel</p>
              </Button>
            </Link>
            <Link href="/auth/verify" className="w-full">
              <Button size="lg" className="w-full mt-6 bg-[#008080]">
                <p className="text-white text-semibold ">Next</p>
              </Button>
            </Link>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default Index;
