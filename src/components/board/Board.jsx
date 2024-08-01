"use client";
import BoardCard from "./BoardCard";
import { BoardItems } from "@/data/board.js";
import { motion } from "framer-motion";

const Board = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-2 mt-[5%] mb-[25%]">
        {BoardItems.map((CARD, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.4, type: "tween", duration: 1 }}
          >
            <BoardCard
              name={CARD.name}
              position={CARD.position}
              image={CARD.image}
              linkedIn={CARD.linkedIn}
            />
          </motion.div>
        ))}
      </div>
    </>
  );
};
export default Board;
