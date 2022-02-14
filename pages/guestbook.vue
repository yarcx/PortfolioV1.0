<template>
  <div
    class="w-100% bg-[color:var(--darkThemeTextColor)] dark:bg-[color:var(--lightThemeTextColor)]"
  >
    <div
      class="max-w-[1440px] bg-[color:var(--darkThemeTextColor)] dark:bg-[color:var(--lightThemeTextColor)] flex overflow-hidden overscroll-y-none justify-center mx-auto h-screen items-stretch flex-shrink-0"
    >
      <SideNav />
      <div class="md:w-[55%] relative w-full overflow-hidden">
        <header
          class="w-full flex bg-[color:var(--darkThemeTextColor)] dark:bg-[color:var(--lightThemeTextColor)] h-12"
        >
          <nav class="flex-1 p-2">
            <div class="flex items-center justify-between px-2">
              <div class="flex items-center justify-around">
                <NuxtLink to="/" class="pr-3"><ArrowLeft /></NuxtLink>
                <NuxtLink to="/">
                  <h1
                    class="text-[color:var(--lightThemeTextColor)] dark:text-[color:var(--darkThemeTextColor)] text-[20px]"
                  >
                    Guestbook
                  </h1></NuxtLink
                >
              </div>

              <div
                class="p-1 transition rounded-full w-min h-min hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                <component
                  @click="
                    {
                      toggleLightMode()
                    }
                  "
                  class="text-[color:var(--lightThemeTextColor)] dark:text-[color:var(--darkThemeTextColor)] cursor-pointer"
                  :is="theThemeLight"
                ></component>
              </div>
            </div>
          </nav>
        </header>
        Gues book section
        <button @click="clickme" class="bg-red-800 h-9 w-19">click see</button>
      </div>

      <!-- <Tutorial /> -->
      <RecentlyReadBlog />
    </div>

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
    console.log(this.$route, this.$store, this.toggled, 'componenet is mounted')
    this.changeMobileSideNav()
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
