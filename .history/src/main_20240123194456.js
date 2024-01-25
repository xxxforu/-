import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-plus/dist/index.css'

createApp(App).use(store).use(ElementPlus).use(router).mount('#app')
