/* eslint-disable react/prop-types */
import './WeatherNextDays.css'

function WeatherNextDays({ nextDays }) {

    let dailyForeCast = { }

    for(let forecast of nextDays.list){
        const date = new Date(forecast.dt * 1000).toLocaleDateString()

        if(!dailyForeCast[date]){
            dailyForeCast[date] = forecast
        }
    }
 
const fiveDays = Object.values(dailyForeCast).slice(1,6)

function converteDate(date){
    const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-BR', {weekday:'long', day: '2-digit'})

    return newDate
}

  return (
    <div className="container-infos">
        <p>Previsão Próximos 5 dias</p>
      {fiveDays.map(forecast => (
        <div key={forecast.dt}>
          <p>{converteDate(forecast)}</p>
          <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} />
          <p>{forecast.weather[0].description}</p>
          <p>{Math.round(forecast.main.temp_min)}°C min / {Math.round(forecast.main.temp_max)}ºC máx</p>
        </div>
      ))}
    </div>
  );
}

export default WeatherNextDays;