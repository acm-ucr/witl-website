import BoardCard from "./BoardCard";
import { BoardItems } from "@/data/board.js";

const Board = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-2 mt-[5%] mb-[25%]">
        {BoardItems.map((CARD, index) => (
          <BoardCard
            name={CARD.name}
            position={CARD.position}
            image={CARD.image}
            linkedIn={CARD.linkedIn}
            key={index}
          />
        ))}
      </div>
    </>
  );
};
export default Board;
