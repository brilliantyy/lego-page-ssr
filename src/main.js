import App from './App.vue'
import createRouter from './router'
import createStore from './store'
import { transformCss } from './utils/index'
import registerComponents from './register'

const a = {
    css: {
        backgroundColor: "rgba(235, 129, 129, 1)",
        borderColor: "#000000",
        borderRadius: 0,
        borderStyle: "solid",
        borderWidth: 1,
        height: 100,
        left: 26,
        top: 70,
        width: 300,
        zIndex: 0,
    },
    id: "f75bf605-fdc1-4cdb-9aea-4729ace429a5",
    name: "cmp-div",
    options: {},
    animation: {}
}

const pageData = {
    pageConfig: {},
    componentsConfig: [a]
}

export default function createApp(Vue) {
    const router = createRouter()
    const store = createStore()

    registerComponents(Vue)

    const cmps = pageData.componentsConfig.map(cmp => ({ ...cmp, css: transformCss(cmp.css)}))
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
