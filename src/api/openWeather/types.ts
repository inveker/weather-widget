
interface OpenWeatherCityBase {
    "coord": {
        "lon": number;
        "lat": number;
    };
    "clouds": {
        "all": number;
    };
    "dt": number;
    "id": number;
    "main": {
        "temp": number;
        "feels_like": number;
        "temp_min": number;
        "temp_max": number;
        "pressure": number;
        "humidity": number;
    };
    "name": string;
    "weather": [
        {
            "id": number;
            "main": string;
            "description": string;
            "icon": string;
        }
    ];
    "wind": {
        "speed": number;
        "deg": number;
    };
}

export interface OpenWeatherSearchInfo extends OpenWeatherCityBase {
    sys: {
        country: string;
    };
}

export interface OpenWeatherCityInfo extends OpenWeatherCityBase {
    "base": string;
    "visibility": number;
    "sys": {
        "type": number;
        "id": number;
        "message": number;
        "country": string;
        "sunrise": number;
        "sunset": number;
    };
    "timezone": number;
    "cod": number;
}