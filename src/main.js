import App from './App.vue'
import createRouter from './router'
import createStore from './store'
import { transformCss } from './utils/index'
import registerComponents from './register'

export default function createApp({ Vue, pageData }) {
    const router = createRouter()
    const store = createStore()

    registerComponents(Vue)

    let cmps = []
    let data = null
    try {
        data = JSON.parse(pageData)
    } catch (error) {}
    if (data && data.components && !!data.components.length) {
        cmps = data.components.map(cmp => ({ ...cmp, css: transformCss(cmp.css)}))
    }
    const app = new Vue({
        router,
        store,
        render: h => h(App, {
            props: {
                cmps
            }
        })
    })
    return { app, router, store }
}
