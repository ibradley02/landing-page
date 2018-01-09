<template>
    <div class="row navbar-center">
        <nav class="navbar navbar-default myNavbar text-style">
            <div class="col-sm-3">
                <a href="#about">
                    <h5>About</h5>
                </a>
            </div>
            <div class="col-sm-3">
                <a href="#portfolio">
                    <h5>Portfolio</h5>
                </a>
            </div>
            <div class="col-sm-3">
                <a href="#resume">
                    <h5>Resume</h5>
                </a>
            </div>
            <div class="col-sm-3">
                <a href="http://github.com/ibradley02" target=_blank>
                    <i class="fa fa-github fa-2x"></i>
                </a>
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
    nav {
        border-radius: 0%;
    }
    i {
        display: inline-block;
        color: white;
    }
    .flex {
        display: inline-block;
    }
    a {
        color: white;
    }
    button {
        border-radius: 25%;
        border: none;
        outline: none !important;
        box-shadow: none !important;
        background-color: rgba(4, 61, 175, 0);
    }
    button:hover {
        cursor: pointer;
        background-color: rgba(3, 43, 122, 0.801);
    }
    button:active {
        outline: none !important;
        border: none;
        background-color: rgba(3, 43, 122, 0.801);

    }
    button:active:focus {
        outline: none !important;
        background-color: rgba(3, 43, 122, 0.801);

    }
    button:focus {
        outline: none !important;
        background-color: rgba(3, 43, 122, 0.801);

    }
    .text-style {
        color: white !important;
        width: 100%;
    }

    .router-link-active {
        color: white;
    }

    .router-link-exact-active {
        color: white;
    }

    .myNavbar {
        background-color: rgba(4, 61, 175, 0.582);
        display: flex;
        position: absolute;
        float: none;
        color: white;
        margin: 0 auto;
        text-align: center;
        width: 100%;
    }

    .navbar {
        border: 0px;
    }
</style>