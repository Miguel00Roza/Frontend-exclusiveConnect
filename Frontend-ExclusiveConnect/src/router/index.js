import { createRouter, createWebHistory } from 'vue-router';

// Imports Pages
import registerPage from '../views/registerPage.vue';
import loginPage from '../views/loginPage.vue';
import indexPage from '../views/indexPage.vue';
import ledPage from '../views/ledPage.vue';
import devPage from '../views/devPage.vue';
import heaterPage from '../views/heaterPage.vue';
import profilePage from '../views/profilePage.vue';

// Routes
const routes = [
  {
    path: '/register',         // URL no navegador
    name: 'register',      // Nome para a rota
    component: registerPage  // A view que será exibida
  },
  {
    path: '/login',
    name: 'login',
    component: loginPage
  },
  {
    path: '/main',
    name: 'main',
    component: indexPage
  },
  {
    path: '/ledControl',
    name: 'ledControl',
    component: ledPage
  },
  {
    path: '/',
    name: 'devPage',
    component: devPage
  },
  {
    path: '/heaterControl',
    name: 'heaterControl',
    component: heaterPage
  },
  {
    path: '/profilePage',
    name: 'profilePage',
    component: profilePage
  }
];

// 3. Crie a instância do roteador
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// 4. Exporte o roteador
export default router;