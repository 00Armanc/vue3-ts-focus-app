<template>  
    <div class="playSound">
        <!-- Left side -->
        <div class="current-play">
            <img :src="$store.state.currentİmg" class="back-img">
            <router-link :to="backToHome">
                <button class="backToHome">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
                    </svg>
                </button>
            </router-link>
            <div class="play-area">
                <div class="play-controls">
                    <SoundData />
                    <VideoControlsButtons :currentSound="currentSound" />
                </div>
            </div>
        </div>
        <!-- Right side -->
        <div class="extra-sound">
            <template v-for="(sound, index) in $store.state.sounds" :key="index">
                <Sound :sound="sound" />
            </template>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineAsyncComponent, defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
    name: "Play",
    components: {
        VideoControlsButtons: defineAsyncComponent(() => import('@/components/VideoControlsButtons.vue')),
        SoundData: defineAsyncComponent(() => import('@/components/SoundData.vue')),
        Sound: defineAsyncComponent(() => import('@/components/Sound.vue')),
    },
    setup() {
        const router = useRoute()
        const store = useStore()

        const id = Number(router.params.id)-1
        const currentSound = store.state.sounds[id]

        const backToHome = computed(() => {
            return "/"
        })

        return { 
            id,
            currentSound,
            backToHome, 
        }
    },
})
</script>

<style>
.playSound {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 100px;

    width: 100%;
    height: 100%;
}
.current-play {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: calc(100% - 500px);
    height: calc(100vh - 65px);
}
.back-img {
    width: 70%;
    height: 50vh;
    margin-top: 50px;
}
.backToHome {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 75px;
    left: 10px;

    background: rgb(212, 211, 211);
    padding: 10px;
    border-radius: 5px;
}
.backToHome:hover {
    background: rgb(184, 182, 182);
}
.play-area {
    width: 70%;
    background: black;
    height: 145px;
    color: #fff;
}
.play-controls {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border: 3px solid rgb(202, 201, 201);

}
.extra-sound {
    border-left: 1px solid rgb(187, 184, 184);
    width: 500px;
    height: calc(100vh - 65px);
    right: 0;
    bottom: 0;
    overflow-y: auto;
}
</style>

