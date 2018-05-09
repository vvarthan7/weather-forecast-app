import React, { Component } from 'react';
import logo from './logo.svg';
import './WeatherApp.css';

class WeatherApp extends Component {

  componentDidMount(){
    var city1 = 'bangalore';
    var url= 'http://api.openweathermap.org/data/2.5/forecast?appid=5568f2e23ed41863720d4663e025f91e&q='+city1+'&count=10';
    console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(data => console.log(data));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/WeatherApp.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default WeatherApp;
