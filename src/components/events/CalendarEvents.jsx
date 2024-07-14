"use client";
import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CustomToolbar from "./CustomToolbar";
import CustomEvent from "./CustomEvent";
import "./index.css";
const localizer = momentLocalizer(moment);

const CalendarEvents = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  // const [selectedEvent, setSelectedEvent] = useState(null);

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
    <div className="flex justify-center">
      <div className="h-[95vh] w-[85%] font-marcellus-sc mb-[5%]">
        <Calendar
          className="text-3xl"
          localizer={localizer}
          date={date}
          onNavigate={(newDate) => {
            setDate(newDate);
          }}
          events={events}
          defaultView="month"
          views={["month"]}
          // onSelectEvent={(event) => setSelectedEvent(event)}
          components={{
            toolbar: CustomToolbar,
            event: CustomEvent,
          }}
          eventPropGetter={() => {
            return {
              className: "!p-0 !bg-transparent",
            };
          }}
          dayPropGetter={(event) => {
            return {
              className: `${
                new Date(event).toLocaleDateString() ===
                new Date().toLocaleDateString()
                  ? "!bg-witl-purple-200"
                  : "!bg-transparent"
              }`,
              style: {
                margin: 0,
                padding: 0,
              },
            };
          }}
        />
      </div>
    </div>
  );
};
export default CalendarEvents;
