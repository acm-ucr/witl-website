import Header from "@/components/home/Header.jsx";
import Blurb from "@/components/home/Blurb.jsx";
import Sponsors from "@/components/home/Sponsors";
import Slides from "@/components/home/Slides";

const Home = () => {
  return (
    <div>
      <Header />
      <Sponsors />
      <Blurb />
      <Slides />
    </div>
  );
};
export default Home;
