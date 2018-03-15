<template>
  <div class="main">
    <sidebar></sidebar>
    <div v-if="about">
      <about></about>
    </div>
    <div v-if="portfolio">
      <portfolio></portfolio>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar'
import About from './About'
import Portfolio from './Portfolio'
import Sidebar from './Sidebar'
import Profile from './Profile'
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Navbar,
    About,
    Portfolio,
    Sidebar,
    Profile
  }
}
</script>

<style scoped>
.main {
  text-align: center;
}
h1, h2 {
  font-weight: normal;
}
</style>
