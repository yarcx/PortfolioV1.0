<template>
  <nav
    v-if="getMobileSideNav"
    @click.stop="changeMobileSideNav(false)"
    class="h-[100vh] md:hidden flex justify-start items-center z-20 bg-[color:var(--modalLightBgColor)] transition dark:bg-[color:var(--modalDarkBgColor)] fixed inset-0 cursor-pointer left-0 w-[100vw]"
  >
    <Transition>
      <div
        @click.stop="changeMobileSideNav(true)"
        class="w-[65%] md:hidden h-[100vh] p-3 overflow-y-auto bg-[color:var(--darkThemeTextColor)] dark:bg-[color:var(--lightThemeTextColor)]"
      >
        <header>
          <div class="flex justify-between items-center">
            <h1>My Details</h1>
            <Close @click.stop="changeMobileSideNav(false)" />
          </div>
        </header>
        This is the mobile nav of this page
      </div>
    </Transition>
  </nav>
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
    ...mapGetters(['getMobileSideNav']),
  },
  methods: {
    ...mapMutations(['changeMobileSideNav']),
  },
}
</script>
<style>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
