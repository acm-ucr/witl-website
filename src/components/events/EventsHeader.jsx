import React from "react";
import networkingdinner from "@/public/images/networkingdinner.webp";
import Image from "next/image";

const Header = () => {
  return (
    <div className="bg-witl-purple-300 h-3/5 relative">
      <Image
        src={networkingdinner}
        alt="networking dinner"
        className="absolute right-0 top-[10%] my-auto"
        width={1000}
      />
      <p className="text-9xl text-witl-white-100 absolute bottom-0 p-[1%]">
        EVENTS
      </p>
    </div>
  );
};

export default Header;
