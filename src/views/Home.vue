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

    <CardWeather city="London, GB"/>
    <CardWeather city="Moscow"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator';
import CardWeather from "@/components/CardWeather.vue";



@Component({
  components: {
    CardWeather,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss">
  .gear {
    right: 0;
    z-index: 1;
    margin: 10px
  }
</style>
