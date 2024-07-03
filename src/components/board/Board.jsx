import Image from "next/image";
import BoardIMG from "@/public/board/Exec_Board.webp";

const Board = () => {
  return (
    <div className="bg-witl-purple-300 flex flex-col pb-40">
      <Image src={BoardIMG} alt="Board" className="self-end mr-10 mt-10" />
      <p
        className="text-witl-purple-100 w-min text-8xl absolute z-0"
        style={{ bottom: "4%", left: "9%" }}
      >
        EXECUTIVE BOARD
      </p>
    </div>
  );
};
export default Board;
