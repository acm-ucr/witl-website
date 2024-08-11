"use client";
import Image from "next/image";
import One from "@/public/board/ourAlumniOne.webp";
import Two from "@/public/board/ourAlumniTwo.webp";
import Three from "@/public/board/ourAlumniThree.webp";
import Four from "@/public/board/ourAlumniFour.webp";
import Five from "@/public/board/ourAlumniFive.webp";
import Six from "@/public/board/ourAlumniSix.webp";

import { motion } from "framer-motion";

const animation = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const OurAlumni = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-4 gap-[1vw] m-4 w-[90%]">
        <motion.div
          variants={animation}
          transition={{ delay: 0.1 }}
          initial="hidden"
          whileInView="show"
        >
          <Image src={One} className="w-[100%]" alt="Alumni 1" />
        </motion.div>
        <motion.div
          variants={animation}
          transition={{ delay: 0.2 }}
          initial="hidden"
          whileInView="show"
        >
          <Image src={Two} className="w-[100%]" alt="Alumni 2" />
        </motion.div>
        <motion.div
          variants={animation}
          transition={{ delay: 0.3 }}
          initial="hidden"
          whileInView="show"
        >
          <Image src={Three} className="w-[100%]" alt="Alumni 3" />
        </motion.div>
        <motion.div
          variants={animation}
          transition={{ delay: 0.4 }}
          initial="hidden"
          whileInView="show"
        >
          <Image src={Four} className="w-[100%]" alt="Alumni 4" />
        </motion.div>
        <motion.div
          variants={animation}
          transition={{ delay: 0.1 }}
          initial="hidden"
          whileInView="show"
        >
          <Image src={Five} className="w-[100%]" alt="Alumni 5" />
        </motion.div>
        <motion.div
          variants={animation}
          transition={{ delay: 0.2 }}
          initial="hidden"
          whileInView="show"
        >
          <Image src={Six} className="w-[100%]" alt="Alumni 6" />
        </motion.div>
        <motion.div
          variants={animation}
          transition={{ delay: 0.3 }}
          initial="hidden"
          whileInView="show"
          className="col-span-2 bg-witl-purple-400 place-content-center"
        >
          <div className="text-right text-witl-white-100 text-[10vw] pr-4">
            Our
            <br />
            Alumni
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default OurAlumni;
