<template>
    <div class="main row">
        <div class="col-sm-12">
            <div class="panel panel-default header">
                <div class="panel-body">
                    <img src="https://avatars3.githubusercontent.com/u/32853737?s=400&u=7ba97f8aa0fae545fe5a56e5aecc37aaa604548a&v=4" class="image-style">
                    <h1>Ian Bradley</h1>
                    <h4>Web Developer</h4>
                    <a>ianbradleydebate@gmail.com</a>
                </div>
            </div>
        </div>
        <div class="col-sm-12 panel-style">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3>About Me</h3>
                </div>
                <div class="panel-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ut aliquid nostrum laborum quisquam.
                        Asperiores exercitationem quaerat sequi hic ad reprehenderit sint minima, animi pariatur perspiciatis
                        commodi, eveniet atque ex dolores aspernatur amet esse blanditiis ipsum? Autem enim tenetur illum
                        magni corporis deserunt, veritatis explicabo. Et exercitationem a sequi quae!</p>
                </div>
            </div>
        </div>
        <div class="col-sm-12 panel-style">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3>Skills</h3>
                </div>
                <div class="panel-body">
                    <i class="devicon-git-plain-wordmark"></i>
                    <i class="devicon-heroku-original-wordmark colored"></i>
                    <i class="devicon-html5-plain colored"></i>
                    <i class="devicon-javascript-plain colored"></i>
                    <i class="devicon-nodejs-plain-wordmark"></i>
                    <i class="devicon-mocha-plain"></i>
                    <i class="devicon-vuejs-plain-wordmark"></i>
                    <i class="devicon-mongodb-plain-wordmark"></i>
                    <i class="devicon-csharp-plain-wordmark"></i>
                    <i class="devicon-bootstrap-plain-wordmark"></i>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import Navbar from "./Navbar";

export default {
  name: "About",
  data() {
    return {};
  },
  components: {
    Navbar
  }
};
</script>

<style scoped>
.panel-style {
  float: none;
  margin: 0 auto;
  margin-top: 5vh;
  display: inline-block;
  width: 60%;
}

.col2 {
  margin-left: 2vw;
}
.image-style {
  border-radius: 50%;
  height: 20rem;
  width: 20rem;
}
.header {
  width: 30rem;
  margin: 0 auto;
}
i{
    /* margin: 0 auto !important; */
    margin: 0 2rem 0 2rem;
    font-size: 4em;
}
</style>