<template>
  <v-card>
    <v-card-title
        class="headline"
        v-text="city"
    />

    <v-card-text>
      <v-row align="center" align-content="center">
        <v-col>
          <img :src="weatherIcon">
        </v-col>
        <v-col class="temperature">
          {{ temp }}&deg;C
        </v-col>
      </v-row>
      <v-row class="description">
        <v-col>
          <span>Feels like {{ feelsLike }}&deg;C. </span>
          <span>{{ description | capitalizeFirstLetter }}. </span>
          <span>{{ windDescription }}</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" v-if="windSpeed > 0">
          <v-icon small :style="{transform: `rotateZ(${windDeg})`}">
            mdi-navigation
          </v-icon>
          {{ windSpeed }}m/s {{ windAbb }}
        </v-col>
        <v-col cols="6">
          <v-icon small>
            mdi-gauge
          </v-icon>
          {{ pressure }}hPa
        </v-col>
        <v-col cols="6">
          Humidity: {{ humidity }}%
        </v-col>
        <v-col cols="6">
          Dew point: {{ dewPoint }}&deg;C
        </v-col>
        <v-col cols="6">
          Visibility: {{visibility}}km
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import fetchWeather, {getWeatherIcon} from "../api/openWeather";
import beaufort from 'beaufort-scale';
import {Component, Prop} from "vue-property-decorator";
import {dewPoint, windDirectionAbbreviation} from "@/utils/weather";

@Component({
  filters: {
    capitalizeFirstLetter(string: string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }
})
export default class CardWeather extends Vue {
  @Prop({type: String, required: true}) readonly city!: string;


  weatherIcon = '';
  temp = '0';
  feelsLike = '0';
  description = '';
  windDescription = '';
  windDeg = '';
  pressure = '';
  humidity = '';
  dewPoint = '';
  visibility = '';
  windSpeed = ''
  windAbb = ''
  
  mounted() {
    fetchWeather(this.city).then(res => {
      console.log(res)
      const w = res.weather[0];
      this.weatherIcon = getWeatherIcon(w.icon);
      this.temp = res.main.temp;
      this.windDescription = beaufort(res.wind.speed).desc;
      this.windDeg = res.wind.deg + 'deg';
      this.description = w.description
      this.feelsLike = res.main.feels_like;
      this.pressure = res.main.pressure;
      this.humidity = res.main.humidity;
      this.dewPoint = dewPoint(+this.temp, +this.humidity);
      this.visibility = (res.visibility / 1000).toFixed(1)
      this.windSpeed = res.wind.speed.toFixed(1);
      this.windAbb = windDirectionAbbreviation(res.wind.deg)
    });
  }

}
</script>

<style lang="scss" scoped>
  .temperature {
    font-size: 21px;
    font-weight: 700;
  }
</style>