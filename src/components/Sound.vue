<template>
        <div v-dcenter class="sound animate__animated animate__fadeInLeft">
            <router-link :to="currentSound" @click="playSound()">
                <Avatar :size="65" :img="sound.imgSrc" />
            </router-link>
            <div class="text-area">
                <h3> {{ sound.title }} </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, eos.</p>
            </div> 
            <div v-if="sound.id == $store.state.currentSound.id" class="svg-icons">
                <svg @click="toggleMuted()" v-if="!isMuted" xmlns="http://www.w3.org/2000/svg" class="sound-svg" viewBox="0 0 16 16">
                    <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/>
                    <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/>
                    <path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"/>
                </svg>
                <svg @click="toggleMuted()" v-if="isMuted" xmlns="http://www.w3.org/2000/svg" class="sound-svg" viewBox="0 0 16 16">
                    <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z"/>
                </svg>
            </div>
        </div>
</template>

<script lang="ts">
import { computed, defineAsyncComponent, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
    props: ["sound"],
    components: {
        Avatar: defineAsyncComponent(() => import('./Avatar.vue'))
    },
    setup(props: any) {
        const store = useStore()
        let isMuted = ref(store.state.player.muted)

        const currentSound = computed(() => {
            return "/sound/"+props.sound.id
        }) 
        const playSound = () => {
            if(store.state.name == "") {
                store.dispatch('playSound', props.sound)
            } else if(store.state.name != props.sound.title) {
                store.dispatch('playSound', props.sound)    
            } else if(store.state.name == props.sound.title) {
                console.log("it is not empty")
            }
        }
        
        const toggleMuted = () => {
            store.commit('toggleMuted')
            isMuted.value = store.state.player.muted
        }
        return {
            // soundMuted,
            toggleMuted,
            currentSound,
            playSound,
            isMuted,
            // onMuted,
            // offMuted,
        }
    },
})
</script>

<style>
.sound {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 30px;
    flex: 1;
    background-color:var(--sound-bg-color);
    text-decoration: none;
    color: #000;
    animation-duration: .5s;

}
.sound:hover {
    background-color: var(--sound-bg-hover-color);
}
.text-area {
    /* border: 1px solid black; */
    padding-left: 15px;
}
.text-area > h3 {
    flex: 2;
    /* border: 1px solid black; */
    text-align: left;
}
.text-area > p {
    /* border: 1px solid black; */
}
.sound-svg {
    width: 25px;
    height: 25px;
    /* background: white; */
    fill: rgb(122, 122, 122);
    position: absolute;
    right: 10px;
    bottom: 10px;
    cursor: pointer;
}   
</style>
