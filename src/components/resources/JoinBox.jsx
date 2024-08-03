"use client";
import { useState, useLayoutEffect } from "react";

const JoinBox = ({ num, smallDesc1, desc1, smallDesc2, desc2, desc3 }) => {
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
    <div className="flex justify-end items-center bg-witl-purple-200 rounded-3xl w-[75%] min-h-[5.5%] aspect-[27/10]">
      <p
        className={
          shiftPoint
            ? "container pl-[5%] text-[14vw] font-libre-caslon-text text-witl-purple-400"
            : "container pl-[5%] text-[5vw] font-libre-caslon-text text-witl-purple-400"
        }
      >
        {num}.
      </p>
      <div className="grid grid-rows gap-y-0 w-[150%] text-right px-[7%] leading-[110%] font-marcellus-sc">
        <p
          className={
            shiftPoint
              ? "text-[2vw] leading-[110%]"
              : "text-[0.7vw] leading-[110%]"
          }
        >
          {smallDesc1}
        </p>
        <p
          className={
            shiftPoint
              ? "text-[4vw] leading-[110%]"
              : "text-[1.2vw] leading-[110%]"
          }
        >
          {desc1}
        </p>
        <p
          className={
            shiftPoint
              ? "text-[2vw] leading-[110%]"
              : "text-[0.7vw] leading-[110%]"
          }
        >
          {smallDesc2}
        </p>
        <p
          className={
            shiftPoint
              ? "text-[4vw] leading-[110%]"
              : "text-[1.2vw] leading-[110%]"
          }
        >
          {desc2}
        </p>
        <p
          className={
            shiftPoint
              ? "text-[4vw] leading-[110%]"
              : "text-[1.2vw] leading-[110%]"
          }
        >
          {desc3}
        </p>
      </div>
    </div>
  );
};

export default JoinBox;
