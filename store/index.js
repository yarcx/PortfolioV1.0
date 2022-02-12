import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)

export const store = new vuex.Store({
  state: {
    count: 0,
    toggled: false,
    openSettingsModal: false,
    mobileSideNav: false,
  },
  getters: {
    getMobileSideNav: (state) => state.mobileSideNav,
    getCount: (state) => {
      return state.count
    },
    toggled: (state) => {
      return state.toggled
    },
    getSettingsModal: (state) => {
      return state.openSettingsModal
    },
  },
  mutations: {
    changeMobileSideNav(state, payload) {
      state.mobileSideNav = payload
    },
    increment(state, payload) {
      state.count += payload.amount
    },
    toggleLightMode(state, ligthMode) {
      if (!ligthMode) {
        state.toggled = !state.toggled
        document.documentElement.classList.toggle('dark')
        if (document.documentElement.classList.length) {
          localStorage.setItem('theme', 'dark')
          state.toggled = true
        } else {
          localStorage.removeItem('theme')
          state.toggled = false
        }
      } else {
        state.toggled = !state.toggled
        document.documentElement.classList.remove(
          document.documentElement.classList[0]
        )
        document.documentElement.classList.toggle(ligthMode)
        if (document.documentElement.classList.length) {
          localStorage.setItem('theme', ligthMode)
          state.toggled = true
        }
      }
    },
    checkLightState(state) {
      if (window.localStorage.getItem('theme')) {
        document.documentElement.classList.add('dark')
        state.toggled = true
      }
    },
    toggleSettingsModal(state, status) {
      if (status) {
        state.openSettingsModal = status
      }
      state.openSettingsModal = !state.openSettingsModal
    },
  },
})
