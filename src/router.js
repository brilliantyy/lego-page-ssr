import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'

Vue.use(Router);

export default function createRouter() {
  return new Router({
    mode: "history",
    routes: [
      {
        path: "/",
        name: "index",
        component: App
      }
    ]
  })
}