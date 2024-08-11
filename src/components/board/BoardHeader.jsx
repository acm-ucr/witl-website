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
    <div className="bg-witl-purple-300 flex flex-col pb-[15%] mt-[5%]">
      <motion.div
        className="flex justify-end"
        variants={animationImage}
        transition={{ delay: 0.3 }}
        initial="hidden"
        whileInView="show"
      >
        <Image
          className="object-cover  h-auto w-[60%] mt-[20%] sm:mt-[15%] md:mt-[13%] lg:mt-[8%] 2xl:mt-[5%]"
          src={BoardIMG}
          alt="Board"
        />
      </motion.div>

      <motion.p
        className="text-witl-purple-100 w-min leading-none z-0 absolute text-[8vw] left-[5%] top-[19.5%] sm:top-[26%] md:top-[30%] lg:top-[35%] xl:top-[43%] 2xl:top-[53%]"
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
