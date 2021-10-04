import React from "react";
import "./CurrentCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';


const CurrentCard = ({weather, func, converter}) => {
    
        return (
			<div
				id='card'
				className='pa2 ma3 br3 dib bg-lightest-blue bw2 shadow-2 mw8 center ph3-ns'
			>
				<div className='main tc fl w-100 w-third-ns pa2'>
					<img
						className='Ccardimg'
						src={`http://openweathermap.org/img/wn/${weather.CWeatherIcon}@2x.png`}
						alt='weather_icon'
					/>
					<h2 className='sub-text tc'>
						{weather.CWeatherMain}
						<br />
						<span>{weather.CWeatherDescription}</span>
					</h2>
					<h1 className='main-txt tc'>
						<span className='big-text'>
							{weather.CWeatherTemp} °C
						</span>
						<br />
						Feels Like: {weather.CWeatherFeel} °C
					</h1>
					<h3>
						Last Update at: {converter(weather.LastUpdate) + ' '}{' '}
						<FontAwesomeIcon
							className='grow pointer'
							onClick={func}
							icon={faSyncAlt}
							size='xs'
						/>
					</h3>
				</div>
				<div className='para-text tc fl w-100 w-third-ns pa2'>
					<div className='col2 row1'>
						<div>Cloudiness: {weather.CWeatherClouds} %</div>
						<div>UV Index: {weather.CWeatherUVI}</div>
						<div>Dew Point: {weather.CWeatherDew} °C</div>
					</div>
					<div className='col2 row2'>
						<div>Pressure: {weather.CWeatherPressure} mb</div>
						<div>Humidity: {weather.CWeatherHumidity}%</div>
						<div>Rain in last hour: {weather.CWeatherRain} mm</div>
					</div>
				</div>
				<div className='para-text fl w-100 w-third-ns pa2'>
					<div className='col3 row1'>
						<div>Wind Speed: {weather.CWeatherWind} m/s</div>
						<div>Wind Angle: {weather.CWeatherWindDeg} deg</div>
						<div>Wind Gust: {weather.CWeatherWindGust} m/s</div>
						<div>Visibility: {weather.CWeatherVisibility} km</div>
					</div>

					<div className='col3 row2'>
						<div>Current Location: {weather.CLocation}</div>
						<div>Current Timezone: GMT +{weather.CTimezone}</div>
						<div>
							Current day Sunrise:{' '}
							{converter(weather.CDaySunrise)}
						</div>
						<div>
							Current day Sunset: {converter(weather.CDaySunset)}
						</div>
					</div>
				</div>
			</div>
		);

}

export default CurrentCard;