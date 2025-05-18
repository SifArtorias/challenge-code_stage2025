import { createApp } from 'vue'
import App from './App.vue'
import { clerkPlugin } from 'vue-clerk'
import router from './router'
import './style.css'

// Remark : it would have been better to put the key in a .env file but it didn't work
const PUBLISHABLE_KEY = "pk_test_ZmFtb3VzLW1hY2tlcmVsLTUyLmNsZXJrLmFjY291bnRzLmRldiQ"

const app = createApp(App)
app
    .use(router)
    .use(clerkPlugin, {
  publishableKey: PUBLISHABLE_KEY
})
app.mount('#app')