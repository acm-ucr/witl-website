"use client";
import Image from "next/image";
import BoardIMG from "@/public/board/Exec_Board.webp";
import { motion } from "framer-motion";

const animation = {
  hidden: { opacity: 0, y: -30 },
  show: { opacity: 1, y: 0 },
};

const animationImage = {
  hidden: { opacity: 0, x: 30 },
  show: { opacity: 1, x: 0 },
};

const BoardHeader = () => {
  return (
    <div className="bg-witl-purple-300 flex flex-col pb-[10%] mt-[5%]">
      <motion.div
        className="flex justify-end"
        variants={animationImage}
        transition={{ delay: 0.3 }}
        initial="hidden"
        whileInView="show"
      >
        {" "}
        <Image
          className="object-cover mt-[20%] h-auto w-[70%] md:mt-[5%]"
          src={BoardIMG}
          alt="Board"
        />
        {""}
      </motion.div>

      <motion.p
        className="text-witl-purple-100 w-min absolute text-4xl top-[18.5%] sm:text-6xl leading-none z-0 left-[5%] sm:top-[20%] sm:left-[10%] md:top-[40%] md:left-[5%] md:text-8xl"
        variants={animation}
        transition={{ delay: 0.3 }}
        initial="hidden"
        whileInView="show"
      >
        EXECUTIVE BOARD
      </motion.p>
    </div>
  );
};
export default BoardHeader;
