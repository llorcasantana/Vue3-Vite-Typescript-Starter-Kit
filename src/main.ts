// import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from './app'

import { createRouter } from './router'

createApp({
  async enhanceApp(app: any) {
    const router = createRouter()
    app.use(createPinia())
  }
}).then((app) => app.mount('#app'))
