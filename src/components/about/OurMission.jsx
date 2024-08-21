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
          className="grid grid-cols-1 md:grid-cols-2 bg-witl-purple-300 rounded-2xl text-witl-purple-100 w-10/12 2xl:w-8/12"
        >
          <motion.div
            variants={animate}
            initial="start"
            whileInView="end"
            transition={{ delay: 0.45 }}
            className="flex items-center md:items-start px-[5%] pt-[5%] md:p-[5%] text-[3vw] md:text-[1.8vw] lg:test-[1.86vw] 2xl:text-[1.47vw] leading-[120%] text-center md:text-left md:w-[105%]"
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
            rights issues. - Kimberlé Crenshaw
          </motion.div>
          <motion.div
            variants={animate}
            initial="start"
            whileInView="end"
            transition={{ delay: 0.45 }}
            className="flex justify-center items-center md:items-start p-[5%] md:ml-[15%] md:w-[85%]"
          >
            <Image src={Pic} alt="grouppic2" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurMission;
