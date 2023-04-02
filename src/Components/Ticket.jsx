import React from "react";
import "../Components/Ticket.css";

const Ticket = ({ title, date, price, odds, games }) => {
  return (
    <div>
      <div className="ticket-wrapper">
        <h2>{title}</h2>
        <p>
          <i>Price: {price}/=</i>
        </p>
        <p>Date: {date}</p>
        <h2>odds: {odds}</h2>
        <h4>No of games: {games}</h4>
        <h4>TILL NO: XXXXXX</h4>
        <a target="_blank" href="https://wa.me/+254700000000">
          Buy now
        </a>
      </div>
    </div>
  );
};

export default Ticket;
