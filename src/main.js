import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ajax from 'vuejs-ajax'
import axios from 'axios'

// Vue.use(ajax)

createApp(App).use(router).mount('#app')
