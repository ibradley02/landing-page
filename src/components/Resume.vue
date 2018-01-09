<template>
    <div class="main row">
        <header class="col-sm-12">
            <h1>Ian Bradley</h1>
            <div class="email">
                <h5>Phone: 208-871-6738 - Boise, Idaho - Email: ianbradleydebate@gmail.com</h5>
            </div>
        </header>
        <div class="row">
            <div class="col-sm-6 panel-style">
                <div class="panel panel-default">
                    <div class="panel-heading">Education</div>
                    <div class="panel-body">
                        <ul>
                            <li>
                                Rocky Mountain High School, Graduated: May, 2015
                            </li>
                            <li>
                                Collegiate Enrollment: Northwest Nazarene University, Boise State University
                            </li>
                            <li>
                                Boise CodeWorks Expected Graduate: Jan. 2018
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 panel-style">
                <div class="panel panel-default">
                    <div class="panel-heading">Experience</div>
                    <div class="panel-body">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit magni sint nulla quod repudiandae laboriosam
                            illum eius, odio ad vitae. Itaque omnis quidem animi voluptate.</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 panel-style">
                <div class="panel panel-default">
                    <div class="panel-heading">Skills</div>
                    <div class="panel-body">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit magni sint nulla quod repudiandae laboriosam
                            illum eius, odio ad vitae. Itaque omnis quidem animi voluptate.</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 panel-style">
                <div class="panel panel-default">
                    <div class="panel-heading">Objective</div>
                    <div class="panel-body">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit magni sint nulla quod repudiandae laboriosam
                            illum eius, odio ad vitae. Itaque omnis quidem animi voluptate.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Navbar from './Navbar'

    export default {
        name: 'Resume',
        data() {
            return {

            }
        },
        components: {
            Navbar
        }
    }
</script>

<style scoped>
    .email {
        display: inline-flex;
    }

    .phone {
        display: inline-flex;
    }
</style>