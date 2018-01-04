<template>
    <div>
        <navbar></navbar>
        <div class="main row">
            <header class="col-sm-12">
                <h1>Ian Bradley</h1>
            </header>
            <div class="row">
                <div class="col-sm-4 panel panel-default">
                    <div class="panel-heading">
                        <h4>About Me</h4>
                    </div>
                    <div class="panel-body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ut aliquid nostrum laborum quisquam.
                            Asperiores exercitationem quaerat sequi hic ad reprehenderit sint minima, animi pariatur perspiciatis
                            commodi, eveniet atque ex dolores aspernatur amet esse blanditiis ipsum? Autem enim tenetur illum
                            magni corporis deserunt, veritatis explicabo. Et exercitationem a sequi quae!</p>
                    </div>
                </div>
                <div class="col-sm-4 panel panel-default col2">
                    <div class="panel-heading">
                        <h4>Objective</h4>
                    </div>
                    <div class="panel-body">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum hic facilis iste libero quam aspernatur
                            quae pariatur omnis velit ad dolore delectus aliquid aut consectetur tempore blanditiis veritatis,
                            non molestiae quod officia nemo voluptate modi similique? Distinctio perspiciatis laborum, deleniti
                            ipsum molestias molestiae, nesciunt consequuntur alias ex itaque ullam debitis!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Navbar from './Navbar'

    export default {
        name: 'About',
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
    .panel {
        float: none;
        margin: 0 auto;
        display: inline-block;
    }
    .col2 {
        margin-left: 2vw;
    }
</style>