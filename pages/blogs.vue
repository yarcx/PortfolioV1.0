<template>
  <div
    class="w-100% bg-[color:var(--darkThemeTextColor)] dark:bg-[color:var(--lightThemeTextColor)]"
  >
    <div
      class="max-w-[1440px] bg-[color:var(--darkThemeTextColor)] dark:bg-[color:var(--lightThemeTextColor)] flex overflow-hidden overscroll-y-none justify-center mx-auto h-screen items-stretch flex-shrink-0"
    >
      <SideNav />
      <div class="md:w-[55%] relative w-full overflow-hidden">
        <MidSectionHeader headerTitle="Blog" />
        This is theProject section
      </div>
      <RecentlyReadBlog />
    </div>
    <MobileNav />
    <Modal />
  </div>
</template>
<script>
import SideNav from '../components/SideNav.vue'
import RecentlyReadBlog from '../components/RecentlyReadBlogs.vue'
import Modal from '../components/Modal/Modal.vue'
import ArrowLeft from 'vue-material-design-icons/ArrowLeft.vue'
import { mapMutations, mapGetters } from 'vuex'
import { store } from '../store/index'
import MidSectionHeader from '../components/Header/MidSectionHeader.vue'
import MobileNav from '../components/MobileNav/MobileNav.vue'
export default {
  name: 'blogs',
  store: store,
  components: {
    SideNav,
    RecentlyReadBlog,
    Modal,
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
    theThemeLight() {
      return this.toggled ? 'ThemeLightDark' : 'WeatherNight'
    },
  },
  mounted() {
    this.changeMobileSideNav(false)
  },
  methods: {
    ...mapMutations(['changeMobileSideNav']),
    toggleLightMode() {
      this.$store.commit('toggleLightMode')
    },
  },
}
</script>
<style lang=""></style>
