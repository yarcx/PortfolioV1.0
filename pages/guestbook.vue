<template>
  <div
    class="w-100% bg-[color:var(--darkThemeTextColor)] dark:bg-[color:var(--lightThemeTextColor)]"
  >
    <div
      class="max-w-[1440px] bg-[color:var(--darkThemeTextColor)] dark:bg-[color:var(--lightThemeTextColor)] flex overflow-hidden overscroll-y-none justify-center mx-auto h-screen items-stretch flex-shrink-0"
    >
      <SideNav />
      <div class="md:w-[55%] relative w-full overflow-hidden">
        <MidSectionHeader headerTitle="GuestBook" />
        Gues book section
        <button @click="clickme" class="bg-red-800 h-9 w-19">click see</button>
      </div>

      <!-- <Tutorial /> -->
      <RecentlyReadBlog />
    </div>

    <MobileNav />
    <Modal />
  </div>
</template>
<script>
import SideNav from '../components/SideNav.vue'
import RecentlyReadBlog from '../components/RecentlyReadBlogs.vue'
import ThemeLightDark from 'vue-material-design-icons/ThemeLightDark.vue'
import Modal from '../components/Modal/Modal.vue'
import WeatherNight from 'vue-material-design-icons/WeatherNight.vue'
import ArrowLeft from 'vue-material-design-icons/ArrowLeft.vue'
import { mapMutations, mapGetters } from 'vuex'
import { store } from '../store/index'
import MidSectionHeader from '../components/Header/MidSectionHeader.vue'
import MobileNav from '../components/MobileNav/MobileNav.vue'
export default {
  name: 'guestbook',
  store: store,
  components: {
    SideNav,
    RecentlyReadBlog,
    ThemeLightDark,
    Modal,
    WeatherNight,
    ArrowLeft,
    MidSectionHeader,
    MobileNav,
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters([
      'count',
      'toggled',
      'getSettingsModal',
      // ...
    ]),
    capitalize: (text) => {
      return text
    },
    theThemeLight() {
      return this.toggled ? 'ThemeLightDark' : 'WeatherNight'
    },
  },
  mounted() {
    this.changeMobileSideNav(false)
  },
  methods: {
    clickme(e) {
      console.log(e)
    },
    ...mapMutations(['changeMobileSideNav']),
    toggleLightMode() {
      this.$store.commit('toggleLightMode')
    },
  },
}
</script>
<style lang=""></style>
