<template>
  <div id="app" class="container-fluid">
    <sidebar></sidebar>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Navbar from './components/Navbar'
  import Sidebar from './components/Sidebar'
  export default {
    name: 'app',
    components: {
      Navbar,
      Sidebar
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
    margin-top: 10vh;
  }
</style>