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

    <v-card>
      <v-card-title class="headline">
        Settings
      </v-card-title>

      <v-list>
        <vuedraggable v-model="cities" handle=".handle">
            <v-list-item v-for="city in cities" :key="city" class="">
              <v-list-item-icon class="handle">
                <v-icon>
                  mdi-menu
                </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="city"></v-list-item-title>
              </v-list-item-content>
              <v-list-item-action @click="remove(city)">
                <v-btn icon>
                  <v-icon>
                    mdi-trash-can-outline
                  </v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>

        </vuedraggable>
      </v-list>

      <v-container>
        <v-combobox
            v-model="search"
            :items="searchValues"
            label="Add location"
            @input.native="e => search = e.target.value"
            @input="cl"
        ></v-combobox> <!-- @input.native changing model on every input, v-combobox doesn't do it -->

      </v-container>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import vuedraggable from 'vuedraggable';
import SettingsModule from "@/store/modules/settings";
import {searchCities} from "@/api/openWeather";
import {Watch} from "vue-property-decorator";


@Component({
  components: {
    vuedraggable,
  }
})
export default class Settings extends Vue {

  cl(selectedCity: string) {
    this.search = '';
    SettingsModule.ADD_CITY(selectedCity)
  }

  search = '';
  searchValues: Array<string> = [];

  @Watch('search')
  onSearch() {
    searchCities(this.search).then(searchRes => {
      this.searchValues = searchRes.map(item => {
        return `${item.name}, ${item.sys.country}`;
      });
    });
  }

  remove(city: string) {
    SettingsModule.REMOVE_CITY(city)
  }

  get cities() {
    return SettingsModule.cities;
  }
  set cities(newValue) {
    SettingsModule.SET_CITIES(newValue);
  }
}
</script>

<style lang="scss" scoped>
.handle {
  cursor: move;
}
.gear {
  right: 0;
  z-index: 1;
  margin: 10px
}
</style>
