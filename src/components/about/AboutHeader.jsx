import AboutUsGroups from "./AboutUsGroups";

const AboutHeader = () => {
  return (
    <div className="bg-witl-purple-300 max-w-screen aspect-[3/4] lg:aspect-[5/4] flex flex-col rounded-b-[48px] items-center justify-center mt-[5%] overflow-clip">
      <div className="relative flex flex-col tracking-widest mt-[5%]">
        <div className="mb-1 text-9xl text-center text-witl-purple-100">
          <p>ABOUT</p>
        </div>
        <div className="mb-1 text-9xl text-center text-witl-purple-100 z-10">
          <p>US</p>
        </div>
        <div className="absolute top-[23%] left-[45.6%]">
          <p className="text-witl-purple-100 text-xs">WITL</p>
        </div>
      </div>
      <AboutUsGroups />
    </div>
  );
};
export default AboutHeader;
