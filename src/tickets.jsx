import React from "react";
import OneTicket from "./oneTicket";
import NavBar from "./navBar";
import "./tickets.css";

const Tickets = ({ tickets }) => {
  return (
    <div className="all-tickets">
      <NavBar />
      <OneTicket ticket={tickets[0]} />
      <OneTicket ticket={tickets[1]} />
      <OneTicket ticket={tickets[2]} />
      <OneTicket ticket={tickets[3]} />
    </div>
  );
};

export default Tickets;
