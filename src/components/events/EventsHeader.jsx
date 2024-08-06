"use client";
import { motion } from "framer-motion";
import React from "react";
import networkingdinner from "@/public/images/networkingdinner.webp";
import Image from "next/image";

const Header = () => {
  return (
    <div className="bg-witl-purple-300 flex justify-end relative mt-[5%] py-[5%]">
      <Image
        src={networkingdinner}
        alt="networking dinner"
        className="w-[70%] h-auto pt-16 md:pt-0 object-cover"
      />
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-witl-purple-100 text-5xl md:text-9xl absolute left-[4%] top-[65%] md:top-[50%] p-[1%]"
      >
        <p>EVENTS</p>
      </motion.div>
    </div>
  );
};

export default Header;
