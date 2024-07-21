"use client";
import React, { useEffect, useState } from "react";
import EventsHeader from "@/components/events/EventsHeader.jsx";
import CalendarTitle from "@/components/events/CalendarTitle.jsx";
import CalendarEvents from "@/components/events/CalendarEvents.jsx";
// import EventDescriptions from "@/components/events/EventDescriptons.jsx";

const Page = () => {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/calendar/v3/calendars/${
            process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL
          }/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}
          &singleEvents=true&orderBy=startTime&timeMin=${new Date(
            new Date().getTime() - 60 * 60 * 24 * 7 * 10 * 1000
          ).toISOString()}&timeMax=${new Date(
            new Date().getTime() + 60 * 60 * 24 * 7 * 10 * 1000
          ).toISOString()}`
        );

        const offset = new Date().getTimezoneOffset() * 6000;
        const data = await response.json();
        console.log(data);
        const items = data.items.map((item) => {
          item.allDay = !item.start.dateTime;
          (item.start = itemstart.dateTime
            ? new Date(item.start.dateTime)
            : newDate(new Date(item.start.date).getTime() + offset)),
            (item.end = new Date(
              item.end.dateTime || new Date(item.end.date).getTime() + offset
            )),
            (item.hidden = false);

          return item;
        });
        setEvents(items);
      } catch (error) {
        console.error("error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="h-screen">
      <EventsHeader />
      <CalendarTitle />
      <CalendarEvents events={events} />
      {/* <EventDescriptions events={events} /> */}
    </div>
  );
};
export default Page;
