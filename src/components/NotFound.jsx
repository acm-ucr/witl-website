"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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

const NotFound = () => {
  return (
    <div className="bg-witl-purple-400 min-h-screen font-marcellus-sc flex flex-col justify-center items-center">
      <motion.p
        className="text-witl-white-100 pb-8 text-center text-3xl md:text-5xl"
        variants={animations}
        initial="start"
        whileInView="end"
        transition={{ delay: 0.2 }}
      >
        Page Not Found
      </motion.p>
      <motion.div
        className="flex flex-col bg-witl-purple-300 rounded-2xl w-9/12 md:w-6/12 py-6"
        variants={animations}
        initial="start"
        whileInView="end"
        transition={{ delay: 0.2 }}
      >
        <motion.p
          className="text-witl-purple-100 font-libre-caslon-text text-center text-7xl md:text-9xl"
          variants={animations}
          initial="start"
          whileInView="end"
          transition={{ delay: 0.2 }}
        >
          404
        </motion.p>
      </motion.div>

      <div className="flex flex-col items-center justify-center rounded-2xl mt-12">
        <motion.div
          variants={animations}
          initial="start"
          whileInView="end"
          transition={{ delay: 0.2 }}
        >
          <Link
            href="/"
            className="bg-witl-white-100 text-witl-purple-300 rounded-2xl	text-2xl font-medium mt-7 px-10 py-2 md:px-24 py-4"
          >
            Back To Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
