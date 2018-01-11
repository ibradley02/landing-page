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
        name: 'sidebar',
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
        color: #000;
    }

    a {
        color: #000;
        border: 0;
    }

    .router-link-active {
        color: #000;
    }

    .router-link-exact-active {
        color: #000;
    }

    .text-style{
        outline: #000;
    }

    .fa{
        color: #000;
    }

    #sidebar {
        border-radius: 10px;
        position: fixed;
        background: #CDDC39;
        color: #000;
        min-width: 50px;
        max-width: 100px;
        min-height: 10vh;
        z-index: 1 !important;
        margin-left: 7vw;
        display: flex;
        float: none;
        margin-top: 45vh;
        text-align: center;
        width: 10%;
    }
</style>