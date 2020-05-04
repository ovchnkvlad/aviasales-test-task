import React from 'react';
import TicketRoute from './TicketRoute';

import './Ticket.css';

const Ticket = (props) => {
  const tickets = props.ticket.slice(0, 5);
  return tickets.map((el) => {
    return (
      <div className="ticket container">
        <div className="row ticket__header">
          <div className="col-md-4 ticket__price">{el.price} P</div>
          <div className="offset-md-4 col-md-4 ticket__logo">
            <img src={`//pics.avs.io/99/36/${el.carrier}.png`} alt="avia logo" />
          </div>
          <p>{}</p>
        </div>
        <TicketRoute route={el.segments} />
      </div>
    );
  });
};
export default Ticket;
