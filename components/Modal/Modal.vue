<template>
  <div
    v-if="this.getSettingsModal"
    @click="toggleSettingsModal()"
    class="h-[100vh] grid place-items-center z-20 bg-[color:var(--modalLightBgColor)] transition dark:bg-[color:var(--modalDarkBgColor)] fixed inset-0 cursor-pointer left-0 w-[100vw]"
    :class="{}"
  >
    <div
      @click="toggleSettingsModal(true)"
      class="h-[88vh] text-[color:var(--lightThemeTextColor)] dark:text-[color:var(--darkThemeTextColor)] p-4 md:w-[45%] overscroll-y-auto bg-[color:var(--darkThemeTextColor)] dark:bg-[color:var(--lightThemeTextColor)] rounded-xl"
    >
      <h2 class="mt-4 text-xl text-center">Customize your view</h2>

      <p
        class="w-[90%] mx-auto text-center mt-3 text-[color:var(--smallLinksLightColor)] font-light text-md dark:text-[color:var(--smallLinksDarkColor)]"
      >
        Manage your font size, color, and background. These settings affect all
        this portfolios' Tab on this browser.
      </p>

      <div
        class="w-[70%] p-3 flex border rounded-xl border-[color:var(--lightThemBorderColor)] dark:border-[color:var(--darkThemeBorderColor)] mt-8 h-28 mx-auto"
      >
        <div class="flex items-baseline justify-end w-[16%] h-full">
          <img
            class="w-12 h-12 rounded-full"
            src="../../static/smallProfilePics.jpg"
            alt="about me photo"
          />
        </div>
        <div class="w-[84%] h-full ml-2">
          <div>
            <h3
              class="text-[0.7rem] inline-block font-bold dark:text-[color:var(--darkThemeTextColor)] text-[color:var(--lightThemeTextColor)]"
            >
              Hassan Yakub
            </h3>
            <span
              class="text-[color:var(--smallLinksLightColor)] font-light dark:text-[color:var(--smallLinksDarkColor)]"
            >
              @Yarcx</span
            >
          </div>
          <div class="text-[13px] font-light">
            Manage your font size, color, and background. These settings affect
            all this portfolios' Tab on this browser. lorem ipsum doler sit
            ammet
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'modal',
  data() {
    return {}
  },
  mounted() {},
  computed: {
    ...mapGetters(['getSettingsModal']),
  },
  methods: {
    ...mapMutations(['toggleSettingsModal']),
  },
}
</script>
<style lang=""></style>
