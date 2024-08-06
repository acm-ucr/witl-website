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
    <div className="bg-witl-purple-300 md:min-h-[1200px] max-h-screen flex justify-center items-center">
      <motion.div
        variants={animate}
        initial="start"
        whileInView="end"
        transition={{ delay: 0.2 }}
        className="bg-witl-white-100 rounded-[2rem] md:rounded-[6rem] scale-90 md:scale-60 md:p-0 md:pb-10 md:-my-[10%] w-10/12"
      >
        <div className="grid grid-flow-row-dense grid-cols-6">
          <motion.div
            variants={animate}
            initial="start"
            whileInView="end"
            transition={{ delay: 0.25 }}
            className="col-span-3 place-items-stretch justify-start m-5 md:m-10 mt-10 md:mt-28 max-h-96 max-w-screen"
          >
            {" "}
            <Image
              src={teamphoto1}
              alt="teamphoto1"
              className="w-full h-auto object-cover rounded md:rounded-3xl"
            />{" "}
          </motion.div>
          <div className="col-span-3 place-items-stretch justify-start max-h-96 max-w-screen">
            <div className="flex flex-col">
              <motion.div
                variants={animate}
                initial="start"
                whileInView="end"
                transition={{ delay: 0.25 }}
                className="flex flex-col tracking-tighter font-marcellus-sc text-2xl md:text-[7rem] md:ml-4 mt-10 md:mt-0 md:pt-24 leading-none"
              >
                Womxn in
                <br />
                the Law
              </motion.div>
              <motion.p
                variants={animate}
                initial="start"
                whileInView="end"
                transition={{ delay: 0.3 }}
                className="text-right tracking-tighter md:tracking-wide text-xs md:text-4xl mr-6 md:mr-8 md:pl-10 md:pr-20 md:pt-10 leading-tight"
              >
                <span className="block md:hidden">
                  stands
                  <br />
                  as an organization catered to the diverse spectrum of womxn
                  who are embarking on journeys in law school or within the
                  legal field
                </span>
                <span className="hidden md:block">
                  stands
                  <br />
                  as an organization catered to the <br />
                  diverse spectrum of womxn who are
                  <br />
                  embarking on journeys in law
                  <br />
                  school or within the legal field.
                </span>
              </motion.p>
            </div>
          </div>
          <motion.div
            variants={animate}
            initial="start"
            whileInView="end"
            transition={{ delay: 0.35 }}
            className="col-span-2 place-items-stretch justify-start m-5 md:m-10 md:pt-4 mb-4 md:mb-20 mt-0 md:mt-40 max-h-96 max-w-screen pt-2"
          >
            {" "}
            <Image
              src={teamphoto2}
              alt="teamphoto2"
              className="w-full h-auto md:h-full object-cover rounded md:rounded-3xl mt-0 md:mt-10"
            />{" "}
          </motion.div>
          <motion.div
            variants={animate}
            initial="start"
            whileInView="end"
            transition={{ delay: 0.35 }}
            className="col-span-4 place-items-stretch justify-start m-5 md:m-10 md:pt-4 mb-4 md:mb-20 mt-0 md:mt-40 max-h-96 max-w-screen pt-2"
          >
            {" "}
            <Image
              src={teamphoto3}
              alt="teamphoto3"
              className="w-full h-auto md:h-full object-cover rounded md:rounded-3xl mt-0 md:mt-10"
            />{" "}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Blurb;
