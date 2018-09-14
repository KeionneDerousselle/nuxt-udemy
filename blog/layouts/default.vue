<template>
  <div>
    <Header @sidenavToggle="displaySideNav = !displaySideNav"/>
    <SideNav
    :show="displaySideNav"
    @close="displaySideNav = false" />
    <nuxt/>
  </div>
</template>

<script>
import Header from '@/components/Navigation/Header'
import SideNav from '@/components/Navigation/SideNav'

export default {
  middleware: 'log',
  components: {
    Header,
    SideNav
  },

  data() {
    return {
      displaySideNav: false
    }
  }
}
</script>


<style>
*, *:before, *:after
{
  box-sizing: border-box;
  margin: 0;
}

html
{
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
