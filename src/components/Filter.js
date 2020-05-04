import React from 'react';
import './Filter.css';

const Filter = () => {
  return (
    <div className="filter">
      <div className="title">Количество пересадок</div>
      <form>
        <label className="checkbox">
          Все
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
        <label className="checkbox">
          Без пересадок
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
        <label className="checkbox">
          1 пересадка
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
        <label className="checkbox">
          2 пересадки
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
        <label className="checkbox">
          3 пересадки
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
      </form>
    </div>
  );
};

export default Filter;
