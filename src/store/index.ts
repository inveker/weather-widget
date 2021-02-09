import Vue from 'vue'
import Vuex from 'vuex'
import {WeatherState} from './modules/weather';
import {SettingsState} from "@/store/modules/settings";



Vue.use(Vuex);


export interface RootState {
  settings?: SettingsState;
  weather?: WeatherState;
}


const store = new Vuex.Store<RootState>({
  modules: {
    //modules are imported dynamically
  },
  plugins: [
    //vuex-persistedstate's are registered dynamically for each module (@/store/plugins/persist)
  ]
});

export default store;
