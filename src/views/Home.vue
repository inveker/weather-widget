<template>
  <div class="home">
    <CardWeather city="London, GB"/>
    <CardWeather city="Moscow"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CardWeather from "@/components/CardWeather.vue";

@Component({
  components: {
    CardWeather,
  },
})
export default class Home extends Vue {}
</script>
