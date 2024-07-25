const Sponsors = () => {
  return (
    <div className="relative bg-witl-purple-300 mt-[50%] w-[100%]">
      <div className="text-witl-purple-200 pl-[10%] flex flex-col items-start leading-tight">
        <div className="lg:text-[8rem] mt-[10%] text-3xl md:text-6xl">OUR</div>
        <div className="lg:text-10xl text-5xl md:text-7xl">
          &nbsp;&nbsp;SPONSORS
        </div>
      </div>
      <div className="absolute top-[20%] right-[0%] bg-witl-purple-400 text-witl-white-100 font-libre-caslon-text font-bold text-[49.37px] w-[55%]">
        <div className="pl-[3%] text-sm lg:text-5xl md:text-2xl">
          BLUEPRINT TEST PREP
        </div>
      </div>
      <div className="flex flex-col bg-witl-purple-300 text-[49.37px] text-white font-bold">
        <div className="w-1/2 bg-witl-purple-400 mb-6 mt-4 font-libre-caslon-text text-right pr-5 text-sm lg:text-5xl md:text-2xl">
          BEST BEST KRIEGER
        </div>
        <div className="flex justify-end">
          <div className="w-1/3 bg-witl-purple-400 font-libre-caslon-text pl-[2%] text-left text-sm lg:text-5xl md:text-2xl">
            HQR INC.
          </div>
        </div>
        <div className="border-witl-purple-400 border-b-[21px] "></div>
      </div>
    </div>
  );
};

export default Sponsors;
