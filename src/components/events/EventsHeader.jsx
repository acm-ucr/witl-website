"use client";
import React from "react";
import networkingdinner from "@/public/images/networkingdinner.webp";
import Image from "next/image";
import { motion } from "framer-motion";

const animation = {
  hidden: { opacity: 0, y: -30 },
  show: { opacity: 1, y: 0 },
};

const animationImage = {
  hidden: { opacity: 0, x: 30 },
  show: { opacity: 1, x: 0 },
};

function Header() {
  return (
    <div className="bg-witl-purple-300 flex justify-end relative mt-[5%] py-[5%]">
      <motion.div
        variants={animationImage}
        transition={{ delay: 0.3 }}
        initial="hidden"
        whileInView="show"
      >
        {" "}
        <Image
          className="w-[70%] object-cover h-auto pt-16 md:pt-0 md:w-[100%]"
          src={networkingdinner}
          alt="networking dinner"
        />{" "}
      </motion.div>

      <motion.p
        className="text-witl-purple-100 text-5xl md:text-9xl absolute left-[4%] top-[75%] md:top-[50%] p-[1%]"
        variants={animation}
        transition={{ delay: 0.3 }}
        initial="hidden"
        whileInView="show"
      >
        EVENTS
      </motion.p>
    </div>
  );
}

export default Header;
