import { createRouter, createWebHistory } from 'vue-router';

// 1. Importe os componentes que serão suas "páginas"
import registerPage from '../views/registerPage.vue';
import loginPage from '../views/loginPage.vue';
import indexPage from '../views/indexPage.vue';
import ledPage from '../views/ledPage.vue';
import devPage from '../views/devPage.vue';

// 2. Defina suas rotas em um array
// Cada rota é um objeto que mapeia um caminho (path) a um componente
const routes = [
  {
    path: '/register',         // A URL no navegador
    name: 'register',      // Um nome opcional para a rota
    component: registerPage  // O componente que será exibido
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
  }
];

// 3. Crie a instância do roteador
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// 4. Exporte o roteador
export default router;