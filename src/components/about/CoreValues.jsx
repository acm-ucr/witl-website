"use client";
import { useEffect, useState } from "react";
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

  useEffect(() => {
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
        <Image
          src={Passion}
          className={
            shiftPoint
              ? "absolute bottom-[10%] right-[2%] w-1/2 h-auto"
              : "absolute bottom-[49%] left-[57%] w-1/4 h-auto"
          }
          alt="passion"
        />
        <Image
          src={Innovation}
          className={
            shiftPoint
              ? "absolute bottom-[57.5%] right-[37%] w-1/2 h-auto"
              : "absolute bottom-[31%] left-[8%] w-1/4 h-auto"
          }
          alt="innovation"
        />
        <Image
          src={Integrity}
          className={
            shiftPoint
              ? "absolute bottom-[48%] right-[2%] w-1/2 h-auto"
              : "absolute bottom-[13%] left-[25%] w-1/4 h-auto"
          }
          alt="integrity"
        />
        <Image
          src={Professionalism}
          className={
            shiftPoint
              ? "absolute bottom-[66.7%] right-[2%] w-1/2 h-auto"
              : "absolute bottom-[31%] left-[41%] w-1/4 h-auto"
          }
          alt="professionalism"
        />
        <Image
          src={Service}
          className={
            shiftPoint
              ? "absolute bottom-[38.5%] right-[35%] w-1/2 h-auto"
              : "absolute bottom-[13%] left-[57%] w-1/4 h-auto"
          }
          alt="service"
        />
        <Image
          src={Growth}
          className={
            shiftPoint
              ? "absolute bottom-[19.5%] right-[35%] w-1/2 h-auto"
              : "absolute bottom-[-5%] left-[41%] w-1/4 h-auto"
          }
          alt="growth"
        />
        <Image
          src={Knowledge}
          className={
            shiftPoint
              ? "absolute bottom-[29%] right-[2%] w-1/2 h-auto"
              : "absolute bottom-[-5%] left-[73%] w-1/4 h-auto"
          }
          alt="knowledge"
        />

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
            ? "absolute bottom-[4%] leading-snug"
            : "absolute bottom-[4%]"
        }
      >
        <p
          className={
            shiftPoint
              ? "text-[17vw] pl-[2%] leading-[75%] font-marcellus-sc"
              : "text-[4.5vw] pl-[2%] leading-[75%] md:pl-[35%] md:leading-[225%] md:pb-[2%] md:scale-[200%] lg:leading-[250%] font-marcellus-sc"
          }
        >
          CORE
        </p>
        <p
          className={
            shiftPoint
              ? "text-[17vw] pl-[2%] font-marcellus-sc"
              : "text-[4.5vw] pl-[2%] md:pl-[35%] md:scale-[200%] font-marcellus-sc"
          }
        >
          VALUES
        </p>
      </div>
    </div>
  );
};

export default CoreValues;
