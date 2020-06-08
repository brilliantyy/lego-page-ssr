import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default function createStore () {
  return new Vuex.Store({
    state: {
      __PAGE_DATA__: {}
    },
    mutations: {},
    actions: {}
  })
}
