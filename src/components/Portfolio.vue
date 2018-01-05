<template>
    <div class="row">
        <navbar></navbar>
        <div class="main row">
            <header>
                <h1>Portfolio</h1>
            </header>
        <div class="col-sm-3">
            <a href="http://kanban-track-it.herokuapp.com/#/" class="btn btn-default">
                <img src="https://i.imgur.com/JQs05hS.png" alt="A Kanban Website">
            </a>
        </div>
        <div class="col-sm-3">
            <a href="http://kanban-track-it.herokuapp.com/#/" class="btn btn-default">
                <img src="https://i.imgur.com/JQs05hS.png" alt="A Kanban Website">
            </a>
        </div>
        <div class="col-sm-3">
            <a href="http://kanban-track-it.herokuapp.com/#/" class="btn btn-default">
                <img src="https://i.imgur.com/JQs05hS.png" alt="A Kanban Website">
            </a>
        </div>
        <div class="col-sm-3">
            <a href="http://kanban-track-it.herokuapp.com/#/" class="btn btn-default">
                <img src="https://i.imgur.com/JQs05hS.png" alt="A Kanban Website">
            </a>
        </div>
        </div>
    </div>
</template>

<script>
import Navbar from "./Navbar";

export default {
  name: "Portfolio",
  data() {
    return {};
  },
  components: {
    Navbar
  }
};
</script>

<style scoped>
img {
  height: 100%;
  width: 100%;
}
a{
    padding: 1rem 1rem 1rem 1rem;
    margin: 0 auto;
}
.col-sm-3{
    margin: 0 auto;
    padding: 1rem 1rem 1rem 1rem;
}
</style>