"use client";
import Image from "next/image";
import { RxDotFilled } from "react-icons/rx";
import { motion, useAnimate } from "framer-motion";
import { useState } from "react";

import left from "@/public/about/grouppic1.webp";
import center from "@/public/about/grouppicture3.webp";
import right from "@/public/about/grouppict4.webp";

const AboutUsGroups = () => {
  const [currInd, setCurrInd] = useState(1);
  const [leftInd, setLeftInd] = useState(0);
  const [rightInd, setRightInd] = useState(2);
  const [im0, animate0] = useAnimate();
  const [im1, animate1] = useAnimate();
  const [im2, animate2] = useAnimate();
  const [im3, animate3] = useAnimate();
  const [im4, animate4] = useAnimate();

  const aboutItems = [left, center, right];

  const animSet1 = () => {
    animate1(im1.current, { opacity: [1, 0, 1] }, { duration: 0.5 });
    animate2(
      im2.current,
      { x: ["-220%", "0%"], y: ["22%", "0%"] },
      { duration: 0.5 }
    );
    animate3(
      im3.current,
      { x: ["-220%", "0%"], y: ["-22%", "0%"] },
      { duration: 0.5 }
    );
    animate4(
      im4.current,
      { opacity: [1, 1, 0], x: ["0%", "220%", "0%"] },
      { duration: 0.5 }
    );
  };

  const animSet2 = () => {
    animate0(
      im0.current,
      { opacity: [1, 1, 0], x: ["0%", "-220%", "0%"] },
      { duration: 0.5 }
    );
    animate1(
      im1.current,
      { x: ["220%", "0%"], y: ["-22%", "0%"] },
      { duration: 0.5 }
    );
    animate2(
      im2.current,
      { x: ["220%", "0%"], y: ["22%", "0%"] },
      { duration: 0.5 }
    );
    animate3(im3.current, { opacity: [1, 0, 1] }, { duration: 0.5 });
  };

  const animSet3 = () => {
    animate1(im1.current, { opacity: [1, 0, 1] }, { duration: 0.5 });
    animate2(
      im2.current,
      { x: ["-100%", "0%"], y: ["22%", "0%"] },
      { duration: 0.5 }
    );
    animate3(
      im3.current,
      { x: ["-100%", "0%"], y: ["-22%", "0%"] },
      { duration: 0.5 }
    );
    animate4(
      im4.current,
      { opacity: [1, 1, 0], x: ["0%", "220%", "0%"] },
      { duration: 0.5 }
    );
  };

  const animSet4 = () => {
    animate0(
      im0.current,
      { opacity: [1, 1, 0], x: ["0%", "-220%", "0%"] },
      { duration: 0.5 }
    );
    animate1(
      im1.current,
      { x: ["100%", "0%"], y: ["-22%", "0%"] },
      { duration: 0.5 }
    );
    animate2(
      im2.current,
      { x: ["100%", "0%"], y: ["22%", "0%"] },
      { duration: 0.5 }
    );
    animate3(im3.current, { opacity: [1, 0, 1] }, { duration: 0.5 });
  };

  const prevSlide = () => {
    const newInd = currInd === 0 ? 2 : currInd - 1;
    setLeftInd(newInd - 1 === -1 ? 2 : newInd - 1);
    setRightInd(newInd + 1 === 3 ? 0 : newInd + 1);
    setCurrInd(newInd);

    if (window.innerWidth < 1024) {
      animSet3();
    } else {
      animSet1();
    }
  };

  const nextSlide = () => {
    const newInd = currInd === 2 ? 0 : currInd + 1;
    setLeftInd(newInd - 1 === -1 ? 2 : newInd - 1);
    setRightInd(newInd + 1 === 3 ? 0 : newInd + 1);
    setCurrInd(newInd);

    if (window.innerWidth < 1024) {
      animSet4();
    } else {
      animSet2();
    }
  };

  const goToSlide = (slideIdx) => {
    const prevInd = currInd;
    setLeftInd(slideIdx - 1 === -1 ? 2 : slideIdx - 1);
    setRightInd(slideIdx + 1 === 3 ? 0 : slideIdx + 1);
    setCurrInd(slideIdx);

    if (prevInd === slideIdx) {
    } else if (slideIdx > prevInd || (slideIdx === 0 && prevInd === 2)) {
      if (window.innerWidth < 1024) {
        animSet4();
      } else {
        animSet2();
      }
    } else {
      if (window.innerWidth < 1024) {
        animSet3();
      } else {
        animSet1();
      }
    }
  };

  return (
    <div className="relative w-[100%] aspect-[4/3] mt-[-100px]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute w-[30%] lg:w-[20%] aspect-[3/5] top-[15%] left-[-5%] opacity-0"
        ref={im0}
      >
        <Image src={aboutItems[rightInd]} alt="group pic" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute w-[30%] lg:w-[20%] aspect-[3/5] top-[15%] right-[-5%] opacity-0"
        ref={im4}
      >
        <Image src={aboutItems[leftInd]} alt="group pic" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute w-[30%] lg:w-[20%] aspect-[3/5] top-[15%] left-[-5%]"
        onClick={prevSlide}
        ref={im1}
      >
        <Image src={aboutItems[leftInd]} alt="group pic" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute w-[30%] lg:w-[20%] aspect-[3/5] left-[50%] mx-[-15%] lg:mx-[-10%]"
        ref={im2}
      >
        <Image src={aboutItems[currInd]} alt="group pic" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute w-[30%] lg:w-[20%] aspect-[3/5] top-[15%] right-[-5%]"
        onClick={nextSlide}
        ref={im3}
      >
        <Image src={aboutItems[rightInd]} alt="group pic" />
      </motion.div>

      <div className="absolute w-[30%] lg:w-[20%] aspect-[3/5] left-[50%] transform -translate-x-1/2 ">
        <div className="relative w-[50%] -bottom-[100%] left-[45%] md:left-[55%] -mx-[25%]  grid grid-cols-3">
          {aboutItems.map((ITEMS, index) => (
            <motion.div
              className="w-fit aspect-[1/1]"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.4, x: "10%" }}
              onClick={() => goToSlide(index)}
              key={index}
            >
              {index === currInd ? (
                <RxDotFilled size="30px" color="#FFFFFF" />
              ) : (
                <RxDotFilled size="30px" color="#F3D8FF" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default AboutUsGroups;
