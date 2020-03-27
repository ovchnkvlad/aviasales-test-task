import React from 'react';
import './TicketHeader.css';

const TicketHeader = () => {
  return (
    <div className="row ticket__header">
      <div className="col-md-4 ticket__price">13 400 Р</div>
      <div className="offset-md-4 col-md-4 ticket__logo">
        <img src="./avia.svg" alt="avia logo" />
      </div>
    </div>
  );
};

export default TicketHeader;
