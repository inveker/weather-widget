import {Module, VuexModule, Mutation, Action, getModule} from 'vuex-module-decorators'
import store from '@/store';
import fetchWeather, {getWeatherIcon} from "@/api/openWeather";
import beaufort from "beaufort-scale";
import Vue from "vue";
import {dewPoint, windDirectionAbbreviation} from "@/utils/weather";
import SettingsModule from "@/store/modules/settings";



const MODULE_NAME = 'weather';


if(module.hot && store.hasModule(MODULE_NAME))
    store.unregisterModule(MODULE_NAME);


export interface WeatherInfo {
    temperature: number;
    windDescription: string;
    windDeg: number;
    description: string;
    feelsLike: number;
    pressure: number;
    humidity: number;
    visibility: number;
    windSpeed: number;
    weatherImg: string;
    dewPoint: number;
    windAbb: string;
}


export interface WeatherState {
    cities: {
        [key: string]: WeatherInfo;
    };
}


@Module({
    name: MODULE_NAME,
    namespaced: true,
    store,
    dynamic: true,
})
class Weather extends VuexModule implements WeatherState {

    cities: WeatherState["cities"] = {};


    @Mutation
    ADD_CITY(payload: {city: string; info: WeatherInfo}) {
        Vue.set(this.cities, payload.city, payload.info)
    }


    @Action
    async LoadWeatherInfo(cityName: string) {
        const res = await fetchWeather(cityName);
        const cityWeather = {
            temperature: res.main.temp,
            windDescription: beaufort(res.wind.speed).desc,
            windDeg: res.wind.deg,
            description: res.weather[0].description,
            feelsLike: res.main.feels_like,
            pressure: res.main.pressure,
            humidity: res.main.humidity,
            visibility: Number((res.visibility / 1000).toFixed(1)),
            windSpeed: Number(res.wind.speed.toFixed(1)),
            weatherImg: getWeatherIcon(res.weather[0].icon),
            dewPoint: Number(dewPoint(res.main.temp, res.main.humidity)),
            windAbb: windDirectionAbbreviation(res.wind.deg)
        };

        this.ADD_CITY({
            city: cityName,
            info: cityWeather
        });
    }
}

export default getModule(Weather);
