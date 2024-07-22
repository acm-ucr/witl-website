import TopResourcesBanner from "./TopResourcesBanner";
import BottomResourcesBanner from "./BottomResourcesBanner";

import { BsSubstack } from "react-icons/bs";
import { FaDiscord, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const ResourcesHeader = () => {
  return (
    <div className="relative grid grid-cols-5 bg-witl-purple-300 mt-[5%]">
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
      <p className="text-[139px] text-witl-white-100 bg-witl-purple-300 absolute px-[10%] mt-[8%] mx-[12%] ">
        RESOURCES
      </p>
      <p className="absolute text-[42px] bottom-0 text-witl-white-100 px-[25%] border-y-2">
        CHECKOUT OUR RESOURCE SHEET
      </p>
    </div>
  );
};

export default ResourcesHeader;
