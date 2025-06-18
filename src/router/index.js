import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import ContentView from '@/views/ContentView.vue';
import ServicesView from '@/views/ServicesView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/content', component: ContentView },
  { path: '/services', component: ServicesView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
