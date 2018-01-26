import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SalonsList from './components/SalonsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SalonsList/>
      </div>
    );
  }
}

export default App;
