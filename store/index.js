import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)
import MenuIcon from 'vue-material-design-icons/Menu.vue'
import Home from 'vue-material-design-icons/HomeLightBulbOutline.vue'
import Pound from 'vue-material-design-icons/Pound.vue'
import BellOutline from 'vue-material-design-icons/BellOutline.vue'
import EmailOutline from 'vue-material-design-icons/EmailOutline.vue'
import ClipboardListOutline from 'vue-material-design-icons/ClipboardListOutline.vue'
import AccountOutline from 'vue-material-design-icons/AccountOutline.vue'
import LanConnect from 'vue-material-design-icons/LanConnect.vue'
import BookAccountOutline from 'vue-material-design-icons/BookAccountOutline.vue'

export const store = new vuex.Store({
  state: {
    count: 0,
    toggled: false,
    openSettingsModal: false,
    mobileSideNav: false,
    sideNavLinks: [
      {
        text: 'Home',
        icon: Home,
        link: '/',
        name: 'index',
      },
      {
        text: 'GuestBook',
        icon: ClipboardListOutline,
        link: '/guestbook',
        name: 'guestbook',
      },
      {
        text: 'Resume',
        icon: AccountOutline,
        link: '/resume',
        name: 'resume',
      },
      {
        text: 'Projects',
        icon: LanConnect,
        link: '/projects',
        name: 'projects',
      },
      {
        text: 'Blog',
        icon: BookAccountOutline,
        link: '/blogs',
        name: 'blogs',
      },
      {
        text: 'Contact Me',
        icon: EmailOutline,
        link: '/contactMe',
        name: 'contactMe',
      },
    ],
  },
  getters: {
    getSideNavLinks: (state) => state.sideNavLinks,
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
      console.log('you should close', false)
      if (payload != undefined) {
        return (state.mobileSideNav = payload)
      }
      state.mobileSideNav = !state.mobileSideNav
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
