import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

const app = createApp(App)
console.log(app.config)

app.mount('#app')
