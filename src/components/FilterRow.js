import React from 'react';

import './FilterRow.css';

const FilterRow = () => {
  return (
    <div className="radio__btn-group container">
      <form className="row">
        <label className="radio__btn col-md-6">
          <input type="radio" name="radio" checked />
          <span className="radio__btn--title">Самый дешевый</span>
          <span className="checkmark" />
        </label>
        <label className="radio__btn col-md-6">
          <input type="radio" name="radio" />
          <span className="radio__btn--title">Самый быстрый</span>
          <span className="checkmark" />
        </label>
      </form>
    </div>
  );
};

export default FilterRow;
