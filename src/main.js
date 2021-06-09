import { createApp } from 'vue'
import App from './App.vue'
import AppRouter from './router.js'

const app = createApp(App);

app.use(AppRouter);
app.mount('#app');

