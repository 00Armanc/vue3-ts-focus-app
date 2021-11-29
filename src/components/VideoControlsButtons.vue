<template>
    <div v-dspace="'evenly'" class="play-controls-buttons">
        <router-link :to="currentRouteNum()">
            <button @click="previousSound()" class="skip-backward">
                <svg class="skip-back" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path d="M.5 3.5A.5.5 0 0 1 1 4v3.248l6.267-3.636c.52-.302 1.233.043 1.233.696v2.94l6.267-3.636c.52-.302 1.233.043 1.233.696v7.384c0 .653-.713.998-1.233.696L8.5 8.752v2.94c0 .653-.713.998-1.233.696L1 8.752V12a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm7 1.133L1.696 8 7.5 11.367V4.633zm7.5 0L9.196 8 15 11.367V4.633z"/>
                </svg>
            </button>
        </router-link>
        <div class="play-pause">
            <button @click="toggleSound()" v-if="$store.state.isPlay" class="action pause">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
                </svg>
            </button>
            <button @click="toggleSound()" v-else class="action play">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16">
                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                </svg>
            </button>
        </div>
        <router-link :to="currentRouteNum()">
            <button @click="nextSound()" class="skip-forward">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path d="M15.5 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V8.752l-6.267 3.636c-.52.302-1.233-.043-1.233-.696v-2.94l-6.267 3.636C.713 12.69 0 12.345 0 11.692V4.308c0-.653.713-.998 1.233-.696L7.5 7.248v-2.94c0-.653.713-.998 1.233-.696L15 7.248V4a.5.5 0 0 1 .5-.5zM1 4.633v6.734L6.804 8 1 4.633zm7.5 0v6.734L14.304 8 8.5 4.633z"/>
                </svg>
            </button>
        </router-link>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
    props: ['currentSound'],
    setup() {
        const store = useStore()
        const route = useRoute()


        const toggleSound = () => {
            store.commit('togglePlaying')   
        }
        const nextSound = () => {
            if(route.params.id >= store.state.sounds.length) {
                store.dispatch('playSound', store.state.sounds[0])
            } else {
                store.dispatch('playSound', store.state.sounds[(store.state.currentSound.id-1)+1])
            }
        }
        const previousSound = () => {
            if(route.params.id <= "1") {
                store.dispatch('playSound', store.state.sounds[store.state.sounds.length-1])
            } else {
                store.dispatch('playSound', store.state.sounds[(store.state.currentSound.id-1)-1])
            }
        }
        const currentRouteNum = () => {
            return `/sound/${store.state.currentSound.id}`
        }
        return {
            toggleSound,
            nextSound,
            previousSound,
            currentRouteNum
        }
    },
})
</script>


<style scoped>
.play-controls-buttons {
    padding-left: 100px;
    padding-right: 100px;
    padding-bottom: 15px;
    width: 50%;
    margin: 0 auto;

}
button {
    width: 30px;
    height: 30px;
    background: none;
}
button > svg {
    fill: white;
}
.action {
    width: 50px;
    height: 50px;

}
</style>