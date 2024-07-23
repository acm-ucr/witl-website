import Image from "next/image";
import Link from "next/link";
import Banner from "@/public/assets/banner.svg";

const TopResourcesBanner = ({ icon, link }) => {
  return (
    <div className=" relative mt-[5%]">
      <Image src={Banner} className="" alt="banner" width={400} />

      <Link
        href={link}
        target="_blank"
        className="absolute text-center bottom-0 text-witl-white-100 text-9xl px-32 pb-[5%]"
      >
        {icon}
      </Link>
    </div>
  );
};
export default TopResourcesBanner;
