<template>
    <v-app>
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
.content {
  width: 300px;
}
</style>