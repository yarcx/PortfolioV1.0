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
        class="w-[75%] p-3 flex border rounded-xl border-[color:var(--lightThemBorderColor)] dark:border-[color:var(--darkThemeBorderColor)] mt-8 h-auto mx-auto"
      >
        <div class="flex items-baseline justify-end w-[16%] h-full">
          <img
            class="w-12 h-12 mt-2 rounded-full"
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
            all this portfolios' Tab on this browser. Which can include photos,
            videos, links, text.
          </div>
        </div>
      </div>

      <!-- FIXME: section below for the font adjustment -->
      <div class="w-[85%] my-2 mx-auto">
        <h3
          class="text-[0.9rem] inline-block font-bold text-[color:var(--smallLinksLightColor)] dark:text-[color:var(--smallLinksDarkColor)]"
        >
          Font Size
        </h3>
        <div
          class="flex items-center justify-between w-full h-12 p-2 bg-gray-500 rounded-xl"
        >
          <span>Aa</span>
          <div>helo</div>
          <span>Aa</span>
        </div>
      </div>

      <!-- FIXME: section to customize the Color -->
      <div class="w-[85%] mt-2 mx-auto">
        <h3
          class="text-[0.9rem] inline-block font-bold text-[color:var(--smallLinksLightColor)] dark:text-[color:var(--smallLinksDarkColor)]"
        >
          Color
        </h3>
        <div
          class="flex items-center justify-around w-full h-12 p-2 bg-gray-500 rounded-xl"
        >
          <div class="w-8 h-8 bg-pink-500 rounded-full"></div>
          <div class="w-8 h-8 bg-yellow-500 rounded-full"></div>
          <div class="w-8 h-8 bg-green-500 rounded-full"></div>
        </div>
      </div>
      <!-- FIXME: section to customize the BackgroundColor -->
      <div class="w-[85%] mt-2 mx-auto">
        <form>
          <h3
            class="text-[0.9rem] inline-block font-bold text-[color:var(--smallLinksLightColor)] dark:text-[color:var(--smallLinksDarkColor)]"
          >
            Background
          </h3>
          <div
            class="flex items-center justify-around w-full h-12 p-2 bg-gray-500 rounded-xl"
          >
            <button
              class="w-[8rem] flex justify-around items-center text-black h-8 p-2 bg-white rounded-md"
            >
              <input type="radio" /> <span>Default</span>
            </button>
            <button
              class="w-[8rem] justify-around items-center flex p-2 h-8 bg-blue-200 rounded-md"
            >
              <input type="radio" /> <span>Dim</span>
            </button>
            <button
              class="w-[8rem] flex text-white justify-around items-center p-2 h-8 bg-[color:var(--lightThemeTextColor)] rounded-md"
            >
              <input type="checkbox" /> <span>Lights Out</span>
            </button>
          </div>
          <div class="flex items-center justify-center mt-6">
            <button class="px-3 py-1 text-white bg-blue-600 rounded-full w-min">
              Done
            </button>
          </div>
        </form>
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
