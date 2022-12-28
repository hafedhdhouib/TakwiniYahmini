import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/costum.scss'
import '../node_modules/bootstrap/dist/js/bootstrap'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import App from './App.vue'
import router from './router'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')

