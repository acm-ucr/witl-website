import Image from "next/image";
import teamphoto1 from "@/public/home/teamphoto1.webp";
import teamphoto2 from "@/public/home/teamphoto2.webp";
import teamphoto3 from "@/public/home/teamphoto3.webp";

const Blurb = () => {
  return (
    <div className="bg-witl-purple-300 min-h-screen flex justify-center items-center">
      <div className="bg-witl-white-100 rounded-3xl">
        <div className="grid grid-flow-row-dense grid-cols-6">
          <div className="col-span-6 md:col-span-3 place-items-stretch justify-start m-2 ">
            {" "}
            <Image
              src={teamphoto1}
              alt="teamphoto1"
              className="w-full h-full object-cover rounded-3xl"
            />{" "}
          </div>
          <div className="col-span-6 md:col-span-3 place-items-stretch justify-start">
            <div className="flex flex-col tracking-widest">
              <div className="font-marcellus-sc text-9xl">Womxn in</div>
              <div className="font-marcellus-sc text-9xl">the Law</div>
            </div>
          </div>
          <div className="col-span-6 md:col-span-2 place-items-stretch justify-start m-2">
            {" "}
            <Image
              src={teamphoto2}
              alt="teamphoto2"
              className="w-full h-full object-cover rounded-3xl"
            />{" "}
          </div>
          <div className="col-span-6 md:col-span-4 place-items-stretch justify-start m-2">
            {" "}
            <Image
              src={teamphoto3}
              alt="teamphoto3"
              className="w-full h-full object-cover rounded-3xl"
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blurb;
