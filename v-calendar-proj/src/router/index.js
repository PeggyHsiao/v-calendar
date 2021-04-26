import Vue from 'vue';
import Router from 'vue-router';
import Calendar from '@/components/Calendar';

Vue.use(Router);

const routes = [
  {
    path: '/calendar',
    name: 'calendar',
    component: Calendar,
  },
];

const router = new Router({
  routes,
});

export default router;
