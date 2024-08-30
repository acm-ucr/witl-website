"use client";
import Image from "next/image";
import teamphoto1 from "@/public/home/teamphoto1.webp";
import teamphoto2 from "@/public/home/teamphoto2.webp";
import teamphoto3 from "@/public/home/teamphoto3.webp";
import { motion } from "framer-motion";

const animate = {
  start: {
    opacity: 0,
    y: 40,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

const Blurb = () => {
  return (
    <div className="bg-witl-purple-300 h-[90vw] flex justify-center items-center">
      <motion.div
        variants={animate}
        initial="start"
        whileInView="end"
        transition={{ delay: 0.2 }}
        className="bg-witl-white-100 rounded-[2rem] md:rounded-[6rem] w-10/12 aspect-[99/84] grid grid-flow-row-dense grid-cols-6"
      >
        <motion.div
          variants={animate}
          initial="start"
          whileInView="end"
          transition={{ delay: 0.25 }}
          className="col-span-3 place-items-stretch justify-start mx-[10%] mt-[20%] max-h-96 max-w-screen"
        >
          {" "}
          <Image
            src={teamphoto1}
            alt="teamphoto1"
            className="object-cover rounded md:rounded-3xl"
          />{" "}
        </motion.div>
        <div className="col-span-3 place-items-stretch justify-start mt-[20%] max-h-96">
          <div className="ml-[10%] flex flex-col">
            <motion.div
              variants={animate}
              initial="start"
              whileInView="end"
              transition={{ delay: 0.25 }}
              className="flex flex-col font-marcellus-sc text-[6vw] leading-none"
            >
              <span>
                Womxn in
                <br />
                the Law <span className="text-[2.2vw] font-junge">stands</span>
              </span>
              <span className="text-wrap text-[2.2vw] tracking-normal leading-normal w-[85%] font-junge">
                as an organization catered to the diverse spectrum of womxn who
                are embarking on journeys in law school or within the legal
                field
              </span>
            </motion.div>
          </div>
        </div>
        <motion.div
          variants={animate}
          initial="start"
          whileInView="end"
          transition={{ delay: 0.35 }}
          className="col-span-2 place-items-stretch justify-start mx-[15%] my-[20%] max-h-96 max-w-screen pt-2"
        >
          {" "}
          <Image
            src={teamphoto2}
            alt="teamphoto2"
            className="md:h-full object-cover rounded md:rounded-3xl"
          />{" "}
        </motion.div>
        <motion.div
          variants={animate}
          initial="start"
          whileInView="end"
          transition={{ delay: 0.35 }}
          className="col-span-4 place-items-stretch justify-start mr-[10%] my-[10%] max-h-96 max-w-screen pt-2"
        >
          {" "}
          <Image
            src={teamphoto3}
            alt="teamphoto3"
            className="md:h-full object-cover rounded md:rounded-3xl"
          />{" "}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Blurb;
