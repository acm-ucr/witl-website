const JoinBox = ({ num, smallDesc1, desc1, smallDesc2, desc2 }) => {
  return (
    <div className="flex justify-end items-center bg-witl-purple-200 rounded-xl w-[15%] min-w-[200px] min-h-[5.5%] aspect-[27/10]">
      <p className="container pl-[5%] text-[5vw] font-libre-caslon-text text-witl-purple-400">
        {num}.
      </p>
      <div className="grid grid-rows gap-y-0 w-[150%] text-[1.2vw] text-right px-[2%] leading-[110%] font-marcellus-sc">
        <p className="text-[0.7vw] leading-[110%]">{smallDesc1}</p>
        <p className="text-[1.2vw] leading-[110%]">{desc1}</p>
        <p className="text-[0.7vw] leading-[110%]">{smallDesc2}</p>
        <p className="text-[1.2vw] leading-[110%]">{desc2}</p>
      </div>
    </div>
  );
};

export default JoinBox;
