import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import 'vue3-toastify/dist/index.css' // required styles
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify'


const pinia = createPinia();

const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(Vue3Toastify, {
    autoClose: 3000,
    position: "top-right",
} as ToastContainerOptions);
app.mount('#app');
