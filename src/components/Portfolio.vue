<template>
    <div class="main row">
        <header>
            <h1>Portfolio</h1>
        </header>
        <div class="col-sm-6 panel-style">
            <div @mouseover="info.show = true" @mouseleave="info.show = false" class="btn btn-default content">
                <img src="https://i.imgur.com/JQs05hS.png" alt="A Kanban Website">
                <div v-show="info.show" class="panel-style boxed-content">
                    <h3 class="col-sm-12">Trak-It</h3>
                    <p class="col-sm-12">A Kanban application made in vue with node.js</p>
                    <a class="col-sm-6 width-reduce" href="https://github.com/ibradley02/vue-kanban" target="_blank">
                        <i class="glyphicon glyphicon-cloud"> View Code</i>
                    </a>
                    <a class="col-sm-6 width-reduce" href="http://kanban-track-it.herokuapp.com/#/" target="_blank">
                        <i class="glyphicon glyphicon-cloud"> Visit Website</i>
                    </a>
                </div>
            </div>
        </div>
        <div class="col-sm-6 panel-style">
            <a href="http://kanban-track-it.herokuapp.com/#/" class="btn btn-default panel-style">
                <img src="https://i.imgur.com/5nZwfGh.png" alt="A Rss Feed Application">
            </a>
        </div>
        <div class="col-sm-6 panel-style">
            <a href="http://kanban-track-it.herokuapp.com/#/" class="btn btn-default panel-style">
                <img src="https://i.imgur.com/glJL5nT.png" alt="An application that searches the Itunes API">
            </a>
        </div>
        <div class="col-sm-6 panel-style">
            <a href="http://kanban-track-it.herokuapp.com/#/" class="btn btn-default panel-style">
                <img src="https://i.imgur.com/JQs05hS.png" alt="A Kanban Website">
            </a>
        </div>
    </div>
</template>

<script>
    import Navbar from "./Navbar";

    export default {
        name: "Portfolio",
        data() {
            return {
                info: {
                    show: true
                }
            };
        },
        components: {
            Navbar
        },
        methods: {
            toggleShowInfo() {
                this.info.show = !this.info.show;
            }
        }
    };
</script>

<style scoped>
    img {
        height: 100%;
        width: 100%;
    }

    .button-style {
        padding: 1rem 1rem 1rem 1rem;
        margin: 0 auto;
    }
    .panel-style {
        float: none;
        margin: 0 auto;
        margin-top: 5vh;
        display: inline-block;
        width: 60%;
    }

    .col-sm-3 {
        margin: 0 auto;
        padding: 1rem 1rem 1rem 1rem;
    }

    .content {
        position: relative;
    }

    .boxed-content {
        position: absolute;
        width: 100%;
        height: 100%;
        bottom: 0;
        background: rgba(211, 211, 211, 0.5);
        color: black;
        display: block;
        padding: 1rem 1rem 1rem 1rem;
        margin: 0 auto;
        background-clip: content-box;
    }
</style>