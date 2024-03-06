import React from "react";
import bg from "../../../public/bgauth.svg";
import star from "../../../public/star.svg";
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
          <Image src={star} alt="" className="mt-2" />

          <h1 className="text-xl sm:text-2xl mt-4 font-bold mb-2">Welcome!</h1>
          <p className="text-gray-500 mb-6 text-center">
            Get a structured medical note from your encounter, in seconds
          </p>

          <Link href={"/auth/signup"} className="w-full">
            <Button size="lg" className="w-full mt-2 bg-[#008080]">
              <p className="text-white text-semibold ">Try VetMemo</p>
            </Button>
          </Link>

          <div className="flex justify-center mt-4 items-center">
            <p className="flex ">
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
