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
    <div className="bg-witl-purple-300 relative mt-[5%] pt-[5%] pb-[7%]">
      <motion.div
        className="flex justify-end"
        variants={animationImage}
        transition={{ delay: 0.3 }}
        initial="hidden"
        whileInView="show"
      >
        <Image
          className="w-[60.3%] object-cover pt-16 md:pt-0"
          src={networkingdinner}
          alt="networking dinner"
        />
      </motion.div>
      <motion.p
        className="text-witl-purple-100 text-[12vw] absolute left-[4%] top-[69%] md:top-[53.5%]"
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
