import Vue from 'vue'
import createApp from './main'

const { app, router, store } = createApp(Vue)

if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__)
}

router.onReady(() => {
    app.$mount('#lego-app')
})