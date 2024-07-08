import Image from "next/image";
import teamphoto1 from "@/public/home/teamphoto1.webp";
import teamphoto2 from "@/public/home/teamphoto2.webp";
import teamphoto3 from "@/public/home/teamphoto3.webp";

const Blurb = () => {
  return (
    <div className="bg-witl-purple-300 min-h-screen flex justify-center items-center">
      <div className="bg-witl-white-100 rounded-3xl">
        <div className="grid grid-flow-col grid-cols-3 grid-rows-2 content-stretch">
          <div className="col-span-1">
            <Image src={teamphoto1} alt="teamphoto1" className="scale-[90%]" />
          </div>
          <div>
            <Image src={teamphoto2} alt="teamphoto2" className="scale-[80%]" />
          </div>
          <div className="col-span-3">hello world</div>
          <div className="col-span-3">
            <Image src={teamphoto3} alt="teamphoto3" className="scale-[80%] " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blurb;
