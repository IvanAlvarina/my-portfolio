<script setup>

import { ref } from 'vue'
import MyLogo from '../assets/ivan-alvarina.png'

const logo = ref(MyLogo)

</script>

<template>
    <div class="navbar bg-base-100 shadow-sm">
        <div class="navbar-start">
            <div class="dropdown">
                <img :src="logo" class="w-10 rounded-full mr-2"/>
            </div>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1 ">
                <li>
                    <a>Home</a>
                </li>
                <li>
                    <a>About</a>
                </li>
                <li>
                    <a>Projects</a>
                </li>
                <li>
                    <a>Skills</a>
                </li>
                <li>
                    <a>Certificates</a>
                </li>
                
           
            </ul>
        </div>
        <div class="navbar-end ">
            <a class="btn btn-info">Download CV</a>
        </div>
    </div>
</template>
