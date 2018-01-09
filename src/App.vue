<template>
  <div id="app" class="container-fluid">
    <navbar></navbar>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Navbar from './components/Navbar'
  export default {
    name: 'app',
    components: {
      Navbar
    }
  }
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .main {
    margin-top: 5vh;
  }
</style>