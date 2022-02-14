<template>
  <Transition name="slide-fade">
    <nav
      v-if="getMobileSideNav"
      @click.stop="changeMobileSideNav(false)"
      class="h-[100vh] text-[color:var(--lightThemeTextColor)] dark:text-[color:var(--darkThemeTextColor)] md:hidden flex justify-start items-center z-20 bg-[color:var(--modalLightBgColor)] dark:bg-[color:var(--modalDarkBgColor)] inset-0 fixed cursor-pointer w-[100vw]"
    >
      <div
        @click.stop="
          () => {
            changeMobileSideNav(true)
          }
        "
        class="w-[65%] md:hidden h-[100vh] p-3 overflow-y-auto bg-[color:var(--darkThemeTextColor)] dark:bg-[color:var(--lightThemeTextColor)]"
      >
        <header class="mb-5">
          <div class="flex justify-between items-center">
            <h1>My Details</h1>
            <Close @click.stop="changeMobileSideNav(false)" />
          </div>
        </header>

        <div>
          <div>
            <img
              src="../../static/smallProfilePics.jpg"
              alt="small profile pics"
              class="w-12 h-12 rounded-full"
            />
          </div>
          <div>
            <div>
              <span class="font-bold text-[15px]">Good Vibes Only</span>
            </div>
            <span class="text-sm font-light">@Hassan_Yarcx</span>
          </div>
        </div>
        <div class="py-2">
          <ul class="">
            <li
              v-for="(sideNav, index) in getSideNavLinks"
              :key="index"
              class="flex text-[color:var(--lightThemeTextColor)] dark:text-[color:var(--darkThemeTextColor)] items-center justify-start transition cursor-pointer group"
              :class="[
                $route.name === sideNav.name ? 'font-bold' : 'font-light ',
              ]"
            >
              <NuxtLink
                :to="sideNav.link"
                @click.stop="clickedALink"
                class="flex items-center justify-start py-3 group-hover:underline group-hover:text-underline w-max font"
              >
                <component class="" :is="sideNav.icon"></component>
                <span class="mx-3 text-[17px]">{{ sideNav.text }}</span>
              </NuxtLink>
            </li>
            <button
              @click="openSettingsModal(false)"
              class="w-[90%] mt-2 p-4 bg-[color:var(--BlueThemeColor)] rounded-full text-[color:var(--darkThemeTextColor)]"
            >
              Display Settings
            </button>
          </ul>
        </div>
      </div>
    </nav>
  </Transition>
</template>
<script>
import { store } from '../../store/index'
import { mapGetters, mapMutations } from 'vuex'
import Close from 'vue-material-design-icons/Close.vue'
export default {
  name: 'MobileNav',
  store,
  components: { Close },
  computed: {
    ...mapGetters(['getMobileSideNav', 'getSideNavLinks']),
  },
  methods: {
    ...mapMutations(['changeMobileSideNav', 'toggleSettingsModal']),
    openSettingsModal(stats) {
      this.toggleSettingsModal()
      this.changeMobileSideNav(stats)
    },
    clickedALink(e) {
      //e.preventDefault()
      e.stopPropagation()
      console.log(e, 'the link was clicjed')
      //changeMobileSideNav(false)
    },
  },
}
</script>
<style>
/* we will explain what these classes do next! */
.slide-fade-enter-active {
  transition: all 0.4s ease-in-out;
  transform: translateX(0vw);
}

.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-100%);
  opacity: 0;
  /* left: -10vw; */
}
</style>
