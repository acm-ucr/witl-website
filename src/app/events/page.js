"use client";
import React, { useEffect, useState } from "react";
import EventsHeader from "@/components/events/EventsHeader.jsx";
import CalendarEvents from "@/components/events/CalendarEvents.jsx";
import EventDescriptions from "@/components/events/EventDescriptons.jsx";

const Page = () => {
  const [events, setEvents] = useState([]);

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

        const offset = new Date().getTimezoneOffset() * 60000;
        const data = await response.json();
        console.log(data);
        const items = data.items.map((item) => {
          item.allDay = !item.start.dateTime;
          (item.start = item.start.dateTime
            ? new Date(item.start.dateTime)
            : new Date(new Date(item.start.date).getTime() + offset)),
            (item.end = new Date(
              item.end.dateTime || new Date(item.end.date).getTime() + offset
            )),
            (item.hidden = false);

          return item;
        });
        setEvents(items);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="h-screen">
      <EventsHeader />
      <EventDescriptions events={events} />
      <CalendarEvents events={events} />
    </div>
  );
};
export default Page;
