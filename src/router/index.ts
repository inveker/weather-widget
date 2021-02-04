import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';



Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/Settings.vue')
  }
]

const router = new VueRouter({
  mode: 'abstract',
  routes
});

router.push('/');

export default router;
