import React, { Component } from 'react';
import axios from 'axios';
import Logo from './components/Logo';
import Filter from './components/Filter';
import FilterRow from './components/FilterRow';
import Ticket from './components/Ticket';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ticketData: [],
      isLoading: true,
    };
  }

  getAllTickets = async () => {
    await axios.get(`https://front-test.beta.aviasales.ru/search`).then(async (id) => {
      this.setState({ isLoading: false });
      await axios
        .get(`https://front-test.beta.aviasales.ru/tickets?searchId=${id.data.searchId}`)
        .then((tickets) => {
          this.setState({ ticketData: tickets.data.tickets, isLoading: false });
        })
        .catch((e) => console.log(e));
    });
  };

  componentDidMount() {
    this.getAllTickets();
  }

  render() {
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
            <Ticket ticket={this.state.ticketData} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
