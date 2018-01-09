<template>
  <div class="main">
    <div>
        <header>
            <h1>Home</h1>
        </header>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar'
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Navbar
  }
}
</script>

<style scoped>
.main {
  text-align: center;
  margin-top: 2vh !important;
}
h1, h2 {
  font-weight: normal;
}
</style>
