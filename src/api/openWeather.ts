import {status, json} from "@/utils/fetch";



const API_KEY = '1e63663258c09fb04d81b430793cd2e6';


interface OpenWeatherCityInfo {
    "coord": {
        "lon": number;
        "lat": number;
    };
    "weather": [
        {
            "id": number;
            "main": string;
            "description": string;
            "icon": string;
        }
    ];
    "base": string;
    "main": {
        "temp": number;
        "feels_like": number;
        "temp_min": number;
        "temp_max": number;
        "pressure": number;
        "humidity": number;
    };
    "visibility": number;
    "wind": {
        "speed": number;
        "deg": number;
    };
    "clouds": {
        "all": number;
    };
    "dt": number;
    "sys": {
        "type": number;
        "id": number;
        "message": number;
        "country": string;
        "sunrise": number;
        "sunset": number;
    };
    "timezone": number;
    "id": number;
    "name": string;
    "cod": number;
}


export default function fetchWeather(cityName: string): Promise<OpenWeatherCityInfo> {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${API_KEY}`)
        .then(status)
        .then(json);
}


export function getWeatherIcon(icon: string): string {
    return `https://openweathermap.org/img/wn/${icon}@2x.png`;
}