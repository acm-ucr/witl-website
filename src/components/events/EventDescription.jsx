const EventDescription = ({ event }) => {
  return (
    <div className="flex relative justify-end max-w-[60%] min-w-[60%]">
      <div className="absolute left-0 top-[50%]">
        <p className="text-7xl">{event.summary}</p>
        <p className="text-5xl ml-16">{event.location}</p>
      </div>
      <div className="w-80">
        <div className="pl-4 py-2 flex items-center rounded-3xl bg-witl-purple-300">
          <div className="text-witl-white-200 text-7xl grid grid-cols-3">
            <p className="col-span-3">
              {event.start.getMonth() + 1 < 10
                ? "0" + event.start.getMonth()
                : event.start.getMonth()}
            </p>
            <div className="ml-[50%] border-t-[4px] h-[1px] min-w-full -rotate-[60deg] border-witl-white-200"></div>
            <p className="">{event.start.getDate()}</p>
          </div>
          <p className="-rotate-90 text-3xl text-witl-purple-500">MORE</p>
        </div>
        <div className="w-full border-t-[2px] w-[90%] mt-1 mb-4 border-black"></div>
      </div>
    </div>
  );
};

export default EventDescription;
