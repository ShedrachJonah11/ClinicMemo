import Image from "next/image";
import Link from "next/link";
import logo from "../public/vetmemologo.svg";
import { Button } from "@nextui-org/react";

function Footer() {
  const date = new Date();

  return (
    <div className="bg-[#008080] h-full rounded-t-xl py-6 relative  flex flex-col md:px-32 z-0">
      <div className="max-w-[1280px] sm:px-12 px-10 flex sm:flex-row flex-col rounded-2xl py-10 gap-5 justify-between">
        <div className="">
          <Image src={logo} alt="logo" width={200} height={50} />
        </div>

        {/* Content */}
        <div className="flex gap-10 md:gap-24 flex-wrap ">
          <ul className="w-[200px]">
            <li className="text-[#F3F4F6] text-xl mb-6 font-light">Programs</li>
            <li className="mb-6 text-[#F3F4F6] font-light">
              Become an ambassador
            </li>
            <li className="mb-6 text-[#F3F4F6] font-light">Careers</li>
            <li className="mb-6 text-[#F3F4F6] font-light">Login</li>
          </ul>
          <ul className="">
            <li className="text-[#F3F4F6] text-xl mb-6 font-light">About Us</li>
            <li className="mb-6 text-[#F3F4F6] font-light">Book a Call</li>
            <li className="mb-6 text-[#F3F4F6] font-light">Testimonials</li>
            <li className="mb-6 text-[#F3F4F6] font-light">Help Center</li>
            <li className="mb-6 text-[#F3F4F6] font-light">Try the Demo</li>
          </ul>
          <div className="flex flex-col gap-2">
            <span className="text-[#F3F4F6] text-lg font-light">
              Still have questions?
            </span>
            <div className="flex gap-3">
              <p className="text-[#F3F4F6] font-light mb-2">
                Book a call with our Program Director
              </p>
            </div>
            <Button size="md" className="bg-white w-52 font-semibold">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="flex  justify-between py-4 sm:px-10 px-3 border-t border-white text-[#E1E1E199]">
        <div>
          <p className="font-light">
            {" "}
            <span className="text-xl">&copy;</span> {date.getUTCFullYear()}{" "}
            Augment All Rights Reserved.
          </p>
        </div>
        <div className="flex gap-10">
          <p className="font-light">Terms of Use</p>
          <p className="font-light">Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
