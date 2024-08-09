import Image from "next/image";
import Link from "next/link";
import Banner from "@/public/assets/banner.svg";

const TopResourcesBanner = ({ icon, link }) => {
  return (
    <div className=" relative mt-[5%]">
      <Image src={Banner} className="w-[100%]" alt="banner" />

      <Link
        href={link}
        target="_blank"
        className="absolute text-center bottom-0  text-witl-white-100 text-[30px] md:text-6xl lg:text-[100px] left-1/2 transform -translate-x-1/2 pb-[5%]"
      >
        {icon}
      </Link>
    </div>
  );
};
export default TopResourcesBanner;
