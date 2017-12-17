<template>
    <div class="row navbar-center">
        <nav class="navbar navbar-default myNavbar">
            <div class="col-sm-1 text-style">
                <router-link :to="{ path: '/' }"><h5>Home</h5></router-link>
            </div>
            <div class="col-sm-1 text-style">
                <router-link :to="{ path: '/about' }"><h5>About</h5></router-link>
            </div>
            <div class="col-sm-1 text-style">
                <router-link :to="{ path: '/portfolio' }"><h5>Portfolio</h5></router-link>
            </div>
            <div class="col-sm-1 text-style">
                <router-link :to="{ path: '/resume' }"><h5>Resume</h5></router-link>
            </div>
            <div class="col-sm-8 text-center text-style">
                <a href="http://www.github.com/ibradley02" target="_blank"><i class="fa fa-github"></i> <h5>Github</h5></a>
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
<style scoped>
    i {
        color: white;
    }
    nav {
        width: 75%;
    }

    a {
        color: white;
    }

    .text-style {
        color: white !important;
        margin-top: 2vh;
    }

    .router-link-active {
        color: white;
    }

    .router-link-exact-active {
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