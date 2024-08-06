"use client";
import { motion } from "framer-motion";
import EventDescription from "./EventDescription";

const EventDescriptions = ({ events }) => {
  return (
    <div className="mt-[5%]">
      <div className="ml-[4%] relative mb-[6%]">
        <div className="bg-witl-purple-600 w-[42%] h-[160px]"></div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-[45%] left-[25%] text-7xl lg:text-9xl"
        >
          <p>Month</p>
        </motion.div>
      </div>
      <div className="flex flex-col items-center">
        {events.length > 0 ? (
          events.map((event, index) => (
            <EventDescription key={index} event={event} />
          ))
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p>No Upcoming Events</p>
          </motion.div>
        )}
      </div>
      <div className="bg-witl-purple-600 w-[42%] h-[160px] mt-[10%] ml-[55%]"></div>
    </div>
  );
};

export default EventDescriptions;
