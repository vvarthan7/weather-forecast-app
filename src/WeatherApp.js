import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import './WeatherApp.css';

class WeatherApp extends Component {

  constructor(props) {
		super(props)
		this.state = { data: [] }
  }

  componentWillMount(){
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
      <MuiThemeProvider>
        <h1>REACT Weather App</h1>
        <Table className="table">
          <TableHeader displaySelectAll={false} adjustForCheckbox={false} className="table-header">
            <TableRow>
              <TableHeaderColumn>Date</TableHeaderColumn>
              <TableHeaderColumn>Temperature</TableHeaderColumn>
              <TableHeaderColumn>Weather Type</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.state.data.map((item, i) => {
              return(
                <TableRow>
                  <TableRowColumn><h3 className="date">Date: {item.dt_txt}</h3></TableRowColumn>
                  <TableRowColumn><h3 className="temp">Temperature: {item.main.temp}</h3></TableRowColumn>
                  <TableRowColumn><h3 className="type">Weather Type: {item.weather[0].main}</h3></TableRowColumn>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </MuiThemeProvider>
    );
  }
}

WeatherApp.propTypes = {
  displaySelectAll: PropTypes.bool,
  adjustForCheckbox: PropTypes.bool,
  displayRowCheckbox: PropTypes.bool
};

export default WeatherApp;
