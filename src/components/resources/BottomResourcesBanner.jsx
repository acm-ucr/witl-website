import Image from "next/image";
import Link from "next/link";
import Banner from "@/public/assets/banner.svg";

const BottomResourcesBanner = ({ icon, link }) => {
  return (
    <div className=" relative mt-[45%] ">
      <Image src={Banner} className="" alt="banner" width={400} />
      <Link
        href={link}
        target="_blank"
        className="absolute  bottom-0 text-witl-white-100  text-9xl pb-[45%] mx-32"
      >
        {icon}
      </Link>
    </div>
  );
};
export default BottomResourcesBanner;
