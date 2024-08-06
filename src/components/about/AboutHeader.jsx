"use client";
import { motion } from "framer-motion";
import AboutUsGroups from "./AboutUsGroups";

const AboutHeader = () => {
  return (
    <div className="bg-witl-purple-300 max-w-screen aspect-[3/4] lg:aspect-[3/2] flex flex-col rounded-b-[48px] items-center justify-center mt-[5%] overflow-clip">
      <div className="relative flex flex-col tracking-widest mt-[5%]">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-1 pt-8 text-7xl md:text-9xl text-center text-witl-purple-100"
        >
          <p>ABOUT</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-1 text-7xl md:text-9xl text-center text-witl-purple-100 z-10"
        >
          <p>US</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="absolute top-[25.5%] left-[44.5%] md:top-[27.5%] md:left-[45.3%]"
        >
          <p className="text-witl-purple-100 text-[6px] md:text-xs">WITL</p>
        </motion.div>
      </div>
      <AboutUsGroups />
    </div>
  );
};
export default AboutHeader;
