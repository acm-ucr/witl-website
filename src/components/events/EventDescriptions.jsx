"use client";
import { motion } from "framer-motion";
import EventDescription from "./EventDescription";
const EventDescriptions = ({ events }) => {
  return (
    <div className="mt-[5%]">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "tween",
          duration: 0.5,
        }}
        className="ml-[4%] relative mb-[8vh] md:mb-[18vh]"
      >
        <div className="aspect-[3/1] md:aspect-[4/1] bg-witl-purple-600 w-[42%]"></div>
        <p className="absolute top-[45%] left-[25%] text-5xl md:text-[7rem]">
          Upcoming Events
        </p>
      </motion.div>
      <div className="pt-[6vh]">
        {events.length > 0 ? (
          events.slice(0, 3).map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: (index % 3) * 0.2,
                type: "tween",
                duration: 0.5,
              }}
              className="flex justify-center"
            >
              <EventDescription event={event} />
            </motion.div>
          ))
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
            }}
            className="text-[7vw] text-black text-end w-[90vw] bg-witl-purple-100 pr-[5%]"
          >
            No Upcoming Events
          </motion.div>
        )}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "tween",
          duration: 0.5,
        }}
        className="aspect-[3/1] md:aspect-[4/1] bg-witl-purple-600 w-[42%] mt-[5%] ml-[55%]"
      ></motion.div>
    </div>
  );
};

export default EventDescriptions;
