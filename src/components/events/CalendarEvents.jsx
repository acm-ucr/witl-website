"use client";
import React, { useState } from "react";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import CustomToolbar from "./CustomToolbar";
import CustomEvent from "./CustomEvent";
import Modal from "./Modal";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./index.css";

const localizer = momentLocalizer(moment);

const CalendarEvents = ({ events }) => {
  const [date, setDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div>
      <div className="h-[60vh] md:h-[125vh] flex justify-center">
        <div className="w-[90%] md:w-[75%] h-[55vh] md:h-[100vh] font-marcellus-sc mb-[10vh]">
          <Calendar
            className="text-[4vw] md:text-[2vw]"
            date={date}
            onNavigate={(newDate) => {
              setDate(newDate);
            }}
            events={events}
            localizer={localizer}
            defaultView="month"
            views={["month"]}
            components={{
              toolbar: CustomToolbar,
              event: CustomEvent,
            }}
            onSelectEvent={(event) => setSelectedEvent(event)}
            eventPropGetter={() => {
              return {
                className: " !bg-witl-purple-200",
              };
            }}
            dayPropGetter={(event) => {
              return {
                className: `${
                  new Date(event).toLocaleDateString() ===
                  new Date().toLocaleDateString()
                    ? "!bg-witl-purple-300"
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
        {selectedEvent && (
          <Modal event={selectedEvent} setEvent={setSelectedEvent} />
        )}
      </div>
    </div>
  );
};
export default CalendarEvents;
