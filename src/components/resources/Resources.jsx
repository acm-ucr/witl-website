import Link from "next/link";
import Image from "next/image";
import FellowshipImage from "@/public/resources/fellowship.webp";
import NetworkDinner from "@/public/resources/networkDinner.webp";
import GroupPhoto from "@/public/resources/groupPhoto.webp";

const Resources = () => {
  return (
    <div className="bg-witl-purple-300 min-h-screen flex items-center justify-center">
      <div className="w-10/12 bg-white rounded flex flex-col items-center justify-center">
        <div className="h-[200px] relative w-[80%]">
          <div className="bg-witl-purple-200 absolute top-[50%] h-[20%] left-[10%] w-[110%]"></div>
        </div>
        <p className="text-7xl font-serif text-witl-black my-5">
          LEGAL REWARDS
        </p>
        <div className="bg-witl-purple-300 text-white font-marcellus rounded-lg w-1/4 text-center text-4xl py-4 mb-4">
          UPDATES
        </div>
        <div className="text-lg md:text-2xl text-witl-black font-marcellus flex flex-col justify-center items-center mt-[25%] md:mt-[0%]">
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
