import Image from "next/image";
import HeaderImg from "@/public/assets/mainHeader.webp";

const Header = () => {
  return (
    <div className="bg-witl-purple-300 flex flex-col items-center">
      <div className="text-witl-purple-100 w-[78%]">
        <div className="flex flex-row">
          <p className="text-[13rem] leading-tight">WOMXN</p>
          <div className="flex flex-col w-[25%] justify-end">
            <p className="text-5xl mb-[3%]">IN THE</p>
            <p className="mb-[15%]">
              University of California, Riverside&apos;s undergraduate community
              passionate about law and the pursuit of justice.
            </p>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="w-[60%]">
            <Image
              src={HeaderImg}
              alt="Header Image"
              className="w-[95%] h-auto"
            />
          </div>
          <p className="text-[13rem] w-[30%] leading-none mt-[-1.5%]">LAW</p>
        </div>
      </div>

      <div className="relative bg-witl-purple-300 mt-[50%] w-[100%]">
        <div className="text-witl-purple-200 pl-[10%] flex flex-col items-start leading-tight">
          <div className="text-[8rem] mt-[5%]">OUR</div>
          <div className="text-10xl">&nbsp;&nbsp;SPONSORS</div>
        </div>
        <div className="absolute top-[15%] right-[0%] bg-witl-purple-400 text-witl-white-100 text-[4rem] w-[55%]">
          <div className="pl-[3%]">BLUEPRINT TEST PREP</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
