import Vue from 'vue'
import App from './App.vue'

export default function createApp({ children }) {
    const app = new Vue({
        data() {
            return {
                children: []
            }
        },
        render: h => h(App)
    })
    return { app }
}
