<script setup>

import { ref } from 'vue'
import HeroImage from '../assets/hero_image.png'

const image = ref(HeroImage)

</script>

<template>

    <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <img :src="image" class="max-w-sm rounded-lg shadow-2xl"/>
            <div>
                <h1 class="text-5xl font-bold">Ivan Alvarina</h1>
                <p class="py-3">
                    I build modern, scalable web applications that help businesses grow and deliver exceptional user experiences
                </p>
               <div class="social-icons flex gap-4 mt-3 mb-3">
                    <a href="https://facebook.com" target="_blank" >
                        <font-awesome-icon :icon="['fab', 'facebook']" size="lg" />
                    </a>
                    <a href="https://twitter.com" target="_blank">
                        <font-awesome-icon :icon="['fab', 'twitter']" size="lg" />
                    </a>
                    <a href="https://instagram.com" target="_blank" >
                        <font-awesome-icon :icon="['fab', 'instagram']" size="lg" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" >
                        <font-awesome-icon :icon="['fab', 'linkedin']" size="lg" />
                    </a>
                </div>

                <button class="btn btn-primary">View my work</button>
            </div>
        </div>
    </div>

</template>
