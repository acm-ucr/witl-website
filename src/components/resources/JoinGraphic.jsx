import JoinBox from "./JoinBox";

const JoinGraphic = () => {
  return (
    <div className="flex items-center justify-center bg-witl-purple-300 h-screen">
      <div className="w-10/12 h-screen bg-white rounded">
        <p className="font-libre-caslon-text text-[6vw]">HOW TO JOIN</p>
        <JoinBox
          num="1"
          desc1="JOIN OUR HIGHLANDER LINK"
          className="absolute "
        />
        <JoinBox num="2" desc1="FOLLOW OUR INSTAGRAM" />
        <JoinBox
          num="3"
          desc1="JOIN OUR SUBSTACK"
          smallDesc2="AND"
          desc2="DISCORD"
        />
        <JoinBox num="4" smallDesc1="*Optional*" desc1="FILE YOUR DUES" />
        <JoinBox num="5" desc1="ATTEND OUR EVENTS" />
      </div>
    </div>
  );
};

export default JoinGraphic;
