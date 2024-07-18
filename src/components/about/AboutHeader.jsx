import AboutUsGroups from "./AboutUsGroups";

const AboutHeader = () => {
  return (
    <div className="bg-witl-purple-300 min-h-screen flex flex-col rounded-b-[48px] items-center justify-center mt-[5%]">
      <div className="relative tracking-widest">
        <div className="mb-1 text-9xl text-center text-witl-purple-100">
          <p>ABOUT</p>
        </div>
        <div className="mb-1 text-9xl text-center text-witl-purple-100 z-0">
          <p>US</p>
        </div>
        <div className="absolute z-50 top-[23%] left-[45.6%]">
          <p className="text-witl-purple-100 text-xs">WITL</p>
        </div>
      </div>
      <div>
        <AboutUsGroups />
      </div>
    </div>
  );
};
export default AboutHeader;
