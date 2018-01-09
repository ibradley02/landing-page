<template>
    <div class="row">
        <navbar></navbar>
        <div class="main row">
            <header>
                <h1>Portfolio</h1>
            </header>
            <div class="col-sm-3" v-if="info.show">
                <a @click="toggleShowInfo" class="btn btn-default panel-style">
                    <img src="https://i.imgur.com/JQs05hS.png" alt="A Kanban Website">
                </a>
            </div>
            <div class="col-sm-3" v-else>
                <a @click="toggleShowInfo" class="btn btn-default panel-style">
                    <div class="content row">
                        <img src="https://i.imgur.com/JQs05hS.png" alt="A Kanban Website">
                        <p class="col-sm-12">A Kanban application made in vue with node.js</p>
                        <a class="col-sm-6" href="https://github.com/ibradley02/vue-kanban" target="_blank">View Code</a>
                        <a class="col-sm-6" href="http://kanban-track-it.herokuapp.com/#/" target="_blank">Visit Website</a>
                    </div>
                </a>
            </div>
            <div class="col-sm-3">
                <a href="http://kanban-track-it.herokuapp.com/#/" class="btn btn-default panel-style">
                    <img src="https://i.imgur.com/JQs05hS.png" alt="A Kanban Website">
                </a>
            </div>
            <div class="col-sm-3">
                <a href="http://kanban-track-it.herokuapp.com/#/" class="btn btn-default panel-style">
                    <img src="https://i.imgur.com/JQs05hS.png" alt="A Kanban Website">
                </a>
            </div>
            <div class="col-sm-3">
                <a href="http://kanban-track-it.herokuapp.com/#/" class="btn btn-default panel-style">
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

    .panel-style {
        padding: 1rem 1rem 1rem 1rem;
        margin: 0 auto;
    }

    .col-sm-3 {
        margin: 0 auto 2vh;
        padding: 1rem 1rem 1rem 1rem;
    }

    .content {
        position: relative;
    }

    p {
        position: absolute;
        width: 100%;
        height: 100%;
        margin: auto auto;
        bottom: 0;
        background: rgba(211, 211, 211, 0.600);
        padding: 10px 10px;
        color: black;
    }

    p {
        display: block;
    }
</style>