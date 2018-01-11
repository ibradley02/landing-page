<template>
  <div id="app" class="container-fluid background-style">
    <sidebar></sidebar>
    <div class="main">
      <router-view></router-view>
    </div>
    <footbar></footbar>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footbar from "./components/Footbar";
export default {
  name: "app",
  components: {
    Navbar,
    Sidebar,
    Footbar
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main {
  margin-top: 10vh;
}

/* .background-style {
    background-image: url("https://www.slalom.com/sites/default/files/Slalom-Markets-Boise_1200x600.jpg"),
    url(https://mdn.mozillademos.org/files/11307/bubbles.png),
    linear-gradient(to bottom, rgba(30, 75, 115, 1), rgba(255, 255, 255, 0));
    background-repeat: no-repeat,
      no-repeat,
      no-repeat;
    background-position: top,
      bottom,
      bottom;
    /* background-position: center; */
/* background-size: cover; */
/* background-attachment: fixed; */
/* margin: 0px 0px 0px 0px;
    min-height: 45vh; */
/* position: relative; */
/* z-index: 9999; */

/* } */

.background-style {
  width: 100%;
  height: 400px;
  background-image: url(https://www.slalom.com/sites/default/files/Slalom-Markets-Boise_1200x600.jpg),
    linear-gradient(to right, #673AB7,
     #CDDC39);
  background-repeat: no-repeat, no-repeat;
  background-position: top, bottom;
}
</style>