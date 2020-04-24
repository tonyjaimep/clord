import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from './views/Home';

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cloud',
      name: 'results',
      component: () => import('./views/Results.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/auth/Login.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
  ]
});