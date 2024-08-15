"use client";
import { motion } from "framer-motion";
import { useState, useLayoutEffect } from "react";
import JoinBox from "./JoinBox";

const JoinGraphic = () => {
  const [shiftPoint, setShiftPoint] = useState();
  const mLines = [0, 1, 2, 3];

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
    trace1: {
      pathLength: 0.035,
      pathSpacing: 0.035,
      opacity: ["0%", "50%", "100%"],
      transition: { duration: 1, delay: 1.5 },
    },
    trace2: {
      pathLength: 0.01,
      pathSpacing: 0.01,
      opacity: ["0%", "50%", "100%"],
      transition: { duration: 1, delay: 2.5 },
    },
    trace3: {
      pathLength: 0.015,
      pathSpacing: 0.015,
      opacity: ["0%", "50%", "100%"],
      transition: { duration: 1, delay: 3.5 },
    },
    mobileTrace: {
      pathLength: 0.003,
      pathSpacing: 0.003,
      opacity: ["0%", "50%", "100%"],
    },
  };

  return (
    <div className="flex items-end justify-center bg-witl-purple-300">
      <div
        className={
          shiftPoint
            ? "relative w-10/12 aspect-[5/11] mt-[10%] bg-white"
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
            viewBox="0 0 86 147"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-100% h-auto"
          >
            <motion.path
              variants={traceVariant}
              initial="initial"
              whileInView="trace"
              stroke="#6E3987"
              strokeWidth={2}
              d="M26.0001 1.50002C36.6667 0.500019 79.8553 7.00003 84 29.5C87.5 48.5 82 58 61.5001 71C47.6491 79.7836 18.9999 85 8.50006 99.5C-4.20484 117.045 3.00006 130 8.50006 134.5C21.9999 145.545 29 141.667 36.4999 145.5"
            />
          </motion.svg>
        </div>

        <div
          className={
            shiftPoint ? "hidden" : "absolute top-[53.5%] left-[30.3%] w-[8%]"
          }
        >
          <motion.svg
            viewBox="0 0 84 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-100% h-auto"
          >
            <motion.path
              variants={traceVariant}
              initial="initial"
              whileInView="trace1"
              stroke="#6E3987"
              strokeWidth={2}
              d="M0.5 93C41 69.5 48.5 75 54 44.5C58.4 20.1 75.1667 5.33333 83 1"
            />
          </motion.svg>
        </div>

        <div
          className={
            shiftPoint
              ? "hidden"
              : "absolute top-[46.3%] left-[55.2%] w-[14.4%]"
          }
        >
          <motion.svg
            viewBox="0 0 151 137"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-100% h-auto"
          >
            <motion.path
              variants={traceVariant}
              initial="initial"
              whileInView="trace2"
              stroke="#6E3987"
              strokeWidth={2}
              d="M1.5 6.00001C2.83333 2.50001 15.2 -2.39999 54 6.00001C102.5 16.5 94.5 36 92 54.5C89.5 73 70 85 62 81C54 77 33.5 74 34.5 54.5C35.5 35 49 20.5401 62 16.5C75 12.4599 94.5 16.5 106.5 16.5C118.5 16.5 139.5 28.5 142 37.5C144.5 46.5 156.5 61.5 142 81C127.5 100.5 106.5 104.5 106.5 115C106.5 123.4 122.167 132.5 130 136"
            />
          </motion.svg>
        </div>

        <div
          className={
            shiftPoint ? "hidden" : "absolute top-[47%] right-[3.5%] w-[20%]"
          }
        >
          <motion.svg
            viewBox="0 0 213 142"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-100% h-auto"
          >
            <motion.path
              variants={traceVariant}
              initial="initial"
              whileInView="trace3"
              stroke="#6E3987"
              strokeWidth={2}
              d="M1 140.5C90.2 138.9 118.333 131.667 136.5 110C159 94 136.5 45 189 49.5C214.158 51.6564 210.833 25.1667 211.5 1"
            />
          </motion.svg>
        </div>

        <div className="absolute grid grid-rows-4 gap-[2%] top-[18%] left-[48%] w-[20%] h-[70%]">
          {mLines.map((index) => (
            <div
              key={index}
              className={shiftPoint ? "w-[15%] h-[15%]" : "hidden"}
            >
              <motion.svg
                viewBox="0 0 4 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  variants={traceVariant}
                  initial="initial"
                  whileInView="mobileTrace"
                  transition={{ duration: 1, delay: index + 0.5 }}
                  stroke="#6E3987"
                  strokeWidth={2}
                  d="M2.13281 -1131.01L2.13281 40"
                />
              </motion.svg>
            </div>
          ))}
        </div>

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

        <motion.div
          variants={popVariant}
          initial="intitial"
          whileInView="popIn"
          transition={{ duration: 0.3, delay: 1 }}
          className={
            shiftPoint
              ? "absolute top-[30%] left-[21.3%] w-[75%]"
              : "absolute top-[75%] left-[16.5%] w-[23%]"
          }
        >
          <JoinBox num="2" desc1="FOLLOW" desc2="OUR INSTAGRAM" />
        </motion.div>

        <motion.div
          variants={popVariant}
          initial="intitial"
          whileInView="popIn"
          transition={{ duration: 0.3, delay: 2 }}
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
        </motion.div>

        <motion.div
          variants={popVariant}
          initial="intitial"
          whileInView="popIn"
          transition={{ duration: 0.3, delay: 3 }}
          className={
            shiftPoint
              ? "absolute top-[66%] left-[21.3%] w-[75%]"
              : "absolute top-[76.5%] left-[59.5%] w-[23%]"
          }
        >
          <JoinBox num="4" smallDesc1="*Optional*" desc1="FILE YOUR DUES" />
        </motion.div>

        <motion.div
          variants={popVariant}
          initial="intitial"
          whileInView="popIn"
          transition={{ duration: 0.3, delay: 4 }}
          className={
            shiftPoint
              ? "absolute top-[84%] left-[21.3%] w-[75%]"
              : "absolute top-[32%] left-[80%] w-[23%]"
          }
        >
          <JoinBox num="5" desc1="ATTEND" desc2="OUR" desc3="EVENTS" />
        </motion.div>
      </div>
    </div>
  );
};

export default JoinGraphic;
