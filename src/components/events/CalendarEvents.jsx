"use client";
import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import CalendarTitle from "./CalendarTitle";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CustomToolbar from "./CustomToolbar";
import CustomEvent from "./CustomEvent";
import "./index.css";
const localizer = momentLocalizer(moment);

const CalendarEvents = ({ events }) => {
  const [date, setDate] = useState(new Date());
  // const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div>
      <CalendarTitle />
      <div className="h-screen flex justify-center">
        <div className="w-[85%] font-marcellus-sc mb-[5%]">
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
    </div>
    
  );
};
export default CalendarEvents;
