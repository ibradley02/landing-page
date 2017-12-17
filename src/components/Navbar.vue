<template>
    <div class="row">
        <nav class="navbar navbar-default myNavbar">
            <div class="col-sm-1">
                <router-link :to="{ path: '/' }">Home</router-link>
            </div>
            <div class="col-sm-1">
                <router-link :to="{ path: '/about' }">About</router-link>
            </div>
            <div class="col-sm-1">
                <router-link :to="{ path: '/portfolio' }">Portfolio</router-link>
            </div>
            <div class="col-sm-9 text-center">
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
    a {
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