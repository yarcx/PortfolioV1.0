<template>
  <div
    class="w-100% bg-[color:var(--darkThemeTextColor)] dark:bg-[color:var(--lightThemeTextColor)]"
  >
    <div
      class="max-w-[1440px] bg-[color:var(--darkThemeTextColor)] dark:bg-[color:var(--lightThemeTextColor)] flex overflow-hidden overscroll-y-none justify-center mx-auto h-screen items-stretch flex-shrink-0"
    >
      <SideNav />
      <main class="md:w-[55%] relative w-full overflow-hidden">
        <MidSectionHeader headerTitle="Resume" />
        <div class="overflow-y">
          <header
            class="px-4 dark:text-[color:var(--darkThemeTextColor)] text-[color:var(--lightThemeTextColor)]"
          >
            <h1 class="text-[3rem]">Resumé.</h1>

            <p>
              Reach out to me via my contact page . view or download the resume
            </p>
          </header>

          <section class="px-4">
            <pdf src="http://localhost:3000/HassanYakub.pdf" />
          </section>
        </div>
      </main>
      <RecentlyReadBlog />
    </div>
    <MobileNav />
    <Modal />
  </div>
</template>
<script>
import pdf from 'vue-pdf'
import SideNav from '../components/SideNav.vue'
import RecentlyReadBlog from '../components/RecentlyReadBlogs.vue'
import Modal from '../components/Modal/Modal.vue'
import ArrowLeft from 'vue-material-design-icons/ArrowLeft.vue'
import { mapMutations, mapGetters } from 'vuex'
import { store } from '../store/index'
import MidSectionHeader from '../components/Header/MidSectionHeader.vue'
import MobileNav from '../components/MobileNav/MobileNav.vue'
// const now = require('../static/js/dummy.pdf')
// var loadingTask = pdf.createLoadingTask('../static/HassanYakub.pdf')
export default {
  name: 'resume',
  data: () => ({
    src: null,
  }),
  store: store,
  components: {
    SideNav,
    RecentlyReadBlog,
    Modal,
    ArrowLeft,
    MidSectionHeader,
    MobileNav,
    pdf,
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
    // console.log(null, now, 'hello world')
    this.$router.push('../pages/resume')
    console.log(this.$router, 'jhkdsjkjl')
  },
  methods: {
    ...mapMutations(['changeMobileSideNav']),
    toggleLightMode() {
      this.$store.commit('toggleLightMode')
    },
  },
}
</script>
<style></style>
