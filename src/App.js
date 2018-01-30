import React, { Component } from 'react';
import './App.css';
import SalonList from './components/SalonList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SalonList/>
      </div>
    );
  }
}

export default App;
