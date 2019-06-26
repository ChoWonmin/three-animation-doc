import Vue from 'vue';
import Router from 'vue-router';
import Springs from './views/springs/Springs.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'springs',
      component: Springs
    }
  ]
});
