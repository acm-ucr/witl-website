"use client";
import Pic from "@/public/about/grouppic2.webp";
import Image from "next/image";
import { motion } from "framer-motion";

const animate = {
  start: {
    opacity: 0,
    y: 40,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

const OurMission = () => {
  return (
    <div className="py-[7vh]">
      <motion.div
        variants={animate}
        initial="start"
        whileInView="end"
        transition={{ delay: 0.2 }}
        className="flex items-center justify-center pb-[2vh]"
      >
        <p className="m-auto p-auto text-6xl md:text-7xl lg:text-[7vw]">
          Our Mission
        </p>
      </motion.div>
      <div className="flex justify-center">
        <motion.div
          variants={animate}
          initial="start"
          whileInView="end"
          transition={{ delay: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-3 bg-witl-purple-300 rounded-2xl text-witl-purple-100 w-10/12 2xl:w-8/12"
        >
          <motion.div
            variants={animate}
            initial="start"
            whileInView="end"
            transition={{ delay: 0.45 }}
            className="flex items-center pl-4 py-4 pr-6 md:pl-5 md:py-5 text-[2.5vw] md:text-[1.75vw] lg:text-[1.5vw] xl:text-[1.4vw] 2xl:text-[1.1vw] text-center md:text-left col-span-2"
          >
            Womxn in the Law is UC Riverside’s undergraduate community
            passionate about law and the pursuit of justice. We aim to create a
            supportive community and network for diverse womxn pursuing legal
            careers. In creating a supportive community, establishing a robust
            network of legal professionals, judges, law school faculty, and
            accomplished attorneys, Womxn in the Law amplifies the needs of
            UCR’s most disadvantaged student population. <br />
            The X in womxn honors women’s intersecting identities, as women in
            America are impacted by a multitude of social justice and human
            rights issues. <br></br> - Kimberlé Crenshaw
          </motion.div>
          <motion.div
            variants={animate}
            initial="start"
            whileInView="end"
            transition={{ delay: 0.45 }}
            className="flex p-8 md:pr-5 md:pl-0 pt-2 md:pt-8 justify-end"
          >
            <Image src={Pic} alt="grouppic2" style={{ borderRadius: 10 }} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurMission;
