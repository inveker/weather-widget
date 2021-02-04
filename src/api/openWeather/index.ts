import {status, json} from "@/utils/fetch";

const API_KEY = '1e63663258c09fb04d81b430793cd2e6';

export default function fetchWeather (cityname: string): Promise<any> {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityname}&appid=${API_KEY}`)
        .then(status)
        .then(json);
}

export function getWeatherIcon(icon: string) {
    return `https://openweathermap.org/img/wn/${icon}@2x.png`;
}