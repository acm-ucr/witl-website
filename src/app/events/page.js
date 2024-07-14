import EventsHeader from "@/components/events/EventsHeader";
import CalendarEvents from "@/components/events/CalendarEvents";

const Page = () => {
  return (
    <div className="h-screen">
      <EventsHeader />
      <CalendarEvents />
    </div>
  );
};
export default Page;
