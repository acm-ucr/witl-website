import Image from "next/image";
import left from "@/public/about/grouppic.webp";
import center from "@/public/about/grouppic3.webp";
import head from "@/public/about/grouppic3top.webp";
import right from "@/public/about/grouppic4.webp";

const AboutUsGroups = () => {
  return (
    <div className="flex flex-box w-[100%] mt-[-100px] z-0">
      <div className="my-[10%]">
        <Image src={left} alt="group pic 1" />
      </div>
      <div className="mx-auto object-fit">
        <Image src={head} alt="header pic 2" />
        <Image src={center} alt="group pic 2" />
      </div>
      <div className="my-[10%]">
        <Image src={right} alt="group pic 3" />
      </div>
    </div>
  );
};
export default AboutUsGroups;
