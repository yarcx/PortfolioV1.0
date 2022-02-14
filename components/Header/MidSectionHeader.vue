<template>
  <header
    class="w-full border-[color:var(--lightThemBorderColor)] border-b md:border-0 border-solid dark:border-[color:var(--darkThemeBorderColor)] flex bg-[color:var(--darkThemeTextColor)] dark:bg-[color:var(--lightThemeTextColor)] md:h-12"
  >
    <nav class="flex-1 p-2">
      <div class="flex items-center justify-between px-2">
        <div
          class="flex items-center justify-start text-[color:var(--lightThemeTextColor)] dark:text-[color:var(--darkThemeTextColor)]"
        >
          <div
            @click="openMobileNav"
            class="mr-5 profileImg md:hidden transition rounded-full hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            <img
              src="../../static/mobileNavImage.jpg"
              alt="mobile Nav opener icon"
              class="h-7 w-7 rounded-full object-contain"
            />
          </div>
          <NuxtLink to="/" v-if="headerTitle != 'Home'" class="pr-3"
            ><ArrowLeft
          /></NuxtLink>
          <NuxtLink :to="this.$route.name">
            <h1 class="text-[20px]">
              {{ headerTitle }}
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
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import ThemeLightDark from 'vue-material-design-icons/ThemeLightDark.vue'
import WeatherNight from 'vue-material-design-icons/WeatherNight.vue'
import ArrowLeft from 'vue-material-design-icons/ArrowLeft.vue'
export default {
  name: 'MidSectionHeader',
  components: {
    ThemeLightDark,
    WeatherNight,
    ArrowLeft,
  },
  props: ['headerTitle'],
  methods: {
    ...mapMutations(['changeMobileSideNav']),
    openMobileNav(e) {
      this.changeMobileSideNav(true)
    },
    toggleLightMode() {
      this.$store.commit('toggleLightMode')
    },
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters([
      'count',
      'toggled',
      // ...
    ]),
    theThemeLight() {
      return this.toggled ? 'ThemeLightDark' : 'WeatherNight'
    },
  },
  mounted() {
    console.log(this.$props)
  },
}
</script>
<style></style>
