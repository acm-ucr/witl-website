import BoardCard from "./BoardCard";
import { BoardItems } from "@/data/board.js";

const Board = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 gap-y-8">
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
  );
};
export default Board;
