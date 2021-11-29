import Vue from 'vue'
const app = Vue.createApp({})

app.directive('dcenter', {
    beforeMount(el) {
        el.style.color = "black"
    }
})