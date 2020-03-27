import React from 'react';
import Logo from './components/Logo';
import Filter from './components/Filter';
import FilterRow from './components/FilterRow';
import Ticket from './components/Ticket';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="row logo_wrapper">
        <Logo />
      </div>
      <div className="row">
        <div className="col-md-3 offset-md-1">
          <Filter />
        </div>
        <div className="col-md-7">
          <FilterRow />
          <Ticket />
          <Ticket />
          <Ticket />
        </div>
      </div>
    </div>
  );
}

export default App;
