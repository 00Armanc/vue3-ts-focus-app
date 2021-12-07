<template>
    <!-- <h1 class="sound-name"> {{ $store.state.name }} </h1> -->
    <div class="time-area">
        <div @click="handleMouseUp" class="bar">
            <div class="current-bar" :style="{width: widthBar}"></div>
        </div>
        <div class="controls">
            <div class="buttons">
                <VideoControlsButtons />   
            </div>
            <div class="time">
                <span class="currentTime">{{ currentTime }} / {{ duration }}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent , ref, onMounted } from 'vue'
// import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { editTime, editBarWidth } from '@/lib/toggle.ts'
import store from '@/store'

export default defineComponent({
    name: "SoundData",
    components: {
        VideoControlsButtons: defineAsyncComponent(() => import('@/components/VideoControlsButtons.vue')),
    },
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
        const handleMouseUp = (e: MouseEvent) => {
            if (e.currentTarget instanceof HTMLElement) {
                const { x, width } = e.currentTarget.getBoundingClientRect();
                const { clientX } = e;
                const startX = clientX - x;
                const yuzde = Math.floor(startX / width * 100);
                const duration = store.state.player.duration;
                store.state.player.currentTime = duration / 100 * yuzde;
            }
        }
                
        return { 
            handleMouseUp,
            editBar,
            duration,
            currentTime,
            widthBar,
        }
    },
})
</script>


<style>
.controls {
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-left: 10px;
}
.time-area {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-evenly;
    padding: 10px;
}
.bar {
    width: 98%;
    height: 6px;
    background: rgb(209, 196, 196);
    margin: 0 auto;
    position: relative;
}
.bar:hover {
    cursor: pointer;
}
.bar:hover .current-bar::before {
    display: block;    
}
.current-bar {
    height: 100%;
    background-color: red;
    position: relative;
}
.current-bar::before {
    position: absolute;
    content: "";
    width: 10px;
    height: 10px;
    background: red;
    top: -2px;
    right: -5px;
    border-radius: 50%;
    display: none;
}
span {
    font-size: 20px;
}
.buttons, .time {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.time {
    margin-left: 30px;
}
</style>

