<template>
    <h1 class="sound-name"> {{ $store.state.name }} </h1>
    <div class="time-area">
        <span>{{ currentTime }}</span>
        <div class="bar">
            <div class="current-bar" :style="{width: widthBar}"></div>
        </div>
        <span>{{ duration }}</span>
    </div>
</template>

<script lang="ts">
import { defineComponent , ref, onMounted } from 'vue'
// import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { editTime, editBarWidth } from '@/lib/toggle.ts'

export default defineComponent({
    name: "Soundİnformation",
    setup() {
        // const router = useRoute()
        const store = useStore()

        let duration = ref<number | string>("")
        let currentTime = ref<number | string>("")

        const widthBar = ref()

        const editBar = () => {
            widthBar.value = editBarWidth(store.state.player.currentTime, store.state.player.duration)
        }
        onMounted(() => {
            setInterval(() => {
                duration.value = editTime(store.state.player.duration)
                currentTime.value = editTime(store.state.player.currentTime)
                editBar()
            },1000) 
        })
        return { 
            editBar,
            duration,
            currentTime,
            widthBar,
        }
    },
})
</script>


<style>
.time-area {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px;
}
.bar {
    width: 70%;
    height: 15px;
    background: #fff;
    margin: 0 auto;
    /* flex: 2; */
    position: relative;
}
.current-bar {
    height: 100%;
    position: absolute;
    background-color: rgb(151, 141, 141);
}
span {
    /* flex: 1; */
    font-size: 20px;
}
</style>

