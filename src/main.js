import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './app'
import './main.css'

createApp(App).use(createPinia()).mount('#app');