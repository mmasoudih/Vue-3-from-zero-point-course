import { createApp } from 'vue'
import App from './App.vue'
import HeaderVue from './components/Header.vue'
const app = createApp(App)

app.component('HeaderVue',HeaderVue)

app.mount('#app')
