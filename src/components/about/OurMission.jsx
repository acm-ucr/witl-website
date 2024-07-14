import Pic from "@/public/about/grouppic2.webp";
import Image from "next/image";
const OurMission = () => {
  return (
    <div>
      <div className="flex items-center justify-center pt-12 pb-2">
        <p className="m-auto p-auto text-7xl">Our Mission</p>
      </div>
      <div className="grid grid-cols-2 bg-witl-purple-300 rounded-2xl text-witl-purple-100 w-fit ml-24 mr-24">
        <div className="pl-11 pt-5 pb-5 text-2xl">
          <p>
            Womxn in the Law is UC Riverside’s undergraduate community
            passionate about law and the pursuit of justice. We aim to create a
            supportive community and network for diverse womxn pursuing legal
            careers. In creating a supportive community, establishing a robust
            network of legal professionals, judges, law school faculty, and
            accomplished attorneys, Womxn in the Law amplifies the needs of
            UCR’s most disadvantaged student population.
          </p>
          <p>
            The X in womxn honors women’s intersecting identities, as women in
            America are impacted by a multitude of social justice and human
            rights issues. - Kimberlé Crenshaw
          </p>
        </div>
        <div className="flex justify-end py-5 pr-7">
          <Image src={Pic} alt="grouppic2" />
        </div>
      </div>
    </div>
  );
};

export default OurMission;
