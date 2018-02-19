<template>
  <div class="main">
    <!-- <div>
        <div id="about">
          <about></about>
        </div>
        <div id="portfolio">
          <portfolio></portfolio>
        </div>
    </div> -->
  </div>
</template>

<script>
import Navbar from './Navbar'
import About from './About'
import Portfolio from './Portfolio'
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
    Portfolio
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
