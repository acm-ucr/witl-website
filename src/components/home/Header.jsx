"use client";
import Image from "next/image";
import HeaderImg from "@/public/assets/mainHeader.webp";
import HeaderImgMobile from "@/public/assets/logo-transparent.webp";
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
      <div className="bg-witl-purple-300 hidden md:flex flex-col items-center pb-0 md:pb-4 2xl:pb-16">
        <div className="text-witl-purple-100 w-[90%] lg:w-[80%] lg:mt-[10%] mt-[22%]">
          <div className="flex flex-row items-center justify-between">
            <motion.p
              className="lg:text-[13rem] leading-tight text-6xl md:text-7xl"
              variants={animations}
              initial="start"
              whileInView="end"
              transition={{ delay: 0.2 }}
            >
              WOMXN
            </motion.p>
            <div className="flex flex-col">
              <motion.p
                className="lg:text-6xl mb-[3%] text-2xl md:text-3xl"
                variants={animations}
                initial="start"
                whileInView="end"
                transition={{ delay: 0.2 }}
              >
                IN THE
              </motion.p>
              <motion.p
                className="lg:mb-[0%] mb-[15%] text-[0.6rem] lg:text-xs md:text-xs"
                variants={animations}
                initial="start"
                whileInView="end"
                transition={{ delay: 0.2 }}
              >
                <div class="h-[3em] flex flex-col justify-between">
                  <span class="block">
                    University of California, Riverside&apos;s
                  </span>
                  <span class="block">undergraduate community passionate</span>
                  <span class="block">
                    about law and the pursuit of justice.
                  </span>
                </div>
              </motion.p>
            </div>
          </div>
          <div className="flex flex-row justify-center mb-2">
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
              className="lg:text-[13rem] w-[30%] leading-none mt-[-1.5%] text-6xl md:text-7xl"
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
              className="pt-10 md:pt-0 lg:text-[13rem] leading-tight text-7xl"
              variants={animations}
              initial="start"
              whileInView="end"
              transition={{ delay: 0.2 }}
            >
              WOMXN
            </motion.p>
            <div className="flex flex-row mx-10 mb-[15%]">
              <div className="flex flex-col space-y-2 mr-[-15%]">
                <motion.p
                  className="lg:text-6xl mb-[3%] text-4xl md:text-5xl"
                  variants={animations}
                  initial="start"
                  whileInView="end"
                  transition={{ delay: 0.2 }}
                >
                  IN THE
                </motion.p>
                <motion.p
                  className="lg:text-[13rem] w-[30%] leading-none mt-[-1.5%] text-6xl md:text-7xl"
                  variants={animations}
                  initial="start"
                  whileInView="end"
                  transition={{ delay: 0.2 }}
                >
                  LAW
                </motion.p>
                <motion.p
                  className="text-[0.6rem] lg:text-sm md:text-[1rem] w-[70%]"
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
                className="bg-witl-purple-100 w-full content-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-witl-purple-100 w-full content-center">
                  <Image
                    src={HeaderImgMobile}
                    alt="Header Image"
                    className="mt-[-20%] m-auto"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
