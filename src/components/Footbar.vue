<template>
    <div class="row navbar-center">
        <nav class="navbar navbar-default myFooter">
            <div class="col-sm-12">
                <a href="http://github.com/ibradley02" target=_blank>
                    <i class="fa fa-github fa-2x"></i>
                </a>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
  name: "footbar",
  data() {
    return {};
  },
  methods: {},
  components: {},
  computed: {}
};
</script>
<style scoped>
a {
  color: #000;
  margin: 0 auto !important;
}
nav {
  border-radius: 0%;
}
.router-link-active {
  color: #000;
}

.router-link-exact-active {
  color: #000;
}

.myFooter {
  background-color: #9c27b0;
  display: flex;
  position: absolute;
  float: none;
  color: #000 !important;
  margin: 1em auto 0 auto;
  width: 100%;
  border: 0px;
}
.navbar-nav > li > a,
.navbar-brand {
  padding-top: 5px !important;
  padding-bottom: 0 !important;
  height: 30px;
}
.navbar {
  min-height: 30px !important;
}
</style>