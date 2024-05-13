// router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import DisplayView from '@/views/DisplayView.vue';
import FinishedView from '@/views/FinishedView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'DisplayView',
    component: DisplayView,
  },
  {
    path: '/finished',
    name: 'FinishedView',
    component: FinishedView,

  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
