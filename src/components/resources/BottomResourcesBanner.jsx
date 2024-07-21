import React from "react";
import Image from "next/image";
import Link from "next/link";
import Banner from "@/public/assets/banner.svg";

const BottomResourcesBanner = ({ icon, link }) => {
  return (
    <div>
      <div className=" mx-[20%] mt-[50%] ">
        <Image src={Banner} className="absolute" alt="banner" />

        <Link
          href={link}
          target="_blank"
          className="absolute text-witl-white-100  text-[100px] pt-[210px] px-10"
        >
          {icon}
        </Link>
      </div>
    </div>
  );
};
export default BottomResourcesBanner;
