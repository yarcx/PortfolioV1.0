import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)

export const store = new vuex.Store({
  state: {
    count: 0,
    toggled: false,
    openSettingsModal: false,
  },

  getters: {
    getCount: (state) => {
      return state.count
    },
    toggled: (state) => {
      return state.toggled
    },
    getSettingsModal: (state) => {
      console.log(state, ' from the modal settings')
      return state.openSettingsModal
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
    toggleSettingsModal(state, status) {
      console.log(state, status, 'this got fired')
      if (status) {
        state.openSettingsModal = status
      }
      state.openSettingsModal = !state.openSettingsModal
    },
  },
})
