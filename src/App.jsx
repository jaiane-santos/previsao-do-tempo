import {useState, useRef} from 'react';
import axios from 'axios';
import './App.css'

import WeatherInfos from './components/infosWeather/WeatherInfos';

function App() {
  const [weather, setWeather] = useState();
  const inputRef = useRef();


 async function searchCity(){
    const city = inputRef.current.value
    const key = "6a54334cc7b124657745a4c10e433eb6"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const fecth = await axios.get(url)
    setWeather(fecth.data)
  }

  return (
      <div className='container'>
        <h1>Previsão do Tempo</h1>
        <input ref={inputRef} type="text" placeholder='Digite o nome da cidade'/>
        <button onClick={searchCity}>Buscar</button>
        {weather && <WeatherInfos weather={weather}/>}
      </div>
  )
}

export default App
