<template>
    <div class="row navbar-center">
        <nav class="navbar navbar-default myNavbar">
            <div class="col-sm-1 text-style">
                <button>
                    <router-link :to="{ path: '/about' }">
                        <h5>About</h5>
                    </router-link>
                </button>
            </div>
            <div class="col-sm-1 text-style">
                <button>
                    <router-link :to="{ path: '/portfolio' }">
                        <h5>Portfolio</h5>
                    </router-link>
                </button>
            </div>
            <div class="col-sm-1 text-style">
                <button>
                    <router-link :to="{ path: '/resume' }">
                        <h5>Resume</h5>
                    </router-link>
                </button>
            </div>
            <div class="col-sm-1 text-center text-style">
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
        border-radius: 0%
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
        margin-bottom: 2vh;
        border: none;
        outline: none !important;
        box-shadow: none !important;
        background-color: rgba(4, 61, 175, 0);
    }

    button:hover {
        margin-bottom: 2vh;
        cursor: pointer;
        background-color: rgba(3, 43, 122, 0.801);
    }

    button:active {
        margin-bottom: 2vh;
        outline: none !important;
        border: none;
        background-color: rgba(3, 43, 122, 0.801);

    }

    button:active:focus {
        margin-bottom: 2vh;
        outline: none !important;
        background-color: rgba(3, 43, 122, 0.801);

    }

    button:focus {
        margin-bottom: 2vh;
        outline: none !important;
        background-color: rgba(3, 43, 122, 0.801);

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
        background-color: rgba(4, 61, 175, 0.582);
        display: flex;
        color: white;
        margin-bottom: 0px;
        text-align: center;
    }

    .navbar {
        border: 0px;
    }
</style>