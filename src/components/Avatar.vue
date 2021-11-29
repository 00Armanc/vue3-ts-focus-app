<template>
    <figure>
        <img :src="img" 
        :alt="img" 
        class="sound-img"
        :width="105" 
        :height="size">
    </figure>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        img: {
            type: String,
            default: require('@/assets/img/focus.jpg')
        },
        size: {
            type: Number,
        }
    }
    // setup() {
        
    // },
})
</script>

<style>
.sound-img {
    border-radius: 2px;
} 
</style>
