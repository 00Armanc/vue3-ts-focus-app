<template>
    <div class="bg-content" v-dcenter>
        <div class="content-area">
            <Message />
            <Sounds />
        </div>
    </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue'

export default defineComponent({
    components: {
        Message: defineAsyncComponent(() => import('./Message.vue')),
        Sounds: defineAsyncComponent(() => import('./Sounds.vue'))
    },
    // setup() {
        
    // },
})
</script>

<style>
/* .bg-content {
    width: 100%;
    margin-top: 200px;
} */
.content-area {
    /* margin-top: 150px;    */
    width: 80%;
}
</style>
