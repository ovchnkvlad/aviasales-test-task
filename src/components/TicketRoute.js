import React from 'react';
import './TicketRoute.css';

const TicketRoute = (props) => {
  const { route } = props;
  console.log(route);
  return route.map((el) => {
    return (
      <div className="row ticket__route">
        <div className="col-md-4 ticker__row-route">
          <span className="ticker__row--tittle">
            {el.origin} – {el.destination}
          </span>
          <span className="ticker__row--value">10:45 – 08:00</span>
        </div>
        <div className="col-md-4 ticker__row-length">
          <span className="ticker__row--tittle">В пути</span>
          <span className="ticker__row--value">{el.duration}</span>
        </div>
        <div className="col-md-4 ticker__row-steps">
          <span className="ticker__row--tittle">{el.stops.length} пересадки</span>
          <span className="ticker__row--value">{el.stops.join(',')}</span>
        </div>
      </div>
    );
  });
};
export default TicketRoute;
