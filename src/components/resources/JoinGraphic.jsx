"use client";
import { useState, useLayoutEffect } from "react";
import Image from "next/image";
import JoinBox from "./JoinBox";
import Line1 from "@/public/resources/joingraphic/line1.svg";
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

  return (
    <div className="flex items-end justify-center bg-witl-purple-300">
      <div
        className={
          shiftPoint
            ? "relative w-10/12 aspect-[5/11] mt-[20%] bg-white"
            : "relative w-10/12 aspect-[22/9] bg-white"
        }
      >
        <p
          className={
            shiftPoint
              ? "flex justify-center font-libre-caslon-text text-[7vw] px-[5%] py-[5%]"
              : "font-libre-caslon-text text-[5vw] px-[5%] py-[2%]"
          }
        >
          HOW TO JOIN
        </p>
        <Image
          src={Line1}
          className={
            shiftPoint ? "hidden" : "absolute top-[42%] left-[18%] w-[8%]"
          }
          alt="line1"
        />
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
        <div
          className={
            shiftPoint
              ? "absolute top-[12%] left-[21.3%] w-[75%]"
              : "absolute top-[35%] left-[3%] w-[23%]"
          }
        >
          <JoinBox num="1" desc1="JOIN OUR HIGHLANDER LINK" />
        </div>
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
