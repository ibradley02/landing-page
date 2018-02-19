<template>
    <div class="main row">
        <div class="col-sm-12">
            <div class="panel panel-default header">
                <div class="panel-body">
                    <img src="https://avatars3.githubusercontent.com/u/32853737?s=400&u=7ba97f8aa0fae545fe5a56e5aecc37aaa604548a&v=4" class="image-style">
                    <h1>Ian Bradley</h1>
                    <h4 class="subheading">Full Stack Web Developer</h4>
                    <a>ianbradleydebate@gmail.com</a>
                </div>
            </div>
        </div>      
    </div>
</template>
<script>
export default {
  name: "Profile",
  data() {
    return {};
  },
};
</script>

<style scoped>
.main{
    margin-top: 20vh;
}
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