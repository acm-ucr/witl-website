import EventDescription from "./EventDescription";

const EventDescriptions = ({ events }) => {
  const currentMonth = new Date().toLocaleString("default", { month: "long" });
  const filteredEvents = events.filter(
    (event) =>
      new Date(event.start).toLocaleString("default", { month: "long" }) ===
      currentMonth
  );
  return (
    <div className="mt-[5%]">
      <div className="ml-[4%] relative mb-[6%]">
        <div className="aspect-[3/1] md:aspect-[4/1] bg-witl-purple-600 w-[42%]"></div>
        <p className="absolute top-[45%] left-[25%] text-7xl lg:text-9xl">
          {currentMonth}
        </p>
      </div>
      <div className="flex flex-col items-center">
        {filteredEvents.length > 0 ? (
          filteredEvents
            .slice(0, 3)
            .map((event, index) => (
              <EventDescription key={index} event={event} />
            ))
        ) : (
          <p>No Upcoming Events</p>
        )}
      </div>
      <div className="aspect-[3/1] md:aspect-[4/1] bg-witl-purple-600 w-[42%] mt-[10%] ml-[55%]"></div>
    </div>
  );
};

export default EventDescriptions;
