"use client";
import React from "react";
import { motion } from "framer-motion";

import TopResourcesBanner from "./TopResourcesBanner";
import BottomResourcesBanner from "./BottomResourcesBanner";

import { BsSubstack } from "react-icons/bs";
import { FaDiscord, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const ResourcesHeader = () => {
  return (
    <div className="bg-witl-purple-300 h-[300px] md:h-screen flex flex-col items-center justify-center mt-[5%]">
      <div className="grid grid-cols-5 gap-4 md:gap-8 mt-[20%] md:mt-[0%] w-10/12">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <TopResourcesBanner
            icon={<FaInstagram />}
            link={"https://www.instagram.com/ucrwitl/"}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <BottomResourcesBanner
            icon={<FaLinkedin />}
            link={"https://www.linkedin.com/company/ucr-womxn-in-the-law/"}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <TopResourcesBanner
            icon={<MdMail />}
            link={"mailto:ucrwitl@gmail.com"}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <BottomResourcesBanner
            icon={<FaDiscord />}
            link={"https://discord.gg/6W8t7a3G58"}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <TopResourcesBanner
            icon={<BsSubstack />}
            link={"https://ucrwitl.substack.com/"}
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute text-[25px] md:text-[85px] lg:text-[100px] 2xl:text-[150px] w-[70%] text-center text-witl-white-100 bg-witl-purple-300 mt-[5%] md:mb-[22%]"
      >
        <p>RESOURCES</p>
      </motion.div>

      <p className="text-center text-xs md:text-2xl text-witl-white-100  border-y-2 w-full mt-[3%]">
        CHECKOUT OUR RESOURCE SHEET
      </p>
    </div>
  );
};

export default ResourcesHeader;
