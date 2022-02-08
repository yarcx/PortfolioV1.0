<template>
  <div>
    <div
      class="w-100% bg-[color:var(--darkThemeTextColor)] dark:bg-[color:var(--lightThemeTextColor)]"
    >
      <div
        class="max-w-[1440px] bg-[color:var(--darkThemeTextColor)] dark:bg-[color:var(--lightThemeTextColor)] flex overflow-hidden overscroll-y-none justify-center mx-auto h-screen items-stretch flex-shrink-0"
      >
        <SideNav />
        <Tutorial />
        <RecentlyReadBlog />
      </div>
    </div>
    <Modal />
  </div>
</template>

<script lang="ts">
import vue from 'vue'
import { store } from '../store/index'
import { mapGetters } from 'vuex'
import SideNav from '../components/SideNav.vue'
import RecentlyReadBlog from '../components/RecentlyReadBlogs.vue'
import Modal from '../components/Modal/Modal.vue'

export default vue.extend({
  name: 'IndexPage',
  store: store,
  components: {
    SideNav,
    RecentlyReadBlog,
    Modal,
  },
  data() {
    return {
      openModal: false,
    }
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters([
      'count',
      'toggled',
      'getSettingsModal',
      // ...
    ]),
  },

  methods: {},

  mounted() {
    this.$store.commit('checkLightState')
  },
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;300;500&family=Island+Moments&family=Lobster&family=Neonderthaw&display=swap');
:root {
  --darkThemeTextColor: #ffffff;
  --lightThemeTextColor: black;
  --BlueThemeColor: #1d9bf0;

  --lightThemBorderColor: rgb(207, 217, 222);
  --darkThemeBorderColor: rgb(47, 51, 54);
  --smallLinksDarkColor: #6e767d;
  --smallLinksLightColor: #536471;

  --blogLightThemeBg: rgb(247, 249, 249);

  --modalDarkBgColor: rgba(91, 112, 131, 0.4);
  --modalLightBgColor: rgba(0, 0, 0, 0.4);
}

* {
  font-family: 'IBM Plex Sans', sans-serif, Neonderthaw, Island Moments, cursive;
  box-sizing: border-box;
  transition: color 200ms ease-in, background-color 150ms ease-out;
}

.switch {
  right: 8%;
  /* transform: left 2000ms ease-in-out; */
}
</style>
