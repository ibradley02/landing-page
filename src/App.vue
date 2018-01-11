<template>
  <div id="app" class="container-fluid background">
    <sidebar></sidebar>
    <div class="main">
      <router-view></router-view>
    </div>
    <footbar></footbar>
  </div>
</template>

<script>
  import Navbar from './components/Navbar'
  import Sidebar from './components/Sidebar'
  import Footbar from './components/Footbar'
  export default {
    name: 'app',
    components: {
      Navbar,
      Sidebar,
      Footbar
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

  .background {
    background-image: url("https://www.slalom.com/sites/default/files/Slalom-Markets-Boise_1200x600.jpg");
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    margin: 0px 0px 0px 0px;
    max-height: 45vh;
  }
</style>