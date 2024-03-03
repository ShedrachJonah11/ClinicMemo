import Image from "next/image";
import React from "react";
import bg from "../../public/Content.png";
import Nav from "@/components/NavBar";

function index() {
  return (
    <div>
      <Nav />
      <div className="h-full">
        <Image src={bg} alt="" />
      </div>
    </div>
  );
}

export default index;
