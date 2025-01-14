/* eslint-disable react/prop-types */
import './Weather.css'

function WeatherInfos({ weather }) {
  return (
    <div className="container-infos">
      <h2>{weather.name}</h2>
      <div className="info">
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
        />
        <p className="temperature">{Math.round(weather.main.temp)}ºC</p>
      </div>
      <p className="description">{weather.weather[0].description}</p>
      <div className="details">
        <p>Sensação Térmica: {Math.round(weather.main.feels_like)} ºC</p>
        <p>Umidade: {weather.main.humidity} %</p>
        <p>Pressão: {weather.main.pressure}</p>
      </div>
    </div>
  );
}

export default WeatherInfos;
