<template>
    <div class="row">
        <nav class="navbar navbar-default myNavbar">
            <div class="col-sm-1 text-style">
                <router-link :to="{ path: '/' }">Home</router-link>
            </div>
            <div class="col-sm-1 text-style">
                <router-link :to="{ path: '/about' }">About</router-link>
            </div>
            <div class="col-sm-1 text-style">
                <router-link :to="{ path: '/portfolio' }">Portfolio</router-link>
            </div>
            <div class="col-sm-1 text-style">
                <router-link :to="{ path: '/resume' }">Resume</router-link>
            </div>
            <div class="col-sm-8 text-center text-style">
                <a href="http://www.github.com/ibradley02" target="_blank">Github</a>
            </div>
        </nav>
    </div>
</template>
<script>
    export default {
        name: 'navbar',
        data() {
            return {
            }
        },
        methods: {
        },
        components: {
        },
        computed: {
        }
    }
</script>
<style>
    .text-style {
        color: white !important;
        margin-top: 5vh;
    }

    .router-link-active {
        color: white;
    }

    .myNavbar {
        background-color: rgba(4, 61, 175, 0.801);
        display: flex;
        color: white;
        margin-bottom: 0px;
        text-align: center;
    }

    .navbar {
        border: 0px;
    }

    .navbar-btn {
        background: black;
        border: 0px;
    }
</style>