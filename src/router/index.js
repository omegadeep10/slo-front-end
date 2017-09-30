import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Login from '@/components/Login';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ],
  //mode: "history" # If enabled, makes prettier urls but breaks webpack hot reloading (Firefox bug). Enable in prod
});
