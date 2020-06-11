import App from './App.vue'
import createRouter from './router'
import createStore from './store'
import { transformCss } from './utils/index'
import registerComponents from './register'
import DataService from './http/dataCenter'


export default async function createApp({ Vue, pageData }) {
    const router = createRouter()
    const store = createStore()
    console.log('createApp1 ', router)

    registerComponents(Vue)
    Vue.use(DataService)

    let cmps = []
    let data = null
    try {
        data = JSON.parse(pageData)
    } catch (error) {}
    if (data && data.components && !!data.components.length) {
        // cmps = data.components.map(cmp => ({ ...cmp, css: transformCss(cmp.css)}))
        for (let i = 0; i < data.components.length; i++) {
            console.log('aaaaaaaa ', i)
            const cmp = data.components[i]
            const CmpConstructor = Vue.component(cmp.name)
            if (typeof CmpConstructor === 'function') {
                let initialState = {}
                const tempInstance = new CmpConstructor()
                const { getInitialState } = tempInstance.$options.methods
                if (typeof getInitialState === 'function') {
                    initialState = await getInitialState.call(tempInstance, { id: cmp.id, options: cmp.options })
                }
                cmps.push({ ...cmp, css: transformCss(cmp.css), initialState})
            }
        }
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
    console.log('createApp2 ', router)
    return { app, router, store }
}
