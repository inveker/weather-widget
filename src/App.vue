<template>
    <v-app class="weather-widget">
      <v-main class="content">
        <keep-alive>
          <router-view/>
        </keep-alive>
      </v-main>
    </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from "vue-class-component";

@Component
export default class App extends Vue {}
</script>

<style lang="scss">
.weather-widget {
  width: 300px;
  display: inline-block;
  background-color: transparent;

  & > div {
    min-height: auto;
  }
}
</style>