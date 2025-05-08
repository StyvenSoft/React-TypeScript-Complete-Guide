import { Weather } from "../../hooks/useWeather"
import { formatTemperature } from "../../utils"

type WeatherDetailPros = {
  weather: Weather
}

export default function WeatherDetail({ weather }: WeatherDetailPros) {
  return (
    <div>
      <h1>Clima de: {weather.name}</h1>
      <h2>{formatTemperature(weather.main.temp)}&deg;C</h2>
      <div>
        <h3>Min: <span>{formatTemperature(weather.main.temp_min)}&deg;C</span></h3>
        <h3>Min: <span>{formatTemperature(weather.main.temp_max)}&deg;C</span></h3>
      </div>
    </div>
  )
}
