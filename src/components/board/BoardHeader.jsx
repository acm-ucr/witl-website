import Image from "next/image";
import BoardIMG from "@/public/board/Exec_Board.webp";

const BoardHeader = () => {
  return (
    <div className="bg-witl-purple-300 flex flex-col pb-[15%] mt-[5%]">
      <Image
        src={BoardIMG}
        alt="Board"
        className="self-end mr-[5%] mt-[5%] w-[50%]"
      />
      <p className="text-witl-purple-100 w-min absolute text-8xl leading-none z-0 top-[32%] left-[12%]">
        EXECUTIVE BOARD
      </p>
    </div>
  );
};
export default BoardHeader;
