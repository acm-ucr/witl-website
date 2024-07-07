import Image from "next/image";
import BoardIMG from "@/public/board/Exec_Board.webp";

const BoardHeader = () => {
  return (
    <div className="bg-witl-purple-300 flex flex-col pb-56">
      <Image src={BoardIMG} alt="Board" className="self-end mr-10 mt-10" />
      <p className="text-witl-purple-100 w-min text-8xl absolute z-0 top-[60%] left-[9%]">
        EXECUTIVE BOARD
      </p>
    </div>
  );
};
export default BoardHeader;
