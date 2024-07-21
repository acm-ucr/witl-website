import Image from "next/image";
import BoardIMG from "@/public/board/Exec_Board.webp";

const BoardHeader = () => {
  return (
    <div className="bg-witl-purple-300 flex flex-col pb-[15%] mt-[5%]">
      <Image
        src={BoardIMG}
        alt="Board"
        className="self-end mr-[5%] mt-[20%] w-[50%] md:mt-[5%]"
      />
      <p className="text-witl-purple-100 w-min absolute text-4xl top-[15%] sm:text-6xl md:text-8xl leading-none z-0 left-[5%] sm:top-[20%] sm:left-[10%] md:top-[40%] md:left-[5%] md:text-8xl">
        EXECUTIVE BOARD
      </p>
    </div>
  );
};
export default BoardHeader;
