import React from 'react';
import TicketRoute from './TicketRoute';
import TicketHeader from './TicketHeader';

import './Ticket.css';

const Ticket = () => {
  return (
    <div className="ticket container">
      <TicketHeader />
      <TicketRoute />
      <TicketRoute />
    </div>
  );
};
export default Ticket;
