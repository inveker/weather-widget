import {status, json} from "@/utils/fetch";
import {OpenWeatherCityInfo, OpenWeatherSearchInfo} from "@/api/openWeather/types";



const API_KEY = '1e63663258c09fb04d81b430793cd2e6';


export default function fetchWeather(cityName: string): Promise<OpenWeatherCityInfo> {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${API_KEY}`)
        .then(status)
        .then(json);
}


export function getWeatherIcon(icon: string): string {
    return `https://openweathermap.org/img/wn/${icon}@2x.png`;
}


export function searchCities(query: string): Promise<Array<OpenWeatherSearchInfo>> {
    return new Promise(resolve => {
        if(query.length > 2)
            fetch(`https://api.openweathermap.org/data/2.5/find?q=${query}&appid=${API_KEY}&type=like&sort=population`)
                .then(status)
                .then(json)
                .then(r => resolve(r.list))
        else
            resolve([]);
    });
}