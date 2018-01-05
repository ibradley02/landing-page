<template>
    <div>
        <navbar></navbar>
        <div class="main row">
            <header>
                <h1>Portfolio</h1>
            </header>
            <div class="col-sm-6 panel-style">
                <div class="panel panel-default">
                    <div class="panel-heading">
                    <a href="http://kanban-track-it.herokuapp.com/" target="_blank">Kanban</a>
                    </div>
                    <div class="panel-body">
                        <img src="https://i.imgur.com/JQs05hS.png" alt="Kanban Site image screenshot">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Navbar from './Navbar'

    export default {
        name: 'Portfolio',
        data() {
            return {

            }
        },
        components: {
            Navbar
        }
    }
</script>

<style>
    .panel-style {
        float: none;
        margin: 0 auto;
        margin-top: 5vh;
        display: inline-block;
    }
    img{
        height: 25vh;
        width: 35vw;
    }
</style>