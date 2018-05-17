import React, { Component } from 'react';
import logo from './logo.svg';
import './WeatherApp.css';

class WeatherApp extends Component {

  constructor(props) {
		super(props)
		this.state = { data: [] }
  }

  componentDidMount(){
    var city1 = 'bangalore';
    var url= 'http://api.openweathermap.org/data/2.5/forecast?appid=5568f2e23ed41863720d4663e025f91e&q='+city1+'&count=10';
    console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({data: data.list })
        console.log("data", data);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Weather App</h1>
        </header>
        <h1>REACT WEATHER APP</h1>
        {this.state.data.map((item, i) => {
          return(
            <div className="weather-container">
            <h3 className="date">Date: <span>{item.dt_txt}</span></h3>
            <h3 className="temp">Temperature: <span>{item.main.temp}</span></h3>
            <h3 className="type">Weather Type: <span>{item.weather[0].main}</span></h3>
            </div>
          );
        })}
      </div>
    );
  }
}

export default WeatherApp;
