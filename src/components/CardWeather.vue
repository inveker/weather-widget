<template>
  <v-card>
    <v-card-title
        class="headline"
        v-text="city"
    />

    <v-card-text>
      <v-row align="center" align-content="center">
        <v-col>
          <img :src="weatherIcon" alt="">
        </v-col>
        <v-col class="temperature">
          {{ temp }} &deg; C
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          Feels like  C. Broken clouds. Light breeze
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          3.0mm SSe
        </v-col>
        <v-col cols="6">
          1021PHA
        </v-col>
        <v-col cols="6">
          Humidity 97
        </v-col>
        <v-col cols="6">
          Dwe point
        </v-col>
        <v-col cols="6">
          Visibility
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import fetchWeather, {getWeatherIcon} from "../api/openWeather";
import beaufort from 'beaufort-scale';
import {Component,Prop} from "vue-property-decorator";

@Component
export default class CardWeather extends Vue {
  @Prop({type: String, required: true})
  readonly city!: string;
  weatherIcon = '';
  temp = '0';
  
  mounted() {
    // console.log(this.city)
    //
    // fetchWeather(this.city).then(res => {
    //   console.log(beaufort(res.wind.speed))
    //   this.weatherIcon = getWeatherIcon(res.weather[0].icon);
    //   this.temp = res.main.temp;
    // });
  }
}
</script>

<style lang="scss" scoped>
  .temperature {
    font-size: 21px;
    font-weight: 700;
  }
</style>