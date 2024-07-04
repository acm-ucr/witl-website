import Image from "next/image";
import HeaderImg from "@/public/assets/mainHeader.webp";

const Header = () => {
  return (
    <div className="flex justify-center">
      <div className="text-witl-purple-100 w-[75%]">
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
    </div>
  );
};

export default Header;
