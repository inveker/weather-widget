import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import '@/filters'
import 'reflect-metadata';



Vue.config.productionTip = false


const app = new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
});


//load styles
document.head.insertAdjacentHTML("beforeend", '<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900">');
document.head.insertAdjacentHTML("beforeend", '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css">');


//Custom element
let count = 0;
class WeatherWidget extends HTMLElement {
  connectedCallback() {
    if(++count > 1)
      throw new Error('In free version WeatherWidget you can create one widget')

    this.appendChild(app.$mount().$el);
  }
}
customElements.define('weather-widget', WeatherWidget);