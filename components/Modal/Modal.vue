<template>
  <div
    v-if="this.getSettingsModal"
    @click.stop="toggleSettingsModal()"
    class="h-[100vh] flex justify-center items-center z-20 bg-[color:var(--modalLightBgColor)] transition dark:bg-[color:var(--modalDarkBgColor)] fixed inset-0 cursor-pointer left-0 w-[100vw]"
  >
    <div
      @click="toggleSettingsModal(true)"
      class="h-[90vh] text-[color:var(--lightThemeTextColor)] mx-auto dark:text-[color:var(--darkThemeTextColor)] p-4 w-[96%] md:w-[45%] overflow-y-auto bg-[color:var(--darkThemeTextColor)] dark:bg-[color:var(--lightThemeTextColor)] rounded-xl"
    >
      <h2 class="mt-4 text-xl text-center">Customize your view</h2>

      <p
        class="w-[95%] md:w-[90%] mx-auto text-center mt-3 text-[color:var(--smallLinksLightColor)] font-light text-md dark:text-[color:var(--smallLinksDarkColor)]"
      >
        Manage your font size, color, and background. These settings affect all
        this portfolios' Tab on this browser.
      </p>

      <div
        class="w-[85%] md:w-[75%] p-3 flex border rounded-xl border-[color:var(--lightThemBorderColor)] dark:border-[color:var(--darkThemeBorderColor)] mt-4 h-auto mx-auto"
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
          class="flex items-baseline justify-between w-full h-12 p-3 bg-[color:var(--modalSettingsContentLight)] dark:bg-[color:var(--modalSettingsContentDark)] rounded-xl"
        >
          <span class="text-xs">Aa</span>
          <div
            style="
               {
                background: 'red';
              }
            "
            class="w-[90%] h-2 flex relative bg-white lineLeft"
          ></div>
          <div>helo</div>
          <div class="w-full h-2 bg-white"></div>
          <span class="text-md">Aa</span>
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
          class="flex items-center justify-around w-full h-12 p-3 bg-[color:var(--modalSettingsContentLight)] dark:bg-[color:var(--modalSettingsContentDark)] rounded-xl"
        >
          <div class="bg-pink-500 rounded-full w-9 h-9"></div>
          <div class="bg-yellow-500 rounded-full w-9 h-9"></div>
          <div class="bg-green-500 rounded-full w-9 h-9"></div>
        </div>
      </div>
      <!-- FIXME: section to customize the BackgroundColor -->
      <div class="w-[85%] mt-2 mx-auto">
        <h3
          class="text-[0.9rem] inline-block font-bold text-[color:var(--smallLinksLightColor)] dark:text-[color:var(--smallLinksDarkColor)]"
        >
          Background
        </h3>
        <div
          class="flex items-center flex-wrap justify-around w-full p-3 bg-[color:var(--modalSettingsContentLight)] dark:bg-[color:var(--modalSettingsContentDark)] rounded-xl"
        >
          <div
            @click.stop="
              {
                changeLightState('light')
              }
            "
            class="w-[100%] md:w-[8rem] my-1 md:my-0 flex justify-around items-center text-black p-3 bg-white rounded-md"
          >
            <div
              class="w-[20%] active:ring-1 h-full flex justify-center items-center"
            >
              <input type="radio" :checked="this.getLightState === 'light'" />
            </div>
            <div class="w-[80%] h-full flex justify-center items-center">
              <span>Default</span>
            </div>
          </div>
          <div
            @click.stop="
              {
                changeLightState('dark')
              }
            "
            class="w-[100%] md:w-[8rem] my-1 md:my-0 flex justify-around items-center text-white p-3 bg-[color:var(--lightThemeTextColor)] rounded-md"
          >
            <div
              class="w-[20%] active:ring-1 h-full flex justify-center items-center"
            >
              <input type="radio" :checked="this.getLightState === 'dark'" />
            </div>
            <div class="w-[80%] h-full flex justify-center items-center">
              <span>Light Out</span>
            </div>
          </div>

          <!-- <div
            @click.stop="
              {
                changeLightState('dark')
              }
            "
            class="w-[100%] md:w-[8rem] my-1 md:my-0 flex text-white justify-around items-center p-3 bg-[color:var(--lightThemeTextColor)] rounded-md"
          >
            <div class="w-[20%] h-full  active:ring-1  flex justify-center items-center">
              <input type="radio" :checked="this.getLightState === 'dark'" />
            </div>
            <div class="w-[80%] h-full flex justify-center items-center">
              <span>Lights Out</span>
            </div>
          </div> -->
        </div>

        <div class="flex items-center justify-center mt-6">
          <button
            @click.stop="
              () => {
                changeMobileSideNav(false)
                toggleSettingsModal(false)
              }
            "
            class="px-3 py-1 text-white bg-[color:var(--BlueThemeColor)] hover:opacity-90 transition-colors rounded-full w-min"
          >
            Done
          </button>
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
  mounted() {
    console.log(this.getLightState == 'dark', 'check you see')
  },
  computed: {
    ...mapGetters(['getSettingsModal', 'getLightState']),
  },
  methods: {
    ...mapMutations([
      'toggleSettingsModal',
      'toggleLightMode',
      'changeMobileSideNav',
    ]),
    changeLightState(state) {
      this.toggleLightMode(state)
      console.log(this.getLightState)
    },
  },
}
</script>

<style>
.lineLeft::before {
  content: ' ';
  font-size: 1rem;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
}
</style>
