import React, { Component } from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Routes />
        </div>
      </Router>
    );
  }
}

export default App;
