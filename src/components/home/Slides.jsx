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

  const prevSlide = () => {
    const isFirstSlide = currInd === 0;
    const newInd = isFirstSlide ? SlideItems.length - 1 : currInd - 1;
    const newLeftInd = newInd - 1 === -1 ? SlideItems.length - 1 : newInd - 1;
    const newRightInd = newInd + 1 === SlideItems.length ? 0 : newInd + 1;
    setCurrInd(newInd);
    setleftInd(newLeftInd);
    setRightInd(newRightInd);

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

  const nextSlide = () => {
    const isLastSlide = currInd === SlideItems.length - 1;
    const newInd = isLastSlide ? 0 : currInd + 1;
    const newLeftInd = newInd - 1 === -1 ? SlideItems.length - 1 : newInd - 1;
    const newRightInd = newInd + 1 === SlideItems.length ? 0 : newInd + 1;
    setCurrInd(newInd);
    setleftInd(newLeftInd);
    setRightInd(newRightInd);

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
    } else {
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
    }
  };

  return (
    <div className="h-screen relative">
      <div
        ref={card0}
        className="bg-witl-purple-300 opacity-[0%] w-[23%] aspect-[9/10] rounded-3xl absolute bottom-[26%] left-[10%]"
      ></div>
      <div
        ref={card1}
        className="bg-witl-purple-300 opacity-[72%] w-[23%] aspect-[9/10] rounded-3xl absolute bottom-[26%] left-[10%]"
      ></div>
      <div
        ref={card2}
        className="bg-witl-purple-300 opacity-[72%] w-[23%] aspect-[9/10] rounded-3xl absolute bottom-[29%] left-[13%]"
      ></div>
      <div
        ref={card6}
        className="bg-witl-purple-300 opacity-[72%] w-[23%] aspect-[9/10] rounded-3xl absolute bottom-[29%] right-[13%]"
      ></div>
      <div
        ref={card7}
        className="bg-witl-purple-300 opacity-[72%] w-[23%] aspect-[9/10] rounded-3xl absolute bottom-[26%] right-[10%]"
      ></div>
      <div
        ref={card8}
        className="bg-witl-purple-300 opacity-[0%] w-[23%] aspect-[9/10] rounded-3xl absolute bottom-[26%] right-[10%]"
      ></div>
      <div
        ref={card3}
        className="bg-witl-purple-300 w-[23%] aspect-[9/10] rounded-3xl absolute bottom-[32%] left-[16%]"
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
        className="bg-witl-purple-300 w-[23%] aspect-[9/10] rounded-3xl absolute bottom-[32%] right-[16%]"
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
        className="bg-witl-purple-400 w-[23%] aspect-[9/10] rounded-3xl absolute bottom-[40%] right-[38.5%]"
      >
        <SlideCard
          image={SlideItems[currInd].image}
          description={SlideItems[currInd].description}
          year={SlideItems[currInd].year}
        />
      </div>

      <div className="absolute w-[33%] bottom-[28%] left-[46%] grid grid-cols-10">
        {SlideItems.map((ITEMS, index) => (
          <motion.div
            whileHover={{ scale: 1.4, x: "10%" }}
            onClick={() => goToSlide(index)}
            key={index}
          >
            <RxDotFilled size="30px" color="#F3D8FF" />
          </motion.div>
        ))}
      </div>

      <p className="text-7xl absolute bottom-[15%] left-2">HIGHLIGHTED</p>
      <p className="text-9xl absolute -bottom-[5%] left-1">EVENTS</p>
      <p className="text-4xl font-bold absolute bottom-[19%] right-1">
        NETWORKING DINNERS
      </p>
      <p className="text-4xl font-bold absolute bottom-[14.5%] right-1">
        LAW SCHOOL TOURS
      </p>
      <p className="text-4xl font-bold absolute bottom-[10%] right-1">
        FELLOWSHIP PROGRAMS
      </p>
      <p className="text-4xl font-bold absolute bottom-[5.5%] right-1">
        SCHEDULED EVENTS
      </p>
      <p className="text-4xl font-bold absolute bottom-[1%] right-1">
        AND MORE...
      </p>
    </div>
  );
};

export default Slides;
