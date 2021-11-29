import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/style/main.css'
// import './directives'

const app = createApp(App)

// global directives
app.directive('dcenter', {
    beforeMount(el) {
        el.style.display = "flex"
        el.style.alignItems  = "center"
        el.style.justifyContent = "center"
    }
})
app.directive('dspace', {
    beforeMount(el, binding) {
        el.style.display = "flex"
        el.style.alignItems  = "center"
        el.style.justifyContent = `space${binding.value}`
    }
})

app.use(store).use(router).mount('#app')
