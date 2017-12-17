<template>
  <div class="hello">
    <navbar></navbar>
    <div class="main">
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
.hello {
  text-align: center;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
