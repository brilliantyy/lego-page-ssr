import App from './App.vue'
import createRouter from './router'
import createStore from './store'
import { transformCss } from './utils/index'
import registerComponents from './register'
import DataService from './http/dataCenter'


export default async function createApp(context, isServerEntry) {
    const { Vue, pageData } = context
    const router = createRouter()
    const store = createStore()

    registerComponents(Vue)
    Vue.use(DataService)

    const initialState = {}
    let cmps = []
    let data = null
    try {
        data = JSON.parse(pageData)
    } catch (error) {}
    if (data && data.components && !!data.components.length) {
        for (let i = 0; i < data.components.length; i++) {
            const cmp = data.components[i]
            const CmpConstructor = Vue.component(cmp.name)
            if (typeof CmpConstructor === 'function') {
                let initialData = {}
                const tempInstance = new CmpConstructor()
                const { getInitialState } = tempInstance.$options.methods
                if (isServerEntry && typeof getInitialState === 'function') {
                    initialData = await getInitialState.call(tempInstance, { id: cmp.id, options: cmp.options })
                    initialState[cmp.id] = initialData
                }
                cmps.push({ ...cmp, css: transformCss(cmp.css), initialData})
            }
        }
    }

    context.initialState = JSON.stringify(initialState)
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
