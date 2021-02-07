<template>
  <v-card v-if="info">
    <v-card-title
        class="headline"
        v-text="city"
    />
    <v-card-text>
      <v-row align="center" align-content="center">
        <v-col>
          <v-img
              :src="info.weatherImg"
              height="100"
              width="100"
          ></v-img>
        </v-col>
        <v-col class="temperature">
          {{ info.temperature }}&deg;C
        </v-col>
      </v-row>
      <v-row class="description">
        <v-col>
          <span>Feels like {{ info.feelsLike }}&deg;C. </span>
          <span>{{ info.description | capitalizeFirstLetter }}. </span>
          <span>{{ info.windDescription }}</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" v-if="info.windSpeed > 0">
          <v-icon small :style="{transform: `rotateZ(${info.windDeg}deg)`}">
            mdi-navigation
          </v-icon>
          {{ info.windSpeed }}m/s {{ info.windAbb }}
        </v-col>
        <v-col cols="6">
          <v-icon small>
            mdi-gauge
          </v-icon>
          {{ info.pressure }}hPa
        </v-col>
        <v-col cols="6">
          Humidity: {{ info.humidity }}%
        </v-col>
        <v-col cols="6">
          Dew point: {{ info.dewPoint }}&deg;C
        </v-col>
        <v-col cols="6">
          Visibility: {{info.visibility}}km
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import {Component, Prop} from "vue-property-decorator";
import WeatherModule, {WeatherInfo} from "@/store/modules/weather";


@Component({
  filters: {
    capitalizeFirstLetter(string: string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }
})
export default class CardWeather extends Vue {
  @Prop({required: true}) readonly city!: string;

  created() {
    WeatherModule.LoadWeatherInfo(this.city);
  }

  get info(): WeatherInfo {
    return WeatherModule.cities[this.city]
  }
}
</script>

<style lang="scss" scoped>
  .temperature {
    font-size: 21px;
    font-weight: 700;
  }
</style>