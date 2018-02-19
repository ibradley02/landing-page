<template>
    <div class="row" id="sidebar">
        <ul class="list-unstyled">
            <li class="col-sm-12 text-top text-style">
                <a href="#about">
                    <h5>About</h5>
                </a>
            </li>
            <li class="col-sm-12 text-style">
                <a href="#portfolio">
                    <h5>Portfolio</h5>
                </a>
            </li>
            <li class="col-sm-12 text-style">
                <h5>Resume</h5>
            </li>
            <li class="col-sm-12 text-style">
                <h5>Contact</h5>
            </li>
            <li class="col-sm-12 text-bottom">
                <a href="http://github.com/ibradley02" target=_blank>
                    <i class="fa fa-github fa-2x"></i>
                </a>
                <a href="https://www.linkedin.com/in/ian-bradley-4a5a0b157/" target=_blank>
                    <i class="fa fa-linkedin-square fa-2x"></i>
                </a>
            </li>
        </ul>
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
        position: fixed;
        background: rgb(252, 252, 252);
        color: #000;
        min-width: 15vw;
        max-width: 20vw;
        min-height: 10vh;
        z-index: 1 !important;
        margin-left: 25vw;
        display: flex;
        float: none;
        margin-top: 45vh;
        text-align: center;
        width: 10%;
        border: 1px solid #000;
        box-shadow: 2px 2px 5px black;
        text-decoration: none;

    }

    .col-sm-6{
        margin: auto auto;
    }

    .text-style{
        display: block;
        background: lightgray;
        text-align: center;
        padding: 2px 6px 9px 6px;
        text-transform: uppercase;
        background-clip:content-box;
        text-decoration: none;
    }

    .text-top{
        margin-top: 5vh;
    }
    .text-bottom{
        margin-bottom: 3vh;
    }
</style>