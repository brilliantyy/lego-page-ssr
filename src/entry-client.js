import Vue from 'vue'
import createApp from './main'

let pageData = '{}'
if (window.__PAGE_DATA__) {
    pageData = JSON.stringify(window.__PAGE_DATA__)
}

const { app, store } = createApp({ Vue, pageData })

if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__)
}

app.$mount('#lego-app')