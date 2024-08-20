"use client";
import React from "react";
import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";
import Banner from "@/public/assets/banner.svg";

const BottomResourcesBanner = ({ icon, link }) => {
  return (
    <div className=" relative mt-[45%] ">
      <Image src={Banner} className="w-[100%]" alt="banner" />
      <motion.div
        whileHover={{ scale: 1.05 }}
        onHoverStart={(e) => {}}
        onHoverEnd={(e) => {}}
      >
        <Link
          href={link}
          target="_blank"
          className="absolute bottom-0 text-witl-white-100 hover:text-witl-purple-100 text-[30px] md:text-6xl lg:text-[100px] left-1/2 transform -translate-x-1/2 pb-[45%]"
        >
          {icon}
        </Link>
      </motion.div>
    </div>
  );
};
export default BottomResourcesBanner;
