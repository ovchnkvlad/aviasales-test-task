import React from 'react';
import './TicketRoute.css';

const TicketRoute = () => {
  return (
    <div className="row ticket__route">
      <div className="col-md-4 ticker__row-route">
        <span className="ticker__row--tittle">MOW – HKT</span>
        <span className="ticker__row--value">10:45 – 08:00</span>
      </div>
      <div className="col-md-4 ticker__row-length">
        <span className="ticker__row--tittle">В пути</span>
        <span className="ticker__row--value">21ч 15м</span>
      </div>
      <div className="col-md-4 ticker__row-steps">
        <span className="ticker__row--tittle">2 пересадки</span>
        <span className="ticker__row--value">HKG, JNB</span>
      </div>
    </div>
  );
};
export default TicketRoute;
