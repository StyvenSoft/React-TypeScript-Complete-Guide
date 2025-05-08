import { Weather } from "../../hooks/useWeather"
import { formatTemperature } from "../../utils"
import styles from "./WeatherDetail.module.css"
type WeatherDetailPros = {
  weather: Weather
}

export default function WeatherDetail({ weather }: WeatherDetailPros) {
  return (
    <div className={styles.container}>
      <h1>Clima de: {weather.name}</h1>
      <h2 className={styles.currentTemp}>{formatTemperature(weather.main.temp)}&deg;C</h2>
      <div className={styles.temperatures}>
        <h3>Min: <span>{formatTemperature(weather.main.temp_min)}&deg;C</span></h3>
        <h3>Min: <span>{formatTemperature(weather.main.temp_max)}&deg;C</span></h3>
      </div>
    </div>
  )
}
