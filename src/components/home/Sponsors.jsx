"use client";

import { motion } from "framer-motion";

const animations = {
  start: {
    opacity: 0,
    y: 30,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

const Sponsors = () => {
  return (
    <div className="relative bg-witl-purple-300 w-[100%]">
      <div className="text-witl-purple-200 pl-[15%] md:pl-[10%] flex flex-col items-start leading-tight pt-4 md:pt-0">
        <motion.div
          className="text-[10vw]"
          variants={animations}
          initial="start"
          whileInView="end"
          transition={{ delay: 0.2 }}
        >
          OUR
        </motion.div>
        <motion.div
          className="text-[13vw]"
          variants={animations}
          initial="start"
          whileInView="end"
          transition={{ delay: 0.2 }}
        >
          &nbsp;&nbsp;SPONSORS
        </motion.div>
      </div>
      <div className="absolute top-[15%] right-[0%] bg-witl-purple-300 text-witl-white-100 font-libre-caslon-text font-bold w-[55%]">
        <motion.div
          className="pl-[3%] py-1 md:py-3 bg-witl-purple-400 text-[2vw]"
          variants={animations}
          initial="start"
          whileInView="end"
          transition={{ delay: 0.2 }}
        >
          BLUEPRINT TEST PREP
        </motion.div>
      </div>
      <div className="flex flex-col bg-witl-purple-300 text-white font-bold">
        <motion.div
          className="w-1/2 bg-witl-purple-400 mb-6 mt-4 py-1 md:py-3 font-libre-caslon-text text-right pr-[2%] md:pr-5 text-[2vw]"
          variants={animations}
          initial="start"
          whileInView="end"
          transition={{ delay: 0.2 }}
        >
          BEST BEST KRIEGER
        </motion.div>
        <div className="flex justify-end">
          <motion.div
            className="w-1/3 bg-witl-purple-400 py-1 md:py-3 font-libre-caslon-text pl-[2%] text-left text-[2vw] mt-[-3%] md:mt-[0]"
            variants={animations}
            initial="start"
            whileInView="end"
            transition={{ delay: 0.2 }}
          >
            HQR INC.
          </motion.div>
        </div>
        <div className="border-witl-purple-400 border-b-[21px] pt-[2%]"></div>
      </div>
    </div>
  );
};

export default Sponsors;
