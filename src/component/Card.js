import React from 'react';

const Card = ({weather, converter}) => {
    
    return (
        <div id = "card"
        className = "pa2 ma4 br3 dib bg-light-blue bw2 shadow-2 mw8 center ph3-ns" >
                <div className = "main tc para-text fl w-90 w-third-ns pa2" >
                    < img className="Ccardimg" src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather_icon" />
                    <h2 className="sub-text f2 1h-copy tc">{weather.weather[0].main}<br />
                        <span>{weather.weather[0].description}</span>
                </h2>
                <div>
                    <h1 className="f4 lh-copy"> Temperature: {weather.temp.morn} °C at Morning</h1>
                    <h1 className="f4 lh-copy"> Temperature: {weather.temp.day} °C at Day</h1>
                    <h1 className="f4 lh-copy"> Temperature: {weather.temp.eve} °C at Evening</h1>
                    <h1 className="f4 lh-copy"> Temperature: {weather.temp.night} °C at Night</h1>
                    <h1 className="f4 lh-copy"> Min Temperature: {weather.temp.min} °C</h1>
                    <h1 className="f4 lh-copy"> Max Temperature: {weather.temp.max} °C</h1>
                </div>
                </div>
                <div className = "para-text tc fl w-90 w-third-ns pa2" >
                <div>
                    <div>Feels Like : {weather.feels_like.morn} °C at Morning</div>
                    <div>{weather.feels_like.day} °C at Day</div>
                    <div>{weather.feels_like.eve} °C at Evening</div>
                    <div>{weather.feels_like.night} °C at Night</div>
                </div>
                    <div className="col2 row1">
                        <div>Cloudiness: {weather.clouds} %</div>
                        <div>UV Index: {weather.uvi}</div>
                        <div>Dew Point: {weather.dew_point} °C</div>
                    </div>
                    <div className="col2 row2">
                        <div>Pressure: {weather.pressure} mb</div>
                        <div>Humidity: {weather.humidity}%</div>
                        <div>Rain: {weather.rain} mm</div>
                        <div>Precipitation: {weather.pop}</div>
                    </div>
                </div>
                <div className = "para-text fl w-90 w-third-ns pa2" >
                    <div className="col3 row1">
                        <div>Wind Speed: {weather.wind_speed} m/s</div>
                        <div>Wind Angle: {weather.wind_deg} deg</div>
                        <div>Wind Gust: {weather.wind_gust} m/s</div>
                    </div>
                
                    <div className="col3 row2">
                        <div>Sunrise: {converter(weather.sunrise)}</div>
                        <div>Sunset: {converter(weather.sunset)}</div>
                        <div>Moon Phase: {weather.moon_phase}</div>
                        <div>Moonrise: {converter(weather.moonrise)}</div>
                        <div>Moonset: {converter(weather.moonset)}</div>
                        <h4>Last Update at: {converter(weather.dt)}</h4>
                    </div>
                </div>
            </div>
    );
}

export default Card;