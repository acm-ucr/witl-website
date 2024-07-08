import Image from "next/image";
import teamphoto1 from "@/public/home/teamphoto1.webp";
import teamphoto2 from "@/public/home/teamphoto2.webp";
import teamphoto3 from "@/public/home/teamphoto3.webp";

const Blurb = () => {
  return (
    <div className="bg-witl-purple-300 min-h-screen flex justify-center items-center">
      <div className="bg-witl-white-100 rounded-[10rem] scale-50">
        <div className="grid grid-flow-row-dense grid-cols-6 mt-40 mb-32 mx-20">
          <div className="col-span-6 md:col-span-3 place-items-stretch justify-start m-20 mr-32 ">
            {" "}
            <Image
              src={teamphoto1}
              alt="teamphoto1"
              className="w-full h-full object-cover rounded-3xl"
            />{" "}
          </div>
          <div className="col-span-6 md:col-span-3 place-items-stretch justify-start">
            <div className="flex flex-col tracking-widest">
              <div className="font-marcellus-sc text-10xl mt-20 leading-none">
                Womxn in
              </div>
              <div className="font-marcellus-sc text-10xl leading-none">
                the Law
              </div>
              <p className="text-right text-6xl mr-24 leading-tight">stands</p>
              <p className="text-right text-6xl mr-24 leading-tight">
                as an organization catered to the{" "}
              </p>
              <p className="text-right text-6xl mr-24 leading-tight">
                diverse spectrum of womxn who are
              </p>
              <p className="text-right text-6xl mr-24 leading-tight">
                embarking on journeys in law
              </p>
              <p className="text-right text-6xl mr-24 mb-40 leading-tight">
                school or within the legal field.
              </p>
            </div>
          </div>
          <div className="col-span-6 md:col-span-2 place-items-stretch justify-start m-20">
            {" "}
            <Image
              src={teamphoto2}
              alt="teamphoto2"
              className="w-full h-full object-cover rounded-3xl"
            />{" "}
          </div>
          <div className="col-span-6 md:col-span-4 place-items-stretch justify-start m-20">
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
