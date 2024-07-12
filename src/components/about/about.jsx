import AboutUsGroups from "./AboutUsGroups";

const About = () => {
  return (
    <div className="bg-witl-purple-300 min-h-screen flex flex-col items-center justify-center">
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
