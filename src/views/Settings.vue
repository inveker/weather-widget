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
        <vuedraggable v-model="tabs" handle=".handle">
            <v-list-item v-for="tab in tabs" :key="tab.id" class="">
              <v-list-item-icon class="handle">
                <v-icon>
                  mdi-menu
                </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="tab.id"></v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-icon>
                  mdi-trash-can-outline
                </v-icon>
              </v-list-item-action>
            </v-list-item>

        </vuedraggable>
      </v-list>






    </v-card>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import vuedraggable from 'vuedraggable';

@Component({
  components: {
    vuedraggable
  }
})
export default class Settings extends Vue {

  tabs = [
    {
      id: 1
    },
    {
      id: 2
    },
  ]
}
</script>

<style lang="scss">
.handle {
  cursor: move;
}
</style>
