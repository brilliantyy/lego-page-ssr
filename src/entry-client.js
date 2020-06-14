import Vue from 'vue'
import createApp from './main'

let pageData = '{}'
if (window.__PAGE_DATA__) {
    pageData = JSON.stringify(window.__PAGE_DATA__)
}

init()

async function init() {
    const { app, store } = await createApp({ Vue, pageData })

    if (window.__INITIAL_STATE__) {
        store.replaceState(window.__INITIAL_STATE__)
    }
    
    app.$mount('#lego-app')
    app.$nextTick().then(() => {
        initComponentData(app)
    })
}

function initComponentData(app) {
    const initialState = window.__INITIAL_DATA__
    const cmpIds = Object.keys(initialState)

    if (cmpIds.length === 0) return

    const rootComponent = app.$children[0]
    rootComponent.$children.forEach(cmp => {
        if (cmpIds.includes(cmp.id)) {
            cmp.initialData = initialState[cmp.id]
        }
    })
}
