import { getUserProfile, verifyAccount } from "@/application/api/apis";
import { storeJSONdata } from "@/application/utils/functions";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import { manualRefresher } from "@/application/api/axiosInstance";
import Image from "next/image";
import { Button, Card, CardBody, Input } from "@nextui-org/react";
import Link from "next/link";
import mail from "../../../public/mail.svg";
import bg from "../../../public/bgauth.svg";
import arrowback from "../../../public/menu2.svg";

export default function Verify() {
  const router = useRouter();
  const { query } = router;

  const [isVeridfied, setVerifed] = useState(false);
  const getData = async () => {
    try {
      const token = query.token;

      if (token) {
        console.log(token);
        await verifyAccount(token);
        setVerifed(true);
      }
    } catch (error) {
      console.error("Error retrieving data:", error);
      // Handle error as needed
    }
  };

  useEffect(() => {
    getData();
  }, [query.token]);

  return (
    <div className="bg-cover bg-center h-screen flex items-center justify-center">
      <Image src={bg} alt="Background" layout="fill" objectFit="cover" />
      <Card className="w-96 sm:w-[450px] p-6 bg-opacity-75">
        <div className="mb-4 ">
          <Link href="">
            <Image src={arrowback} alt="" />
          </Link>
        </div>
        <CardBody className="flex flex-col items-center">
          <Image src={mail} alt="" className="mt-2" />

          <p className="text-black text-semibold text-2xl sm:text-xl  mt-4 text-center mb-6">
            Paste the code sent to shedrachjonah11@gmail.com
          </p>

          <Input
            type="email"
            variant="bordered"
            label="Enter code sent  by mail"
            className=""
          />

          <Link href={"/auth/dashboard"} className="w-full">
            <Button size="lg" className="w-full mt-6 bg-[#008080]">
              <p className="text-white text-semibold">Sign in with code</p>
            </Button>
          </Link>

          <div className="flex justify-center mt-4 items-center">
            <p className="flex">
              Didn&apos;t receive the email?
              <Link href={""} className="ml-1 text-[#008080]">
                Resend it
              </Link>
            </p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
