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
      <div className="h-[50vh] md:h-screen flex justify-center">
        <div className="w-[90%] md:w-[85%] font-marcellus-sc mb-[5%]">
          <Calendar
            className="text-3xl"
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
        {selectedEvent && (
          <Modal
            setEvents={setSelectedEvent}
            title={setSelectedEvent.summary}
            description={selectedEvent.description}
            location={selectedEvent.location}
            startTime={selectedEvent.start}
            endTime={selectedEvent.end}
          />
        )}
        {console.log(selectedEvent)}
      </div>
    </div>
  );
};
export default CalendarEvents;
