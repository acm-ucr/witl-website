import Image from "next/image";
import BoardIMG from "@/public/board/Exec_Board.webp";

const BoardHeader = () => {
  return (
    <div className="bg-witl-purple-300 flex flex-row aspect-[2.2/1] relative">
      <div className="w-full h-full flex flex-row justify-end">
        <Image
          src={BoardIMG}
          alt="Board"
          className="w-[55%] h-auto self-end object-cover pr-[1%] translate-y-[-45%] md:translate-y-[-55%] lg:translate-y-[-95%]"
        />
      </div>
      <p className="text-witl-purple-100 z-0 leading-none w-min self-end absolute text-4xl md:text-6xl lg:text-8xl left-[5%] md:left-[10%] lg:left-[10%]">
        EXECUTIVE BOARD
      </p>
    </div>
  );
};
export default BoardHeader;
