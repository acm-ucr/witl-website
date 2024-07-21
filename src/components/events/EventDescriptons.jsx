import EventDescription from "./EventDescription";

const EventDescriptions = ({ events }) => {
  return (
    <div className="mt-[5%]">
      <div className="ml-[4%] relative mb-[6%]">
        <div className="bg-witl-purple-600 w-[42%] h-[160px]"></div>
        <p className="absolute top-[45%] left-[25%] text-9xl">Month</p>
      </div>
      <div className="flex flex-col items-center">
        {events.length > 0 ? (
          events.map((event, index) => (
            <EventDescription key={index} event={event} />
          ))
        ) : (
          <p>No Upcoming Events</p>
        )}
      </div>
      <div className="bg-witl-purple-600 w-[42%] h-[160px] mt-[10%] ml-[55%]"></div>
    </div>
  );
};

export default EventDescriptions;
