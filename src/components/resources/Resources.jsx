import Link from "next/link";
import Image from "next/image";
import FellowshipImage from "@/public/resources/fellowship.webp";
import NetworkDinner from "@/public/resources/networkDinner.webp";
import GroupPhoto from "@/public/resources/groupPhoto.webp";

const Resources = () => {
  return (
    <div className="bg-witl-purple-300 min-h-screen flex items-start justify-center">
      <div className="w-10/12 bg-white flex flex-col items-center justify-center">
        <div className="md:h-[200px] h-[40px] relative w-[80%]">
          <div className="bg-witl-purple-200 absolute md:top-[50%] top-[55%] h-[20%] left-[10%] w-[110%]"></div>
        </div>
        <p className="md:text-7xl text-3xl font-serif text-witl-black md:my-5 my-4">
          LEGAL REWARDS
        </p>
        <div className="bg-witl-purple-300 text-white font-marcellus rounded-xl md:w-1/4 w-1/2 text-center text-2xl py-4 mb-4">
          UPDATES
        </div>
        <div className="text-lg md:text-2xl text-witl-black font-marcellus flex flex-col justify-center items-center md:mt-[0%]">
          <Link
            href="https://www.instagram.com/p/C1vm4lJL716/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D"
            target="_blank"
            className="text-witl-black"
          >
            What can I do with LeGAL Rewards?
          </Link>
        </div>
        <div className="grid md:grid-cols-3 border 2 border-white my-4 gap-4">
          <Image
            src={FellowshipImage}
            alt="fellowship"
            className="object-cover pl-2 md:pl-4 pr-2 md:pr-0"
          />
          <Image
            src={NetworkDinner}
            alt="network dinner"
            className="object-cover pl-2 pr-[0.4rem]"
          />
          <Image
            src={GroupPhoto}
            alt="group photo"
            className="object-cover pl-2 md:pl-0 pr-2 md:pr-4"
          />
        </div>
      </div>
    </div>
  );
};
export default Resources;
