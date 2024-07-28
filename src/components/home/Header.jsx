import Image from "next/image";
import HeaderImgMobile from "@/public/assets/logo-transparent.webp";
import HeaderImg from "@/public/assets/mainHeader.webp";

const Header = () => {
  return (
    <>
      <div className="bg-witl-purple-300 hidden md:flex flex-col items-center">
        <div className="text-witl-purple-100 w-[90%] lg:w-[80%] lg:mt-[10%] mt-[22%]">
          <div className="flex flex-row items-center justify-between">
            <p className="lg:text-[13rem] leading-tight text-6xl md:text-7xl">
              WOMXN
            </p>
            <div className="flex flex-col">
              <p className="lg:text-6xl mb-[3%] text-2xl md:text-3xl">IN THE</p>
              <p className="mb-[15%] text-[0.6rem] lg:text-sm md:text-[1rem]">
                University of California, Riverside&apos;s undergraduate community
                passionate about law and the pursuit of justice.
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-center mb-2">
            <div className="w-[65%]">
              <Image
                src={HeaderImg}
                alt="Header Image"
                className="w-[95%] h-auto"
              />
            </div>
            <p className="lg:text-[13rem] w-[30%] leading-none mt-[-1.5%] text-6xl md:text-7xl">
              LAW
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-witl-purple-300 flex md:hidden flex-col items-center">
        <div className="text-witl-purple-100 w-[90%] lg:w-[80%] lg:mt-[10%] mt-[22%]">
          <div className="flex flex-col items-center justify-between">
            <p className="lg:text-[13rem] leading-tight text-6xl md:text-7xl">
              WOMXN
            </p>
            <div className="flex flex-row mx-10 mb-[15%]">
              <div className="flex flex-col space-y-2 mr-[-15%]">
                <p className="lg:text-6xl mb-[3%] text-4xl md:text-5xl">IN THE</p>
                <p className="lg:text-[13rem] w-[30%] leading-none mt-[-1.5%] text-6xl md:text-7xl">
                  LAW
                </p>
                <p className="text-[0.6rem] lg:text-sm md:text-[1rem] w-[70%]">
                  University of California, Riverside&apos;s undergraduate community
                  passionate about law and the pursuit of justice.
                </p>
              </div>
              <div className="bg-witl-purple-100 w-full content-center justify-center">
                <Image
                  src={HeaderImgMobile}
                  alt="Header Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
