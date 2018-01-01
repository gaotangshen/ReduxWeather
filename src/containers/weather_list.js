import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

  renderWeather(data) {
    const city = data.city.name;
    const temps = _.map(data.list.map(weather => weather.main.temp), temp => temp - 273.15);
    const pressures = data.list.map(weather => weather.main.pressure);
    const humidities = data.list.map(weather => weather.main.humidity);
    const { lat, lon } = data.city.coord;

    return (
      <tr key={city}>
        <td><GoogleMap lat={lat} lon={lon}/></td>
        <td><Chart data={temps} unit="&#8451;" color="orange"/></td>
        <td><Chart data={pressures} unit="hPa"  color="blue"/></td>
        <td><Chart data={humidities} unit="%"  color="red"/></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (&#8451;)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weathers.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weathers }) {
  return {  weathers };
}

export default connect(mapStateToProps)(WeatherList);