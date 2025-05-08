import { Weather } from "../../hooks/useWeather"

type WeatherDetailPros = {
  weather: Weather
}

export default function WeatherDetail({weather} : WeatherDetailPros) {
  return (
    <div>Clima de:</div>
  )
}
