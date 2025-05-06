import axios from "axios";
import { SearchType, Weather } from "../types";

function isWeatherResponse(weather: unknown) {
    return (
        Boolean(weather) &&
        typeof weather === 'object' &&
        typeof (weather as Weather).name === 'string' &&
        typeof (weather as Weather).main.temp === 'string' &&
        typeof (weather as Weather).main.temp_max === 'string' &&
        typeof (weather as Weather).main.temp_min === 'string'
    )
}


export default function useWeather() {

    const fetchWeather = async (search: SearchType) => {

        const appId = import.meta.env.VITE_API_KEY
        try {
            const geoURL = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`
            const {data} = await axios(geoURL)
            const lat = data[0].lat
            const lon = data[0].lon

            const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`

            // console.log(weatherURL);
            const { data: weatherResult } = await axios(weatherURL)
            const result = isWeatherResponse(weatherResult)
            
            if(result) {
                console.log(weatherResult.name);
            }
            
            
        } catch (error) {
            console.log(error);
        }
    }

    return (
        fetchWeather
    )
}
