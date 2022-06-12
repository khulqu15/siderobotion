import { createApp, VueElement } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Flowbite from 'flowbite'

createApp(App)
  .use(store)
  .use(router)
  .use(Flowbite)
  .mount('#app')
