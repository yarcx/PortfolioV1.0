<template>
  <div
    class="w-100% bg-[color:var(--darkThemeTextColor)] dark:bg-[color:var(--lightThemeTextColor)]"
  >
    <div
      class="max-w-[1440px] bg-[color:var(--darkThemeTextColor)] dark:bg-[color:var(--lightThemeTextColor)] flex overflow-hidden overscroll-y-none justify-center mx-auto h-screen items-stretch flex-shrink-0"
    >
      <SideNav />
      <div>blogs</div>
      <div></div>
      <!-- <Tutorial />
      <RecentlyReadBlog /> -->
    </div>
  </div>
</template>
<script>
import SideNav from '../components/SideNav.vue'
export default {
  name: 'blogs',
  components: {
    SideNav,
  },
}
</script>
<style lang=""></style>
