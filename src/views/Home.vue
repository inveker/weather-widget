<template>
  <div class="home" style="position: relative">

    <router-link :to="{name: 'Settings'}">
      <v-btn
          class="gear"
          absolute
          icon
      >
        <v-icon>mdi-cog-outline</v-icon>
      </v-btn>
    </router-link>


    <div v-if="cities.length">
      <CardWeather v-for="city in cities" :key="city" :city="city"/>
    </div>
    <v-card v-else>
      <v-card-text>Please select city</v-card-text>
    </v-card>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator';
import CardWeather from "@/components/CardWeather.vue";
import SettingModule from "@/store/modules/settings";



@Component({
  components: {
    CardWeather,
  },
})
export default class Home extends Vue {
  get cities() {
    return SettingModule.cities;
  }
}
</script>

<style lang="scss">
  .gear {
    right: 0;
    z-index: 1;
    margin: 10px
  }
</style>
