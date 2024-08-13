import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import i18n from './i18n'; // Импортируйте i18n

const app = createApp(App);

app.use(router);
app.use(i18n); // Установите i18n с помощью app.use

app.mount('#app');
