"use client";
import SlideCard from "@/components/home/SlideCard";
import { RxDotFilled } from "react-icons/rx";
import { motion, useAnimate } from "framer-motion";
import { useState } from "react";
import { SlideItems } from "@/data/eventslides";

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

  const animate = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        when: "beforeChildren",
        staggerChildren: 0.6,
      },
    },
    hidden: {
      y: -20,
      opacity: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const animateX = {
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        when: "beforeChildren",
        staggerChildren: 0.6,
      },
    },
    hidden: {
      x: -15,
      opacity: 0,
      transition: {
        duration: 1,
        when: "afterChildren",
      },
    },
  };

  return (
    <motion.div
      className="min-h-[280px] md:min-h-[770px] lg:min-h-[570px] md:h-1/2 lg:h-screen flex relative mb-[3%]"
      variants={animate}
      transition={{ duration: 0.7, ease: "easeOut" }}
      initial="hidden"
      whileInView="visible"
    >
      <div
        ref={card0}
        className="bg-witl-purple-300 opacity-[0%] w-[26%] md:w-[23%] aspect-[9/10] rounded-xl md:rounded-3xl absolute bottom-[31%] md:bottom-[26%] left-[10%]"
      ></div>
      <div
        ref={card1}
        className="bg-witl-purple-300 opacity-[72%] w-[26%] md:w-[23%] aspect-[9/10] rounded-xl md:rounded-3xl absolute bottom-[31%] md:bottom-[26%] left-[6%] md:left-[10%]"
      ></div>
      <div
        ref={card2}
        className="bg-witl-purple-300 opacity-[72%] w-[26%] md:w-[23%] aspect-[9/10] rounded-xl md:rounded-3xl absolute bottom-[34%] md:bottom-[29%] left-[9%] md:left-[13%]"
      ></div>
      <div
        ref={card6}
        className="bg-witl-purple-300 opacity-[72%] w-[26%] md:w-[23%] aspect-[9/10] rounded-xl md:rounded-3xl absolute bottom-[34%] md:bottom-[29%] right-[9%] md:right-[13%]"
      ></div>
      <div
        ref={card7}
        className="bg-witl-purple-300 opacity-[72%] w-[26%] md:w-[23%] aspect-[9/10] rounded-xl md:rounded-3xl absolute bottom-[31%] md:bottom-[26%] right-[6%] md:right-[10%]"
      ></div>
      <div
        ref={card8}
        className="bg-witl-purple-300 opacity-[0%] w-[26%] md:w-[23%] aspect-[9/10] rounded-xl md:rounded-3xl absolute bottom-[31%] md:bottom-[26%] right-[10%]"
      ></div>
      <div
        ref={card3}
        className="bg-witl-purple-300 w-[26%] md:w-[23%] aspect-[9/10] rounded-xl md:rounded-3xl absolute bottom-[37%] md:bottom-[32%] left-[12%] md:left-[16%]"
        onClick={prevSlide}
      >
        <SlideCard
          image={SlideItems[leftInd].image}
          description={SlideItems[leftInd].description}
          year={SlideItems[leftInd].year}
        />
      </div>
      <div
        ref={card5}
        // className="bg-witl-purple-300 w-[26%] md:w-[23%] aspect-[9/10] rounded-xl md:rounded-3xl absolute bottom-[37%] md:bottom-[32%] right-[16%]"
        className="bg-witl-purple-300 w-[26%] md:w-[23%] aspect-[9/10] rounded-xl md:rounded-3xl absolute bottom-[37%] md:bottom-[32%] right-[12%] md:right-[16%]"
        onClick={nextSlide}
      >
        <SlideCard
          image={SlideItems[rightInd].image}
          description={SlideItems[rightInd].description}
          year={SlideItems[rightInd].year}
        />
      </div>
      <div
        ref={card4}
        className="bg-witl-purple-400 w-[26%] md:w-[23%] aspect-[9/10] rounded-xl md:rounded-3xl absolute bottom-[45%] md:bottom-[40%] right-[37%] md:right-[38.5%]"
      >
        <SlideCard
          image={SlideItems[currInd].image}
          description={SlideItems[currInd].description}
          year={SlideItems[currInd].year}
        />
      </div>
      <div className="absolute w-[33%] bottom-[28%] left-[43.5%] md:left-[45%] lg:left-[46%] grid grid-cols-10">
        {SlideItems.map((ITEMS, index) => (
          <motion.div
            className="w-fit aspect-[1/1]"
            whileHover={{ scale: 1.4, x: "10%" }}
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

      <motion.div variants={animate}>
        <p
          className="text-[120%] md:text-7xl bottom-[12%] left-[4%] absolute md:bottom-[10%] lg:bottom-[10%] md:left-[2%]"
          variants={animate}
        >
          HIGHLIGHTED
        </p>
        <p
          className="text-[250%] md:text-8xl absolute md:absolute -bottom-[3%] md:-bottom-[12%] lg:-bottom-[10%] left-[3%] md:left-[1%]"
          variants={animate}
        >
          EVENTS
        </p>
      </motion.div>
      <div className="text-sm ">
        <motion.p
          className="md:text-xl lg:text-4xl font-bold absolute bottom-[19%] right-[1%]"
          variants={animateX}
        >
          NETWORKING DINNERS
        </motion.p>
        <motion.p
          className="md:text-xl lg:text-4xl font-bold absolute bottom-[14%] md:bottom-[13.5%] lg:bottom-[14.5%] right-[1%]"
          variants={animateX}
        >
          LAW SCHOOL TOURS
        </motion.p>
        <motion.p
          className="md:text-xl lg:text-4xl font-bold absolute bottom-[9%] md:bottom-[8%] lg:bottom-[10%] right-[1%]"
          variants={animateX}
        >
          FELLOWSHIP PROGRAMS
        </motion.p>
        <motion.p
          className="md:text-xl lg:text-4xl font-bold absolute bottom-[4%] md:bottom-[2.5%] lg:bottom-[5.5%] right-[1%]"
          variants={animateX}
        >
          SCHEDULED EVENTS
        </motion.p>
        <motion.p
          className="md:text-xl lg:text-4xl font-bold absolute -bottom-[1.5%] lg:bottom-[1%] right-[1%]"
          variants={animateX}
        >
          AND MORE...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Slides;
