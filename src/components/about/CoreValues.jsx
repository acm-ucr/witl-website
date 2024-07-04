import Growth from "@/public/about/corevalues/grow.svg";
import Innovation from "@/public/about/corevalues/innovation.svg";
import Integrity from "@/public/about/corevalues/integrity.svg";
import Knowledge from "@/public/about/corevalues/knowledge.svg";
import Passion from "@/public/about/corevalues/passion.svg";
import Professionalism from "@/public/about/corevalues/professionalism.svg";
import Service from "@/public/about/corevalues/service.svg";
import Image from "next/image";

const CoreValues = () => {
  return (
    <div>
      <div>
        <Image
          src={Innovation}
          className="absolute bottom-[30%] left-[8%] w-1/4 h-auto"
        />
        <Image
          src={Integrity}
          className="absolute bottom-[13%] left-[25%] w-1/4 h-auto"
        />
        <Image
          src={Passion}
          className="absolute bottom-[48%] left-[57%] w-1/4 h-auto"
        />
        <Image
          src={Professionalism}
          className="absolute bottom-[30%] left-[41%] w-1/4 h-auto"
        />
        <Image
          src={Service}
          className="absolute bottom-[13%] left-[57%] w-1/4 h-auto"
        />
        <Image
          src={Growth}
          className="absolute bottom-[-5%] left-[41%] w-1/4 h-auto"
        />
        <Image
          src={Knowledge}
          className="absolute bottom-[-4%] left-[73%] w-1/4 h-auto"
        />
      </div>
      <div className="absolute bottom-[10%]">
        <p className="text-8xl pb-12 pl-20 md:scale-150 font-marcellus-sc">
          CORE
        </p>
        <p className="text-8xl pl-20 md:scale-150 font-marcellus-sc">VALUES</p>
      </div>
    </div>
  );
};

export default CoreValues;
