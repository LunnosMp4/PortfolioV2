import { createRouter, createWebHistory } from 'vue-router';
import HomeScreen from '@/screens/HomeScreen.vue';
import NotFound from '@/components/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeScreen
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '*',
    redirect: { name: 'NotFound' }
  }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
