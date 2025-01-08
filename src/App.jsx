import {useState, useRef} from 'react';
import axios from 'axios';
import './App.css'

import WeatherInfos from './components/infosWeather/WeatherInfos';
import WeatherNextDays from './components/weatherNextDays/WeatherNextDays'

function App() {
  const [weather, setWeather] = useState();
  const [nextDays, setNextDays] = useState(); 
  const inputRef = useRef();


 async function searchCity(){
    const city = inputRef.current.value
    const key = "6a54334cc7b124657745a4c10e433eb6"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const urlNextDays = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const fecth = await axios.get(url)
    const fecthNextDays = await axios.get(urlNextDays)
    setWeather(fecth.data)
    setNextDays(fecthNextDays.data)

    console.log(nextDays)
  }

  return (
      <div className='container'>
        <h1>Previsão do Tempo</h1>
        <input ref={inputRef} type="text" placeholder='Digite o nome da cidade'/>
        <button onClick={searchCity}>Buscar</button>
        {weather && <WeatherInfos weather={weather}/>}
        {nextDays && <WeatherNextDays nextDays={nextDays}/>}
      </div>
  )
}

export default App
