import AboutUsGroups from "./AboutUsGroups";

const About = () => {
  return (
    <div className="bg-witl-purple-300 min-h-screen flex flex-col rounded-b-[48px] items-center justify-center mt-[5%]">
      <div className="flex flex-col tracking-widest">
        <div className="mb-1 text-9xl text-center text-witl-purple-100">
          <p>ABOUT</p>
        </div>
        <div className="mb-1 text-9xl text-center text-witl-purple-100 z-10">
          <p>US</p>
        </div>
      </div>
      <AboutUsGroups />
    </div>
  );
};
export default About;
