"use client";
import { useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import Growth from "@/public/about/corevalues/grow.svg";
import Innovation from "@/public/about/corevalues/innovation.svg";
import Integrity from "@/public/about/corevalues/integrity.svg";
import Knowledge from "@/public/about/corevalues/knowledge.svg";
import Passion from "@/public/about/corevalues/passion.svg";
import Professionalism from "@/public/about/corevalues/professionalism.svg";
import Service from "@/public/about/corevalues/service.svg";
import Hexagon from "@/public/about/corevalues/hexagon.svg";
import Image from "next/image";

const CoreValues = () => {
  const [shiftPoint, setShiftPoint] = useState();
  const dropVariant = {
    initial: { opacity: "0" },
    animate: { y: ["-20%", "0%"], opacity: ["0%", "50%", "100%"] },
  };

  useLayoutEffect(() => {
    const shiftCheck = () => {
      setShiftPoint(window.innerHeight / window.innerWidth >= 1.2);
    };

    shiftCheck();
    window.addEventListener("resize", shiftCheck);
    return () => {
      window.removeEventListener("resize", shiftCheck);
    };
  }, []);

  return (
    <div
      className={
        shiftPoint
          ? "w-[100%] aspect-[1/2] relative overflow-clip"
          : "w-[100%] aspect-[2/1] relative"
      }
    >
      <div>
        <motion.div
          variants={dropVariant}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.4 }}
          className={
            shiftPoint
              ? "absolute bottom-[10%] right-[2%] w-1/2 h-auto"
              : "absolute bottom-[50%] left-[57%] w-1/4 h-auto"
          }
        >
          <Image src={Passion} className="w-[100%] h-auto" alt="passion" />
        </motion.div>

        <motion.div
          variants={dropVariant}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0 }}
          className={
            shiftPoint
              ? "absolute bottom-[57.5%] right-[37%] w-1/2 h-auto"
              : "absolute bottom-[31%] left-[8%] w-1/4 h-auto"
          }
        >
          <Image
            src={Innovation}
            className="w-[100%] h-auto"
            alt="innovation"
          />
        </motion.div>

        <motion.div
          variants={dropVariant}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.1 }}
          className={
            shiftPoint
              ? "absolute bottom-[48%] right-[2%] w-1/2 h-auto"
              : "absolute bottom-[13%] left-[25%] w-1/4 h-auto"
          }
        >
          <Image src={Integrity} className="w-[100%] h-auto" alt="integrity" />
        </motion.div>

        <motion.div
          variants={dropVariant}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: shiftPoint ? 0 : 0.2 }}
          className={
            shiftPoint
              ? "absolute bottom-[66%] -right-[3%] w-1/2 h-auto"
              : "absolute bottom-[30%] left-[43.5%] w-1/4 h-auto"
          }
        >
          <Image
            src={Professionalism}
            className="w-[100%] h-auto"
            alt="professionalism"
          />
        </motion.div>

        <motion.div
          variants={dropVariant}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.5 }}
          className={
            shiftPoint
              ? "absolute bottom-[38.5%] right-[35%] w-1/2 h-auto"
              : "absolute bottom-[13%] left-[57%] w-1/4 h-auto"
          }
        >
          <Image src={Service} className="w-[100%] h-auto" alt="service" />
        </motion.div>

        <motion.div
          variants={dropVariant}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.3 }}
          className={
            shiftPoint
              ? "absolute bottom-[19.5%] right-[35%] w-1/2 h-auto"
              : "absolute -bottom-[5%] left-[41%] w-1/4 h-auto"
          }
        >
          <Image src={Growth} className="w-[100%] h-auto" alt="growth" />
        </motion.div>

        <motion.div
          variants={dropVariant}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.6 }}
          className={
            shiftPoint
              ? "absolute bottom-[29%] right-[2%] w-1/2 h-auto"
              : "absolute -bottom-[5%] left-[73%] w-1/4 h-auto"
          }
        >
          <Image src={Knowledge} className="w-[100%] h-auto" alt="knowledge" />
        </motion.div>

        <Image
          src={Hexagon}
          className={
            shiftPoint
              ? "absolute bottom-[4%] -right-[26%] w-[40%] h-auto"
              : "hidden"
          }
          alt="decor hex"
        />
        <Image
          src={Hexagon}
          className={
            shiftPoint
              ? "absolute bottom-[60.5%] -right-[26%] w-[40%] h-auto"
              : "hidden"
          }
          alt="decor hex"
        />
        <Image
          src={Hexagon}
          className={
            shiftPoint
              ? "absolute bottom-[69.8%] right-[72%] w-[40%] h-auto"
              : "hidden"
          }
          alt="decor hex"
        />
      </div>
      <div
        className={
          shiftPoint
            ? "absolute -bottom-[1%] leading-snug"
            : "absolute -bottom-[2.5%]"
        }
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ x: ["-20%", "0%"], opacity: 1 }}
          transition={{ duration: 0.5, delay: 0 }}
          className={
            shiftPoint
              ? "text-[17vw] pl-[2%] leading-[75%] font-marcellus-sc"
              : "text-[8vw] pl-[11%] leading-[75%] font-marcellus-sc"
          }
        >
          CORE
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ x: ["-20%", "0%"], opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={
            shiftPoint
              ? "text-[17vw] pl-[2%] font-marcellus-sc"
              : "text-[8vw] pl-[12%] font-marcellus-sc"
          }
        >
          VALUES
        </motion.p>
      </div>
    </div>
  );
};

export default CoreValues;
