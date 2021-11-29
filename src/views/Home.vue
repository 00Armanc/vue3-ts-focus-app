<template>
    <div v-dcenter class="bg-content">
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
        Message: defineAsyncComponent(() => import('@/components/Message.vue')),
        Sounds: defineAsyncComponent(() => import('@/components/Sounds.vue'))
    },
    // setup() {
        
    // },
})
</script>

<style>
.bg-content {
    width: 100%;
}
.content-area {
    margin-top: 30px;   
    width: 80%;
}
</style>
