"use client";
import Image from "next/image";
import HeaderImg from "@/public/assets/headerImg.webp";
import HeaderImgMobile from "@/public/assets/mobHeadImg.webp";
import { motion } from "framer-motion";

const animations = {
  start: {
    opacity: 0,
    y: 40,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

const Header = () => {
  return (
    <>
      <div className="bg-witl-purple-300 hidden md:flex flex-col items-center pb-4 md:pb-4 2xl:pb-16">
        <div className="text-witl-purple-100 w-[90%] mt-[15%] lg:mt-[10%]">
          <div className="grid grid-cols-2 gap-x-[20%] gap-y-0 justify-between items-end mt-[5vh]">
            <motion.p
              className="text-[14vw] leading-none"
              variants={animations}
              initial="start"
              whileInView="end"
              transition={{ delay: 0.2 }}
            >
              WOMXN
            </motion.p>
            <div className="flex flex-col">
              <motion.p
                className="text-[5vw] ml-[20%] leading-none"
                variants={animations}
                initial="start"
                whileInView="end"
                transition={{ delay: 0.2 }}
              >
                IN THE
              </motion.p>
              <motion.p
                className="mb-[6%] ml-[22%] text-[1.2vw] text-wrap w-[60%]"
                variants={animations}
                initial="start"
                whileInView="end"
                transition={{ delay: 0.2 }}
              >
                University of California, Riverside&apos;s undergraduate
                community passionate about law and the pursuit of justice.
              </motion.p>
            </div>
          </div>
          <div className="flex flex-row justify-start mb-2">
            <div className="w-[65%]">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={HeaderImg}
                  alt="Header Image"
                  className="w-[95%] h-auto"
                />
              </motion.div>
            </div>
            <motion.p
              className="text-[14vw] w-[30%] leading-none mt-[-1.5%]"
              variants={animations}
              initial="start"
              whileInView="end"
              transition={{ delay: 0.2 }}
            >
              LAW
            </motion.p>
          </div>
        </div>
      </div>

      <div className="bg-witl-purple-300 flex md:hidden flex-col items-center">
        <div className="text-witl-purple-100 w-[90%] lg:w-[80%] lg:mt-[10%] mt-[22%]">
          <div className="flex flex-col items-center justify-between">
            <motion.p
              className="pt-10 md:pt-0 text-[20vw] leading-tight text-7xl"
              variants={animations}
              initial="start"
              whileInView="end"
              transition={{ delay: 0.2 }}
            >
              WOMXN
            </motion.p>
            <div className="flex flex-row mb-[15%]">
              <div className="flex flex-col ml-[4.5vw]">
                <motion.p
                  className="mt-[1vh] text-[11.5vw]"
                  variants={animations}
                  initial="start"
                  whileInView="end"
                  transition={{ delay: 0.2 }}
                >
                  IN THE
                </motion.p>
                <motion.p
                  className="text-[18vw] w-[30%] leading-none"
                  variants={animations}
                  initial="start"
                  whileInView="end"
                  transition={{ delay: 0.2 }}
                >
                  LAW
                </motion.p>
                <motion.p
                  className="text-[3.5vw] w-[40vw] ml-[4%] mt-[2.5vh] leading-none"
                  variants={animations}
                  initial="start"
                  whileInView="end"
                  transition={{ delay: 0.2 }}
                >
                  University of California, Riverside&apos;s undergraduate
                  community passionate about law and the pursuit of justice.
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={HeaderImgMobile}
                  alt="Header Image"
                  className="ml-[7vw] w-[35vw] aspect-[144/262]"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
