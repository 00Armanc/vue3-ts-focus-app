<template>
    <div class="sounds">
        <template v-for="(sound, index) in $store.state.sounds" :key="index">
            <Sound :sound="sound" />
        </template>
    </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue'

export default defineComponent({
    components: {
        Sound: defineAsyncComponent(() => import('./Sound.vue')),
    },
    // setup() {
        
    // },
})
</script>


<style>
.sounds {
    width: 100%;
    height: fit-content;
    margin-top: 30px;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
}
</style>