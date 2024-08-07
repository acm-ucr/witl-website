"use client";
import { motion } from "framer-motion";
import { useState, useLayoutEffect } from "react";
import Image from "next/image";
import JoinBox from "./JoinBox";
import Line2 from "@/public/resources/joingraphic/line2.svg";
import Line3 from "@/public/resources/joingraphic/line3.svg";
import Line4 from "@/public/resources/joingraphic/line4.svg";
import MobileLine from "@/public/resources/joingraphic/mobileline.svg";

const JoinGraphic = () => {
  const [shiftPoint, setShiftPoint] = useState();

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

  const shiftVariant = {
    initial: { opacity: 0 },
    leftShift: { x: ["-20%", "0%"], opacity: ["0%", "50%", "100%"] },
  };

  const popVariant = {
    initial: { opacity: 0 },
    popIn: { scale: ["100%", "110%", "100%"], opacity: ["0%", "50%", "100%"] },
  };

  const traceVariant = {
    initial: {
      pathLength: 0,
      pathSpacing: 0,
      opacity: 0,
    },
    trace: {
      pathLength: 0.02,
      pathSpacing: 0.02,
      opacity: ["0%", "50%", "100%"],
      transition: { duration: 1, delay: 0.5 },
    },
  };

  return (
    <div className="flex items-end justify-center bg-witl-purple-300">
      <div
        className={
          shiftPoint
            ? "relative w-10/12 aspect-[5/11] mt-[20%] bg-white"
            : "relative w-10/12 aspect-[22/9] bg-white"
        }
      >
        <motion.p
          variants={shiftVariant}
          initial="initial"
          whileInView="leftShift"
          transition={{ duration: 0.5 }}
          className={
            shiftPoint
              ? "flex justify-center font-libre-caslon-text text-[7vw] px-[5%] py-[5%]"
              : "font-libre-caslon-text text-[5vw] px-[5%] py-[2%]"
          }
        >
          HOW TO JOIN
        </motion.p>

        <div
          className={
            shiftPoint ? "hidden" : "absolute top-[42%] left-[18%] w-[8%]"
          }
        >
          <motion.svg
            width="100%"
            height="100%"
            viewBox="0 0 86 147"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <motion.path
              variants={traceVariant}
              initial="initial"
              whileInView="trace"
              stroke="#6E3987"
              strokeWidth={2}
              strokeDasharray="4 4"
              d="M26.0001 1.50002C36.6667 0.500019 79.8553 7.00003 84 29.5C87.5 48.5 82 58 61.5001 71C47.6491 79.7836 18.9999 85 8.50006 99.5C-4.20484 117.045 3.00006 130 8.50006 134.5C21.9999 145.545 29 141.667 36.4999 145.5"
            />
          </motion.svg>
        </div>

        <Image
          src={Line2}
          className={
            shiftPoint ? "hidden" : "absolute top-[53.5%] left-[30.3%] w-[8%]"
          }
          alt="line2"
        />
        <Image
          src={Line3}
          className={
            shiftPoint
              ? "hidden"
              : "absolute top-[46.3%] left-[55.2%] w-[14.4%]"
          }
          alt="line3"
        />
        <Image
          src={Line4}
          className={
            shiftPoint ? "hidden" : "absolute top-[47%] right-[3.5%] w-[20%]"
          }
          alt="line4"
        />
        <Image
          src={MobileLine}
          className={
            shiftPoint ? "absolute top-[13%] left-[49%] h-[100%]" : "hidden"
          }
          alt="mobile line"
        />
        <motion.div
          variants={popVariant}
          initial="intitial"
          whileInView="popIn"
          transition={{ duration: 0.3 }}
          className={
            shiftPoint
              ? "absolute top-[12%] left-[21.3%] w-[75%]"
              : "absolute top-[35%] left-[3%] w-[23%]"
          }
        >
          <JoinBox num="1" desc1="JOIN OUR HIGHLANDER LINK" />
        </motion.div>
        <div
          className={
            shiftPoint
              ? "absolute top-[30%] left-[21.3%] w-[75%]"
              : "absolute top-[75%] left-[16.5%] w-[23%]"
          }
        >
          <JoinBox num="2" desc1="FOLLOW" desc2="OUR INSTAGRAM" />
        </div>
        <div
          className={
            shiftPoint
              ? "absolute top-[48%] left-[21.3%] w-[75%]"
              : "absolute top-[46%] left-[38.2%] w-[23%]"
          }
        >
          <JoinBox
            num="3"
            desc1="JOIN OUR SUBSTACK"
            smallDesc2="AND"
            desc2="DISCORD"
          />
        </div>
        <div
          className={
            shiftPoint
              ? "absolute top-[66%] left-[21.3%] w-[75%]"
              : "absolute top-[76.5%] left-[59.5%] w-[23%]"
          }
        >
          <JoinBox num="4" smallDesc1="*Optional*" desc1="FILE YOUR DUES" />
        </div>
        <div
          className={
            shiftPoint
              ? "absolute top-[84%] left-[21.3%] w-[75%]"
              : "absolute top-[32%] left-[80%] w-[23%]"
          }
        >
          <JoinBox num="5" desc1="ATTEND" desc2="OUR" desc3="EVENTS" />
        </div>
      </div>
    </div>
  );
};

export default JoinGraphic;
