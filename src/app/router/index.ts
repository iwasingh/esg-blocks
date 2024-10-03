import { createRouter, createWebHistory } from 'vue-router';
import Home from '../home/home.vue';

const routes = [
  {
    path: '/',
    component: Home,
  },
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;