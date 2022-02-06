import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    count: 0,
    toggled: false,
  },

  getters: {
    getCount: (state) => {
      return state.count
    },
    toggled: (state) => {
      return state.toggled
    },
  },
  mutations: {
    increment(state, payload) {
      state.count += payload.amount
    },
    toggleLightMode(state) {
      state.toggled = !state.toggled
      document.documentElement.classList.toggle('dark')
      if (document.documentElement.classList.length) {
        localStorage.setItem('theme', 'dark')
        state.toggled = true
      } else {
        localStorage.removeItem('theme')
        state.toggled = false
      }
    },
    checkLightState(state) {
      if (window.localStorage.getItem('theme')) {
        document.documentElement.classList.add('dark')
        state.toggled = true
      }
    },
  },
})
