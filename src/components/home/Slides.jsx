"use client";
import SlideCard from "@/components/home/SlideCard";
import { RxDotFilled } from "react-icons/rx";
import { motion, useAnimate } from "framer-motion";
import { useState } from "react";
import { SlideItems } from "@/data/eventslides";

const shiftVariant = {
  initial: { opacity: "0" },
  translucentFade: { opacity: ["0%", "50%", "72%"] },
  fullShift1: {
    x: ["-13%", "0%"],
    y: ["11.4%", "0%"],
    opacity: ["0%", "100%"],
  },
  fullShift2: { x: ["-98%", "0%"], y: ["28%", "0%"], opacity: ["0%", "100%"] },
  fullShift3: { x: ["-98%", "0%"], y: ["-28%", "0%"], opacity: ["0%", "100%"] },
  translucentShift1: {
    x: ["-13%", "0%"],
    y: ["11.4%", "0%"],
    opacity: ["0%", "72%"],
  },
  translucentShift2: {
    x: ["-13%", "0%"],
    y: ["-11.4%", "0%"],
    opacity: ["0%", "72%"],
  },
};

const horShiftVariant = {
  initial: { opacity: "0" },
  leftShift: { x: ["-30%", "0%"], opacity: ["0%", "100%"] },
  rightShift: { x: ["30%", "0%"], opacity: ["0%", "100%"] },
};

const Slides = () => {
  const [currInd, setCurrInd] = useState(0);
  const [leftInd, setleftInd] = useState(SlideItems.length - 1);
  const [rightInd, setRightInd] = useState(currInd + 1);
  const [card0, animate0] = useAnimate();
  const [card1, animate1] = useAnimate();
  const [card2, animate2] = useAnimate();
  const [card3, animate3] = useAnimate();
  const [card4, animate4] = useAnimate();
  const [card5, animate5] = useAnimate();
  const [card6, animate6] = useAnimate();
  const [card7, animate7] = useAnimate();
  const [card8, animate8] = useAnimate();

  const animSet1 = () => {
    animate1(card1.current, { opacity: [0.72, 0, 0.72] }, { duration: 0.5 });
    animate2(
      card2.current,
      { x: ["-13%", "0%"], y: ["11.4%", "0%"] },
      { duration: 0.5 }
    );
    animate3(
      card3.current,
      { x: ["-13%", "0%"], y: ["11.4%", "0%"] },
      { duration: 0.5 }
    );
    animate4(
      card4.current,
      { x: ["-98%", "0%"], y: ["28%", "0%"] },
      { duration: 0.5 }
    );
    animate5(
      card5.current,
      { x: ["-98%", "0%"], y: ["-28%", "0%"] },
      { duration: 0.5 }
    );
    animate6(
      card6.current,
      { x: ["-13%", "0%"], y: ["-11.4%", "0%"] },
      { duration: 0.5 }
    );
    animate7(
      card7.current,
      { x: ["-13%", "0%"], y: ["-11.4%", "0%"] },
      { duration: 0.5 }
    );
    animate8(card8.current, { opacity: [0.72, 0] }, { duration: 0.5 });
  };

  const animSet2 = () => {
    animate0(card0.current, { opacity: [0.72, 0] }, { duration: 0.5 });
    animate1(
      card1.current,
      { x: ["13%", "0%"], y: ["-11.4%", "0%"] },
      { duration: 0.5 }
    );
    animate2(
      card2.current,
      { x: ["13%", "0%"], y: ["-11.4%", "0%"] },
      { duration: 0.5 }
    );
    animate3(
      card3.current,
      { x: ["98%", "0%"], y: ["-28%", "0%"] },
      { duration: 0.5 }
    );
    animate4(
      card4.current,
      { x: ["98%", "0%"], y: ["28%", "0%"] },
      { duration: 0.5 }
    );
    animate5(
      card5.current,
      { x: ["13%", "0%"], y: ["11.4%", "0%"] },
      { duration: 0.5 }
    );
    animate6(
      card6.current,
      { x: ["13%", "0%"], y: ["11.4%", "0%"] },
      { duration: 0.5 }
    );
    animate7(card7.current, { opacity: [0.72, 0, 0.72] }, { duration: 0.5 });
  };

  const prevSlide = () => {
    const isFirstSlide = currInd === 0;
    const newInd = isFirstSlide ? SlideItems.length - 1 : currInd - 1;
    const newLeftInd = newInd - 1 === -1 ? SlideItems.length - 1 : newInd - 1;
    const newRightInd = newInd + 1 === SlideItems.length ? 0 : newInd + 1;
    setCurrInd(newInd);
    setleftInd(newLeftInd);
    setRightInd(newRightInd);
    animSet1();
  };

  const nextSlide = () => {
    const isLastSlide = currInd === SlideItems.length - 1;
    const newInd = isLastSlide ? 0 : currInd + 1;
    const newLeftInd = newInd - 1 === -1 ? SlideItems.length - 1 : newInd - 1;
    const newRightInd = newInd + 1 === SlideItems.length ? 0 : newInd + 1;
    setCurrInd(newInd);
    setleftInd(newLeftInd);
    setRightInd(newRightInd);
    animSet2();
  };

  const goToSlide = (slideIdx) => {
    const newLeftInd =
      slideIdx - 1 === -1 ? SlideItems.length - 1 : slideIdx - 1;
    const newRightInd = slideIdx + 1 === SlideItems.length ? 0 : slideIdx + 1;
    const prevInd = currInd;
    setCurrInd(slideIdx);
    setleftInd(newLeftInd);
    setRightInd(newRightInd);

    if (prevInd === slideIdx) {
    } else if (
      Math.abs(prevInd + (Slides.length - slideIdx - 1)) >
      Math.abs(slideIdx - prevInd)
    ) {
      animSet2();
    } else {
      animSet1();
    }
  };

  return (
    <div className="w-screen aspect-[3/2] flex relative mb-[3%]">
      <div
        ref={card0}
        className="bg-witl-purple-300 opacity-[0%] w-[26%] md:w-[23%] aspect-[9/10] rounded-xl md:rounded-3xl absolute bottom-[31%] md:bottom-[26%] left-[10%]"
      ></div>
      <motion.div
        variants={shiftVariant}
        initial="initial"
        whileInView="translucentFade"
        transition={{ duration: 0.5 }}
        ref={card1}
        className="bg-witl-purple-300 opacity-[72%] w-[26%] md:w-[23%] aspect-[9/10] rounded-xl md:rounded-3xl absolute bottom-[31%] md:bottom-[26%] left-[6%] md:left-[10%]"
      ></motion.div>
      <motion.div
        variants={shiftVariant}
        initial="initial"
        whileInView="translucentShift1"
        transition={{ duration: 0.5 }}
        ref={card2}
        className="bg-witl-purple-300 opacity-[72%] w-[26%] md:w-[23%] aspect-[9/10] rounded-xl md:rounded-3xl absolute bottom-[34%] md:bottom-[29%] left-[9%] md:left-[13%]"
      ></motion.div>
      <motion.div
        variants={shiftVariant}
        initial="initial"
        whileInView="translucentShift2"
        transition={{ duration: 0.5 }}
        ref={card6}
        className="bg-witl-purple-300 opacity-[72%] w-[26%] md:w-[23%] aspect-[9/10] rounded-xl md:rounded-3xl absolute bottom-[34%] md:bottom-[29%] right-[9%] md:right-[13%]"
      ></motion.div>
      <motion.div
        variants={shiftVariant}
        initial="initial"
        whileInView="translucentShift2"
        transition={{ duration: 0.5 }}
        ref={card7}
        className="bg-witl-purple-300 opacity-[72%] w-[26%] md:w-[23%] aspect-[9/10] rounded-xl md:rounded-3xl absolute bottom-[31%] md:bottom-[26%] right-[6%] md:right-[10%]"
      ></motion.div>
      <div
        ref={card8}
        className="bg-witl-purple-300 opacity-[0%] w-[26%] md:w-[23%] aspect-[9/10] rounded-xl md:rounded-3xl absolute bottom-[31%] md:bottom-[26%] right-[10%]"
      ></div>
      <motion.div
        variants={shiftVariant}
        initial="initial"
        whileInView="fullShift1"
        transition={{ duration: 0.5 }}
        ref={card3}
        className="bg-witl-purple-300 w-[26%] md:w-[23%] aspect-[9/10] rounded-xl md:rounded-3xl absolute bottom-[37%] md:bottom-[32%] left-[12%] md:left-[16%]"
        onClick={prevSlide}
      >
        <SlideCard
          image={SlideItems[leftInd].image}
          description={SlideItems[leftInd].description}
          year={SlideItems[leftInd].year}
        />
      </motion.div>
      <motion.div
        variants={shiftVariant}
        initial="initial"
        whileInView="fullShift3"
        transition={{ duration: 0.5 }}
        ref={card5}
        className="bg-witl-purple-300 w-[26%] md:w-[23%] aspect-[9/10] rounded-xl md:rounded-3xl absolute bottom-[37%] md:bottom-[32%] right-[12%] md:right-[16%]"
        onClick={nextSlide}
      >
        <SlideCard
          image={SlideItems[rightInd].image}
          description={SlideItems[rightInd].description}
          year={SlideItems[rightInd].year}
        />
      </motion.div>
      <motion.div
        variants={shiftVariant}
        initial="initial"
        whileInView="fullShift2"
        transition={{ duration: 0.5 }}
        ref={card4}
        className="bg-witl-purple-400 w-[26%] md:w-[23%] aspect-[9/10] rounded-xl md:rounded-3xl absolute bottom-[45%] md:bottom-[40%] right-[37%] md:right-[38.5%]"
      >
        <SlideCard
          image={SlideItems[currInd].image}
          description={SlideItems[currInd].description}
          year={SlideItems[currInd].year}
        />
      </motion.div>
      <div className="absolute w-[33%] bottom-[28%] left-[43.5%] md:left-[45%] lg:left-[46%] grid grid-cols-10">
        {SlideItems.map((ITEMS, index) => (
          <motion.div
            className="w-fit aspect-[1/1]"
            whileInView={{ opacity: ["0%", "50%", "100%"] }}
            whileHover={{ scale: 1.4, x: "10%" }}
            transition={{ duration: 0.5, delay: 0 + index / 10 }}
            onClick={() => goToSlide(index)}
            key={index}
          >
            {index === currInd ? (
              <RxDotFilled size="30px" color="#000000" />
            ) : (
              <RxDotFilled size="30px" color="#F3D8FF" />
            )}
          </motion.div>
        ))}
      </div>

      <motion.p
        variants={horShiftVariant}
        initial="initial"
        whileInView="leftShift"
        transition={{ duration: 0.5 }}
        className="text-[4vw] absolute bottom-[14%] left-[2%]"
      >
        HIGHLIGHTED
      </motion.p>
      <motion.p
        variants={horShiftVariant}
        initial="initial"
        whileInView="leftShift"
        transition={{ duration: 0.5 }}
        className="text-[8.5vw] absolute -bottom-[1%] left-[2%]"
      >
        EVENTS
      </motion.p>
      <div className="text-[2vw] font-bold">
        <motion.p
          variants={horShiftVariant}
          initial="initial"
          whileInView="rightShift"
          transition={{ duration: 0.5 }}
          className="absolute bottom-[19%] right-[1%]"
        >
          NETWORKING DINNERS
        </motion.p>
        <motion.p
          variants={horShiftVariant}
          initial="initial"
          whileInView="rightShift"
          transition={{ duration: 0.5, delay: 0.1 }}
          className="absolute bottom-[14.5%] right-[1%]"
        >
          LAW SCHOOL TOURS
        </motion.p>
        <motion.p
          variants={horShiftVariant}
          initial="initial"
          whileInView="rightShift"
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute bottom-[10%] right-[1%]"
        >
          FELLOWSHIP PROGRAMS
        </motion.p>
        <motion.p
          variants={horShiftVariant}
          initial="initial"
          whileInView="rightShift"
          transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute bottom-[5.5%] right-[1%]"
        >
          SCHEDULED EVENTS
        </motion.p>
        <motion.p
          variants={horShiftVariant}
          initial="initial"
          whileInView="rightShift"
          transition={{ duration: 0.5, delay: 0.4 }}
          className="absolute bottom-[1%] right-[1%]"
        >
          AND MORE...
        </motion.p>
      </div>
    </div>
  );
};

export default Slides;
