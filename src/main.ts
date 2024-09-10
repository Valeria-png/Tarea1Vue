import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'

App.use(router);

createApp(App).mount('#app')
