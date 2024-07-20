import AboutUsGroups from "./AboutUsGroups";

const About = () => {
  return (
    <div className="bg-witl-purple-300 min-h-screen flex flex-col rounded-b-[48px] items-center justify-center mt-[5%]">
      <div className="flex flex-col tracking-widest">
        <div className="mb-1 text-7xl md:text-9xl text-center text-witl-purple-100">
          <p>ABOUT</p>
        </div>
        <div className="mb-16 md:mb-1 text-7xl md:text-9xl text-center text-witl-purple-100 z-10">
          <p>US</p>
        </div>
        <div className="absolute z-50 top-[22%] left-[48%]">
          <p className="text-witl-purple-100 text-xs">WITL</p>
        </div>
      </div>
      <AboutUsGroups />
    </div>
  );
};
export default About;
