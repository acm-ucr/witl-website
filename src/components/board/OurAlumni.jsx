import Image from "next/image";
import One from "@/public/board/one.webp";
import Two from "@/public/board/two.webp";
import Three from "@/public/board/three.webp";
import Four from "@/public/board/four.webp";
import Five from "@/public/board/five.webp";
import Six from "@/public/board/six.webp";

const OurAlumni = () => {
  return (
    <div className="grid grid-rows-2 grid-cols-4 gap-4 mx-50 m-4">
      <div className="place-content-center m-auto">
        <Image src={One} alt="Alumni 1" />
      </div>
      <div className="place-content-center m-auto">
        <Image src={Two} alt="Alumni 2" />
      </div>
      <div className="place-content-center m-auto">
        <Image src={Three} alt="Alumni 3" />
      </div>
      <div className="place-content-center m-auto">
        <Image src={Four} alt="Alumni 4" />
      </div>
      <div className="place-content-center m-auto">
        <Image src={Five} alt="Alumni 5" />
      </div>
      <div className="place-content-center m-auto">
        <Image src={Six} alt="Alumni 6" />
      </div>
      <div className="col-span-2 bg-witl-purple-400 mx-0 place-content-center">
        <div className="text-right text-witl-white-100 text-[30px] md:text-[120px] pr-4">
          Our
          <br />
          Alumni
        </div>
      </div>
    </div>
  );
};
export default OurAlumni;
