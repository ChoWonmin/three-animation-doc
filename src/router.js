import Vue from 'vue';
import Router from 'vue-router';
import spring from './views/springs';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'springs',
      component: spring.Springs
    },
    {
      path: '/basic',
      name: 'springs',
      component: spring.Basic
    }
  ]
});
