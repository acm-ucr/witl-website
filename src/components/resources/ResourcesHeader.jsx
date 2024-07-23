import TopResourcesBanner from "./TopResourcesBanner";
import BottomResourcesBanner from "./BottomResourcesBanner";

import { BsSubstack } from "react-icons/bs";
import { FaDiscord, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const ResourcesHeader = () => {
  return (
    <div className=" relative bg-witl-purple-300 h-screen flex flex-col items-center justify-center mt-[5%]">
      <div className="grid grid-cols-5 gap-14 p-4">
        <div>
          <TopResourcesBanner
            icon={<FaInstagram />}
            link={"https://www.instagram.com/ucrwitl/"}
          />
        </div>
        <div>
          <BottomResourcesBanner
            icon={<FaLinkedin />}
            link={"https://www.linkedin.com/company/ucr-womxn-in-the-law/"}
          />
        </div>
        <div>
          <TopResourcesBanner
            icon={<MdMail />}
            link={"mailto:ucrwitl@gmail.com"}
          />
        </div>
        <div>
          <BottomResourcesBanner
            icon={<FaDiscord />}
            link={"https://discord.gg/6W8t7a3G58"}
          />
        </div>
        <div>
          <TopResourcesBanner
            icon={<BsSubstack />}
            link={"https://ucrwitl.substack.com/"}
          />
        </div>
      </div>
      <div className="absolute text-10xl text-witl-white-100 bg-witl-purple-300  px-[10%] mb-[7%]  ">
        <p>RESOURCES</p>
      </div>
      <p className="flex justify-center text-[42px] text-witl-white-100  border-y-2 w-full mt-[3%]">
        CHECKOUT OUR RESOURCE SHEET
      </p>
    </div>
  );
};

export default ResourcesHeader;
