"use client";
import React, { useEffect, useState } from "react";
import EventsHeader from "@/components/events/EventsHeader.jsx";
import CalendarEvents from "@/components/events/CalendarEvents.jsx";
import EventDescriptions from "@/components/events/EventDescriptons.jsx";
import CalendarTitle from "@/components/events/CalendarTitle";
const Page = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    /* const startDate = new Date(
      new Date().getTime() - 60 * 60 * 24 * 7 * 10 * 1000
    ).toISOString();
    const endDate = new Date(
      new Date().getTime() + 60 * 60 * 24 * 7 * 10 * 1000
    ).toISOString(); */
    const fetchData = async () => {
      try {
        /* const response = await fetch(
          `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}
          &singleEvents=true&orderBy=startTime&timeMin=${startDate}&timeMax=${endDate}`
        );

        const offset = new Date().getTimezoneOffset() * 60000;
        const data = await response.json();
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
        setEvents(items); */
        const mockEvents = [
          {
            title: "Test Event 1",
            start: new Date(2024, 7, 13, 14, 0), // Aug 13, 2024, 14:00
            end: new Date(2024, 7, 13, 15, 0), // Aug 13, 2024, 15:00
            location: "WCH",
            allDay: true,
            summary: "pain",
          },
          {
            title: "Test Event 2",
            start: new Date(2024, 7, 14, 10, 0), // Aug 14, 2024, 10:00
            end: new Date(2024, 7, 14, 11, 0), // Aug 14, 2024, 11:00
            location: "WCH",
            allDay: false,
            summary: "pain",
            source: "cnn.com",
          },
          {
            title: "Test Event 3",
            start: new Date(2024, 8, 14, 10, 0), // Sept 14, 2024, 10:00
            end: new Date(2024, 8, 14, 11, 0), // Sept 14, 2024, 11:00
            location: "WCH",
            allDay: false,
            summary: "pain",
            source: "cnn.com",
          },
          {
            title: "Test Event 4",
            start: new Date(2024, 8, 14, 10, 0), // Sept 14, 2024, 10:00
            end: new Date(2024, 8, 14, 11, 0), // Sept 14, 2024, 11:00
            location: "WCH",
            allDay: false,
            summary: "pain",
            source: "cnn.com",
          },
          {
            title: "Test Event 5",
            start: new Date(2024, 8, 14, 10, 0), // Sept 14, 2024, 10:00
            end: new Date(2024, 8, 14, 11, 0), // Sept 14, 2024, 11:00
            location: "WCH",
            allDay: false,
            summary: "pain",
            source: "cnn.com",
          },
        ];

        setEvents(mockEvents);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <EventsHeader />
      <EventDescriptions events={events} />
      <CalendarTitle />
      <CalendarEvents events={events} />
    </div>
  );
};
export default Page;
