<template>
  <div class="about" style="position: relative">

    <router-link :to="{name: 'Home'}">
      <v-btn
          class="gear"
          absolute
          icon
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </router-link>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class Settings extends Vue {

}
</script>

