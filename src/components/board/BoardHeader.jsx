import Image from "next/image";
import BoardIMG from "@/public/board/Exec_Board.webp";

const BoardHeader = () => {
  return (
    <div className="bg-witl-purple-300 flex flex-col pb-[15%]">
      <Image
        src={BoardIMG}
        alt="Board"
        className="self-end mr-[3%] mt-[3%] w-[60%]"
      />
      <p className="text-witl-purple-100 w-min absolute text-9xl leading-none z-0 top-[58%] left-[10%]">
        EXECUTIVE BOARD
      </p>
    </div>
  );
};
export default BoardHeader;
