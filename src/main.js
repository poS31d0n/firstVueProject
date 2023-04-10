import { createApp } from 'vue'
import { createPinia } from 'pinia'
const pinia = createPinia();


import App from './app'
import './main.css'


createApp(App).use(pinia).mount('#app')