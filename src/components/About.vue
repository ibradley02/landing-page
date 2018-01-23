<template>
    <div class="main row">
        <div class="col-sm-12">
            <div class="panel panel-default header">
                <div class="panel-body">
                    <img src="https://avatars3.githubusercontent.com/u/32853737?s=400&u=7ba97f8aa0fae545fe5a56e5aecc37aaa604548a&v=4" class="image-style">
                    <h1>Ian Bradley</h1>
                    <h4 class="subheading">Software Developer</h4>
                    <a>ianbradleydebate@gmail.com</a>
                </div>
            </div>
        </div>
        <div class="col-sm-12 panel-style">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3>About</h3>
                </div>
                <div class="panel-body">
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat voluptate asperiores, eius quasi illo debitis tenetur in, fugiat laborum saepe quaerat alias odio laudantium hic!</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde aliquid quis assumenda non. Debitis, reprehenderit. Veniam beatae id ratione odio, autem facilis culpa velit nostrum cumque soluta illum consectetur aut officiis a est repellat architecto provident quam cupiditate ipsum laboriosam quae consequatur voluptates. Atque ex explicabo nihil, sapiente possimus soluta?</p>
                    </div>
                    <div>
                        <h3>Skills</h3>
                    </div>
                    <div>
                        <i class="devicon-git-plain-wordmark"></i>
                        <i class="devicon-mocha-plain"></i>
                        <i class="devicon-nodejs-plain-wordmark"></i>
                        <i class="devicon-heroku-original-wordmark colored"></i>
                        <i class="devicon-html5-plain colored"></i>
                        <i class="devicon-javascript-plain colored"></i>
                        <i class="devicon-vuejs-plain-wordmark"></i>
                        <i class="devicon-mongodb-plain-wordmark"></i>
                        <i class="devicon-csharp-plain-wordmark"></i>
                        <i class="devicon-bootstrap-plain-wordmark"></i>
                    </div>
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
.heading {
    color: black;
}
.subheading {
    color: #757575;
}
.panel-heading{
    background-color: #BDBDBD !important;
}
i {
  margin: 0 2rem 0 2rem;
  font-size: 4em;
}

</style>