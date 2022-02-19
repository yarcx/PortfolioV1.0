<!-- Please remove this file from your project -->
<template>
  <main class="md:w-[55%] relative w-full overflow-hidden">
    <!-- Mid section Header navigation goes below -->
    <MidSectionHeader headerTitle="Home" />
    <!-- The header banner starts here -->
    <div class="flex">
      <div
        class="relative flex flex-1 flex-col justify-start bg-[color:var(--darkThemeTextColor)] dark:bg-[color:var(--lightThemeTextColor)] sm:pt-0"
      >
        <div class="relative bg-black">
          <img
            class="object-fill w-full md:w-[92%] mx-auto h-40 md:h-48 bg-center bg-no-repeat bg-contain"
            src="../static/profileBanner.jpg"
            alt="profile banner"
          />
        </div>
        <!-- The Profile picture section -->
        <div
          class="flex justify-between items-center w-full px-2 text-[color:var(--lightThemeTextColor)] dark:text-[color:var(--darkThemeTextColor)]"
        >
          <div class="z-10">
            <div
              class="-mt-12 md:-mt-16 z-10 border-4 border-[color:var(--darkThemeTextColor)] dark:border-[color:var(--lightThemeTextColor)] rounded-full w-[6rem] h-[6rem] md:w-36 md:h-36"
            >
              <img
                class="object-cover z-15 w-[100%] hover:opacity-[0.98] cursor-pointer h-[100%] md:w-full md:h-full bg-center bg-no-repeat bg-contain rounded-full"
                src="../static/bigProfilePicture.jpg"
                alt="profile Picture"
              />
            </div>
            <div class="pl-2 mt-3">
              <div>
                <span class="font-bold text-[20px]">Good Vibes Only</span>
              </div>
              <div>
                <span class="text-sm font-normal text-slate-500"
                  >@Hassan_Yarcx</span
                >
              </div>
            </div>
          </div>

          <NuxtLink class="-mt-10 md:mt-0" to=/contactMe>
          <button
            class="hover:bg-gray-100 dark:hover:bg-gray-900 transition h-8 border-[color:var(--lightThemBorderColor)] border border-solid dark:border-[color:var(--darkThemeBorderColor)] rounded-2xl px-4"
          >
            Contact Me
          </button>
          </NuxtLink>
          <!-- The location and dates section -->
        </div>

        <!-- The marquees slider will be implemented later on.. moving on right now -->
        <div
          class="flex justify-between items-center w-[100%] px-4 mt-2 overflow-x-hidden"
        >
          <div
            class="w-[100%] flex justify-start gap-1 md:gap-0 md:justify-between overflow-hidden flex-wrap md:flex-nowrap"
          >
            <a
              v-for="(contactDetails, i) in contactContent"
              :key="i + 1"
              :href="contactDetails.link"
              target="_blank"
              class="text-sm cursor-pointer text-[color:var(--smallLinksLightColor)] flex justify-between items-center dark:hover:text-[white] dark:text-[color:var(--smallLinksDarkColor)]"
            >
              <components :is="contactDetails.icon" class="pr-1"></components>
              {{ contactDetails.text }}
            </a>
          </div>

          <!-- <div class="w-[50%] justify-between flex">
            <span
              v-for="(contactDetails, i) in contactContent"
              :key="contactDetails[i]"
              class="text-sm cursor-pointer w-max text-[color:var(--smallLinksLightColor)] flex justify-between items-center dark:text-[color:var(--smallLinksDarkColor)]"
            >
              <components :is="contactDetails.icon" class="pr-1"></components>
              {{ contactDetails.text }}
            </span>
          </div> -->
        </div>

        <div
          class="mt-2 overflow-y-auto xs:max-h-[290px]  border-t pt-2 pb-1 h-[full] border-b border-[color:var(--lightThemBorderColor)] dark:border-[color:var(--darkThemeBorderColor)]"
        >
          <div class="w-[96%] mx-auto flex justify-between items-start">
            <div
              class="flex flex-col justify-center items-end w-[14%] md:w-[10%]"
            >
              <PinOutline
                class="text-[8px] cursor-pointer dark:text-[color:var(--smallLinksDarkColor)] text-[color:var(--smallLinksLightColor)]"
              />
              <img
                class="w-12 h-12 mt-2 rounded-full"
                src="../static/smallProfilePics.jpg"
                alt="about me photo"
              />
            </div>
            <div class="md:w-[90%] w-[86%] pl-2">
              <h3
                class="text-[1rem] font-[semibold] dark:text-[color:var(--smallLinksDarkColor)] text-[color:var(--smallLinksLightColor)]"
              >
              About Me
              </h3>
              <!-- Make the hover color dynamic from the hover color on the data -->
              <p
                class="font-light text-[14px] md:text-[16px] text-[color:var(--lightThemeTextColor)] dark:text-[color:var(--darkThemeTextColor)]"
              >
                Hello there! I'm <span   class="px-2  py-1 font-medium bg-gray-300 rounded-md cursor-pointer dark:bg-gray-900">Hassan Yaqub</span>.  A 
                <span class="px-2 hover:bg-blue-700 py-1 font-medium bg-gray-300 rounded-md cursor-pointer dark:bg-gray-900">Software Engineer</span>  &amp;  <span class="px-2 hover:bg-blue-700 py-1 font-medium bg-gray-300 rounded-md cursor-pointer dark:bg-gray-900">Technical Writer</span> 
                Based In Abuja | Minna, Nigeria. I'm experienced in building pixel-perfect frontend application and server side applications.
                I'm passionate about sharing my experience in my career,
                and also some technologies/concept that i believe can help someone out there.
                When i'm not working or learning something new, then i must be Working out in the  
                <span class="px-2 hover:bg-blue-700 py-1 font-medium bg-gray-300 rounded-md cursor-pointer dark:bg-gray-900">Gym</span>, or playing Video
                 <span class="px-2 hover:bg-blue-700 py-1 font-medium bg-gray-300 rounded-md cursor-pointer dark:bg-gray-900">Games</span>, or 
                 <span class="px-2 hover:bg-blue-700 py-1 font-medium bg-gray-300 rounded-md cursor-pointer dark:bg-gray-900">Watching</span> 
                 Anime or any movie with a Superhero in it. &#128526;   
              </p>
            </div>
          </div>
        </div>
        <div
          class="h-auto min-h-[40px]  font-light text-sm hidden md:flex justify-end items-center px-4 text-[color:var(--lightThemeTextColor)] dark:text-[color:var(--darkThemeTextColor)]"
        >
          <NuxtLink to="/guestbook" class="cursor-pointer hover:underline"
            >Check out Guest Book</NuxtLink
          >
          <ArrowRightThin class="pl-2 text-sm" />
        </div>
      </div>
    </div>
    <!-- The footer section that shows on mobile screen -->
    <footer
      class="absolute bg-[color:var(--darkThemeTextColor)] dark:bg-[color:var(--lightThemeTextColor)]  h-16 px-6 w-full flex justify-between items-center md:hidden border-t border-[color:var(--lightThemBorderColor)] text-[color:var(--lightThemeTextColor)] dark:text-[color:var(--darkThemeTextColor)] dark:border-[color:var(--darkThemeBorderColor)] bottom-0"
    >
      <div>
        <Home />
      </div>
      <div>
        <AccountOutline />
      </div>
      <div><LanConnect /></div>
      <div><EmailOutline /></div>
    </footer>
    <MobileNav />
  </main>
</template>

<script>
import Home from 'vue-material-design-icons/HomeLightBulbOutline.vue'
import ThemeLightDark from 'vue-material-design-icons/ThemeLightDark.vue'
import WeatherNight from 'vue-material-design-icons/WeatherNight.vue'
import MapMarkerRadiusOutline from 'vue-material-design-icons/MapMarkerRadiusOutline.vue'
import CalendarMonth from 'vue-material-design-icons/CalendarMonth.vue'
import Instagram from 'vue-material-design-icons/Instagram.vue'
import Github from 'vue-material-design-icons/Github.vue'
import Linkedin from 'vue-material-design-icons/Linkedin.vue'
import PinOutline from 'vue-material-design-icons/PinOutline.vue'
import PanRight from 'vue-material-design-icons/PanRight.vue'
import ArrowRightThin from 'vue-material-design-icons/ArrowRight.vue'
import Magnify from 'vue-material-design-icons/Magnify.vue'
import Twitter from 'vue-material-design-icons/Twitter.vue'
import Phone from 'vue-material-design-icons/Phone.vue'
import AccountOutline from 'vue-material-design-icons/AccountOutline.vue'
import LanConnect from 'vue-material-design-icons/LanConnect.vue'
import EmailOutline from 'vue-material-design-icons/EmailOutline.vue'
import MobileNav from './MobileNav/MobileNav.vue'
import MidSectionHeader from './Header/MidSectionHeader.vue'

import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'NuxtTutorial',
  data() {
    return {
      hoverColor: 'red',
      ligthOrDarkTheme: null,
      date: new Date(),
      contactContent: [
        { text: 'Abuja Nigeria', icon: MapMarkerRadiusOutline, link: '#' },
        {
          text: 'Instagram',
          icon: Instagram,
          link: 'https://www.instagram.com/yarcxx',
        },
        { text: 'Github', icon: Github, link: 'https://github.com/yarcx' },
        {
          text: 'LinkedIn',
          icon: Linkedin,
          link: 'https://www.linkedin.com/in/yakubu-hassan/',
        },
        {
          text: 'Twitter',
          icon: Twitter,
          link: 'https://twitter.com/Hassan_Yarcx',
        },
        { text: '09033872114', icon: Phone, link: '#' },
      ],
    }
  },
  
  methods: {
    ...mapMutations(['changeMobileSideNav']),
    checkThis(e){
      console.log('this got cluck')
      e.target.classList.contains('profileImg') && this.openMobileNav(e)
    },
    openMobileNav(e){
      this.changeMobileSideNav(true)
    },
    toggleLightMode() {
      this.$store.commit('toggleLightMode')
    },
    filteredBlogPost() {
      if (this.searchBlogTitle) {
        console.log(this.searchBlogTitle.toLowerCase(), 'hello world')
        return this.blogs.filter(
          (blog) =>
            blog.title
              .toLowerCase()
              .includes(this.searchBlogTitle.toLowerCase()) ||
            blog.author
              .toLowerCase()
              .includes(this.searchBlogTitle.toLowerCase())
        )
      }
      return this.blogs
    },
  },
  components: {MidSectionHeader,
    EmailOutline,
    LanConnect,
    AccountOutline,
    Home,
    ThemeLightDark,
    WeatherNight,
    MapMarkerRadiusOutline,
    CalendarMonth,
    Instagram,
    Github,
    Linkedin,
    PinOutline,
    PanRight,
    Magnify,
    ArrowRightThin,
    Twitter,
    Phone,
    MobileNav
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
    let searchInputContainer = document.querySelector(
      '[data-searchInputContainer]'
    )
    searchInputContainer.addEventListener('click', function (e) {
      document.querySelector('[data-searchInput]').focus()
    })
  },
}
</script>

<style>
/* .switch.on {
  right: 0 !important;
} */
</style>
