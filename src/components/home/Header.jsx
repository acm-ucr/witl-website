import Image from "next/image";
import HeaderImg from "@/public/assets/mainHeader.webp";

const Header = () => {
  return (
    <div className="bg-witl-purple-300 flex flex-col items-center w-screen">
      <div className="text-witl-purple-100 w-[78%] lg:mt-[10%] mt-[22%]">
        <div className="flex flex-row items-center justify-center">
          <p className="lg:text-[13rem] leading-tight text-5xl md:text-7xl">
            WOMXN
          </p>
          <div className="flex flex-col w-[25%] justify-end">
            <p className="lg:text-5xl mb-[3%] text-lg md:text-3xl">IN THE</p>
            <p className="mb-[15%] text-[0.3rem] lg:text-sm md:text-[0.5rem]">
              University of California, Riverside&apos;s undergraduate community
              passionate about law and the pursuit of justice.
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center mb-2">
          <div className="w-[60%]">
            <Image
              src={HeaderImg}
              alt="Header Image"
              className="w-[95%] h-auto"
            />
          </div>
          <p className="lg:text-[13rem] w-[30%] leading-none mt-[-1.5%] text-5xl md:text-7xl">
            LAW
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
