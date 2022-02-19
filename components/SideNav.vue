<template>
  <aside
    class="md:w-[20%] hidden md:flex border-r border-solid border-[color:var(--lightThemBorderColor)] dark:border-[color:var(--darkThemeBorderColor)] sm:w-2/12 bg-[color:var(--darkThemeTextColor)] dark:bg-[color:var(--lightThemeTextColor)]"
  >
    <nav
      class="w-[96%] py-2 bg-[color:var(--darkThemeTextColor)] dark:bg-[color:var(--lightThemeTextColor)] flex flex-col justify-between pl-4 h-full ml-auto"
    >
      <div class="h-[70%] mb-4">
        <NuxtLink to="/">
          <h2
            class="logo pl-4 leading-none text-[2rem] cursor-pointer text-[color:var(--BlueThemeColor)] dark:text-[color:var(--darkThemeTextColor)]"
          >
            {{ logo }}
          </h2>
        </NuxtLink>

        <div class="py-2">
          <ul class="">
            <li
              v-for="(sideNav, index) in getSideNavLinks"
              :key="index"
              class="flex text-[color:var(--lightThemeTextColor)] dark:text-[color:var(--darkThemeTextColor)] items-center justify-start transition cursor-pointer group"
              :class="[
                $route.name === sideNav.name ? 'font-bold' : 'font-[300]',
              ]"
            >
              <NuxtLink
                :to="sideNav.link"
                class="flex items-center justify-start p-3 group-hover:rounded-full group-hover:bg-gray-100 dark:group-hover:bg-gray-900 w-max font"
              >
                <component class="" :is="sideNav.icon"></component>
                <span class="mx-3 hidden md:flex text-[20px]">{{
                  sideNav.text
                }}</span>
              </NuxtLink>
            </li>
            <button
              @click="toggleSettingsModal()"
              class="w-[90%] mt-2 p-4 bg-[color:var(--BlueThemeColor)] rounded-full text-[color:var(--darkThemeTextColor)]"
            >
              Display Settings
            </button>
          </ul>
        </div>
      </div>
      <div class="my-3 group">
        <div
          class="text-[color:var(--lightThemeTextColor)] cursor-pointer dark:text-[color:var(--darkThemeTextColor)] group-hover:rounded-full flex justify-between py-2 px-3 items-center group-hover:bg-gray-100 dark:group-hover:bg-gray-900 min-w-full"
        >
          <div class="">
            <img
              src="../static/smallProfilePics.jpg"
              alt="small profile pics"
              class="w-10 h-10 rounded-full"
            />
          </div>
          <div class="mx-2 my-0">
            <div>
              <span class="font-bold text-[15px]">Good Vibes Only</span>
            </div>
            <span class="text-sm font-normal text-slate-500"
              >@Hassan_Yarcx</span
            >
          </div>
          <div class="flex items-center justify-center text-base font-bold">
            ...
          </div>
        </div>
      </div>
    </nav>
  </aside>
</template>
<script>
import MenuIcon from 'vue-material-design-icons/Menu.vue'
import Home from 'vue-material-design-icons/HomeLightBulbOutline.vue'
import Pound from 'vue-material-design-icons/Pound.vue'
import BellOutline from 'vue-material-design-icons/BellOutline.vue'
import { mapGetters, mapMutations } from 'vuex'
import { store } from '../store/index'
export default {
  name: 'SideNav',
  store,
  data() {
    return {
      logo: 'GoodVibesOnly',
      // sideNavLinks: [
      //   {
      //     text: 'Home',
      //     icon: Home,
      //     link: '/',
      //     name: 'index',
      //   },
      //   {
      //     text: 'GuestBook',
      //     icon: ClipboardListOutline,
      //     link: '/guestbook',
      //     name: 'guestbook',
      //   },
      //   {
      //     text: 'Resume',
      //     icon: AccountOutline,
      //     link: '/resume',
      //     name: 'resume',
      //   },
      //   {
      //     text: 'Projects',
      //     icon: LanConnect,
      //     link: '/projects',
      //     name: 'projects',
      //   },
      //   {
      //     text: 'Blog',
      //     icon: BookAccountOutline,
      //     link: '/blogs',
      //     name: 'blogs',
      //   },
      //   {
      //     text: 'Contact Me',
      //     icon: EmailOutline,
      //     link: '/contactMe',
      //     name: 'contactMe',
      //   },
      // ],
    }
  },
  components: { MenuIcon, Home, Pound, BellOutline },
  mounted() {
    let div = document.createElement('div')
    div.setAttribute('v-html', '<h1>hello</h1>')
  },
  methods: {
    showEle(e) {},
    ...mapMutations(['toggleSettingsModal']),
  },
  computed: {
    ...mapGetters(['getSideNavLinks']),
  },
}
</script>
<style>
/* @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;300;500&family=Island+Moments&family=Lobster&family=Neonderthaw&display=swap'); */
.logo {
  font-family: 'Lobster', Neonderthaw, IBM Plex Sans, sans-serif, cursive;
  font-weight: 500;
}
</style>
