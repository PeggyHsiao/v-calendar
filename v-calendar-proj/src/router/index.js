import Vue from 'vue';
import Router from 'vue-router';

import Calendar from '@/components/Calendar';
import DatePicker from '@/components/DatePicker';

Vue.use(Router);

const routes = [
  {
    path: '/calendar',
    name: 'calendar',
    component: Calendar,
  },
  {
    path: '/datePicker',
    name: 'datePicker',
    component: DatePicker,
  },
];

const router = new Router({
  routes,
});

export default router;
