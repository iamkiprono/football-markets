import React, { useEffect, useState } from "react";
import "../Components/Tickets.css";
import Ticket from "./Ticket";

const Tickets = ({ title }) => {
  const [todayDate, setTodayDate] = useState("");
  const updateTime = () => {
    const today = new Date().toDateString();
    setTodayDate(today);
  };
  setInterval(() => {
    updateTime();
  }, 1000);
  return (
    <div id="tickets" className="Tickets">
      <h2>Tickets</h2>
      <div className="tickets-wrapper">
        <Ticket
          className={"golden"}
          title={"GOLDEN TICKET"}
          price={"100"}
          date={todayDate}
          odds={"259"}
          games={"3"}
        />
        <Ticket
          title={"VIP"}
          price={"300"}
          date={todayDate}
          odds={"65.20"}
          games={"4"}
        />
        <Ticket
          title={"PREMIUM"}
          price={"200"}
          date={todayDate}
          odds={"32.01"}
          games={"4"}
        />
        <Ticket
          title={"BASIC"}
          price={"100"}
          date={todayDate}
          odds={"13.52"}
          games={"3"}
        />
      </div>
    </div>
  );
};

export default Tickets;
