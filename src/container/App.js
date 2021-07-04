import React, { Component } from 'react';
import '../container/App.css';
import CurrentCard from '../component/CurrentCard';
import PastCardList from '../component/PastCardList';
import Scroll from '../component/Scroll';
import ErrorBoundary from '../component/ErrorBoundary';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CWeatherIcon: [],
      CWeatherMain: [],
      CWeatherDescription: [],
      CWeatherTemp: [],
      CWeatherVisibility: [],
      CWeatherFeel: [],
      CWeatherPressure: [],
      CWeatherHumidity: [],
      CWeatherClouds: [],
      CWeatherUVI: [],
      CWeatherDew: [],
      CWeatherRain: [],
      CWeatherWind: [],
      CWeatherWindDeg: [],
      CWeatherWindGust: [],
      CLocation: [],
      LastUpdate: [],
      CTimezone: [],
      CDaySunrise: [],
      CDaySunset: [],
      Next7Days : {},
    };
  }

  loadValue = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=adc1c7a24d6351f21a17bec409439ddf&units=metric`)
          .then(response => {
            return response.json();
          })
          .then(weather => {
            this.setState({
              CWeatherIcon: weather.current.weather[0].icon,
              CWeatherMain: weather.current.weather[0].main,
              CWeatherDescription: weather.current.weather[0].description,
              CWeatherTemp: weather.current.temp,
              CWeatherVisibility: weather.current.visibility / 1000,
              CWeatherFeel: weather.current.feels_like,
              CWeatherPressure: weather.current.pressure,
              CWeatherHumidity: weather.current.humidity,
              CWeatherClouds: weather.current.clouds,
              CWeatherUVI: weather.current.uvi,
              CWeatherDew: weather.current.dew_point,
              CWeatherWind: weather.current.wind_speed,
              CWeatherWindDeg: weather.current.wind_deg,
              CWeatherWindGust: weather.current.wind_gust,
              LastUpdate: weather.current.dt,
              CTimezone: weather.timezone_offset / 3600,
              CLocation: weather.timezone,
              CDaySunrise: weather.current.sunrise,
              CDaySunset: weather.current.sunset,
              Next7Days: weather.daily,
            });
            if (weather.current.rain === undefined) {
              this.setState({
                CWeatherRain: "0.00",
              });
            } else {
              this.setState({
                CWeatherRain: Object.values(weather.current.rain)[0],
              });
            }
          });
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };
  componentDidMount() {
    this.loadValue();
  };
  Convert = (time) => {
    let date = new Date(time * 1000);
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let seconds = "0" + date.getSeconds();
    var ampm = hours >= 12 ? ' pm' : ' am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let formattedTime = hours + ' : ' + minutes.substr(-2) + ' : ' + seconds.substr(-2) + ampm + " at " + days[date.getDay()] + ", " + months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
    return formattedTime;
  };

  render() {
    return !this.state.CWeatherDescription.length ?
      <h1 className="pa3 ma3 tc f-headline lh-solid ttu tracked-mega mt0 flex items-center" > loading... </h1> :
        (<div>
        <h1 className = "pa3 ma3 tc f1 lh-solid bw2 shadow-3 title ttu tracked-mega mt0 " > WEATHERIFY </h1>
        <ErrorBoundary>
          <Scroll>
          <h2 className = "tc pa1 ma2 f1 lh-solid ttu tracked mt0" > AT THIS MOMENT </h2>
          <CurrentCard weather={this.state} func={this.loadValue} converter={this.Convert}> </CurrentCard>
          <h2 className = "tc pa3 ma2 f1 lh-solid ttu tracked mt0" > COMING UP NEXT </h2>
          <PastCardList weather={this.state.Next7Days} converter={this.Convert}></PastCardList>
        </Scroll>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
