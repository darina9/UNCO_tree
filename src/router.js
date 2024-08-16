import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/view/MainPage.vue';
import NotFound from '@/view/NotFound.vue';

const supportedLangs = ['en', 'ru', 'de', 'uk', 'fr', 'es', 'it'];

const routes = [
  {
    path: '/:lang',
    name: 'MainPage',
    component: MainPage,
    beforeEnter: (to, from, next) => {
      const lang = to.params.lang;
      if (!supportedLangs.includes(lang)) {
        next({ name: 'NotFound', params: { lang: 'en' } });
      } else {
        next();
      }
    }
  },
  {
    path: '/:lang(.*)',
    name: 'NotFound',
    component: NotFound,
  },
  {
    path: '/:catchAll(.*)',
    redirect: { name: 'NotFound', params: { lang: 'en' } }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
    return { top: 0 };
  },
});

export default router;
