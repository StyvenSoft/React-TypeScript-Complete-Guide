import axios from "axios";
import { SearchType } from "../types";


export default function useWeather() {

    const fetchWeather = async (search: SearchType) => {

        const appId = 'b995e6755b8658ed5dc9cca227983a51'
        try {
            const geoURL = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`
            const data = await axios(geoURL, { method: 'get' })
            console.log(data);
            
        } catch (error) {
            console.log(error);
        }
    }

    return (
        fetchWeather
    )
}
