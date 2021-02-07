import Vue from 'vue'
import Vuex from 'vuex'
import {WeatherState} from './modules/weather';

Vue.use(Vuex);

export interface RootState {
  weather: WeatherState;
}

export default new Vuex.Store<RootState>({
  modules: {
    //modules are imported dynamically
  }
});