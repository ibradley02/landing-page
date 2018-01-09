<template>
    <div class="row" id="sidebar">
        <nav>
            <div class="col-sm-12 text-style">
                <a href="#about">
                    <h5>About</h5>
                </a>
            </div>
            <div class="col-sm-12 text-style">
                <a href="#portfolio">
                    <h5>Portfolio</h5>
                </a>
            </div>
            <div class="col-sm-12 text-style">
                <a href="#resume">
                    <h5>Resume</h5>
                </a>
            </div>
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
        display: inline-block;
        color: white;
    }

    a {
        color: white;
        border: 0;
    }

    .router-link-active {
        color: white;
    }

    .router-link-exact-active {
        color: white;
    }

    .text-style{
        outline: #fff;
    }

    .fa{
        color: white;
    }

    #sidebar {
        border-radius: 10px;
        position: fixed;
        background: rgb(0, 0, 0);
        color: #fff;
        min-width: 50px;
        max-width: 100px;
        min-height: 10vh;
        z-index: 1 !important;
        margin-top: 15vh;
        margin-left: 70px;
        display: flex;
        float: none;
        margin-top: 20vh;
        text-align: center;
        width: 10%;
    }
</style>