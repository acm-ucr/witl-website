import Pic from "@/public/about/grouppic2.webp";
import Image from "next/image";
const OurMission = () => {
  return (
    <div className="py-[7vh]">
      <div className="flex items-center justify-center pb-[2vh]">
        <p className="m-auto p-auto text-6xl md:text-7xl lg:text-[7vw]">
          Our Mission
        </p>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-witl-purple-300 rounded-2xl text-witl-purple-100 w-10/12 2xl:w-8/12">
          <div className="flex items-center pl-4 py-4 pr-6 md:pl-11 md:py-5 text-[2.5vw] md:text-[1.75vw] lg:text-[1.5vw] xl:text-[1.4vw] 2xl:text-[1.1vw] text-center">
            Womxn in the Law is UC Riverside’s undergraduate community
            passionate about law and the pursuit of justice. We aim to create a
            supportive community and network for diverse womxn pursuing legal
            careers. In creating a supportive community, establishing a robust
            network of legal professionals, judges, law school faculty, and
            accomplished attorneys, Womxn in the Law amplifies the needs of
            UCR’s most disadvantaged student population. <br />
            The X in womxn honors women’s intersecting identities, as women in
            America are impacted by a multitude of social justice and human
            rights issues. - Kimberlé Crenshaw
          </div>
          <div className="flex justify-center items-center p-8">
            <Image src={Pic} alt="grouppic2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
