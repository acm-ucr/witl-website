import React from "react";
import networkingdinner from "@/public/images/networkingdinner.webp";
import Image from "next/image";

const Header = () => {
  return (
    <div className="bg-witl-purple-300 flex justify-end relative mt-[5%] py-[10%]">
      <Image
        src={networkingdinner}
        alt="networking dinner"
        className="mr-0 w-[70%] h-auto pt-10 md:pt-0 object-cover"
      />
      <p className="text-witl-purple-100 text-4xl md:text-9xl absolute left-[4%] bottom-4 md:bottom-24 p-[1%]">
        EVENTS
      </p>
    </div>
  );
};

export default Header;


