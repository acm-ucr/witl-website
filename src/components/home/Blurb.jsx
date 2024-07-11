import Image from "next/image";
import teamphoto1 from "@/public/home/teamphoto1.webp";
import teamphoto2 from "@/public/home/teamphoto2.webp";
import teamphoto3 from "@/public/home/teamphoto3.webp";

const Blurb = () => {
  return (
    <div className="bg-witl-purple-300 min-h-screen flex justify-center items-center">
      <div className="bg-witl-white-100 rounded-[6rem] scale-50">
        <div className="grid grid-flow-row-dense grid-cols-6 ">
          <div className="col-span-6 md:col-span-3 place-items-stretch justify-start m-10 mt-28">
            {" "}
            <Image
              src={teamphoto1}
              alt="teamphoto1"
              className="w-full h-full object-cover rounded-3xl"
            />{" "}
          </div>
          <div className="col-span-6 md:col-span-3 place-items-stretch justify-start">
            <div className="flex flex-col tracking-widest">
              <div className="flex flex-col tracking-wide font-marcellus-sc text-8xl mt-28 ml-6 leading-none">
                Womxn in
                <br />
                the Law
              </div>
              <p className="text-right text-3xl mr-32 mt-8 leading-tight tracking-tight">
                stands
                <br />
                as an organization catered to the <br />
                diverse spectrum of womxn who are
                <br />
                embarking on journeys in law
                <br />
                school or within the legal field.
              </p>
            </div>
          </div>
          <div className="col-span-6 md:col-span-2 place-items-stretch justify-start m-10 mb-20">
            {" "}
            <Image
              src={teamphoto2}
              alt="teamphoto2"
              className="w-full h-full object-cover rounded-3xl"
            />{" "}
          </div>
          <div className="col-span-6 md:col-span-4 place-items-stretch justify-start m-10 mb-20">
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
