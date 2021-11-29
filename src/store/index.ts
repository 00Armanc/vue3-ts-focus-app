import { createStore } from 'vuex'

export default createStore({
  state: {
    sounds: [
      { 
        id: 1, 
        title: "ThunderStorm on tent",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, eos.",
        soundSrc: require('@/assets/sounds/thunderstorm-tent.mp3'),
        imgSrc: require('@/assets/img/thunderstorm-tent.jpg'),
      },
      { 
        id: 2, 
        title: "Fire Sound",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, eos.",
        soundSrc: require('@/assets/sounds/fire-relaxing.mp3'),
        imgSrc: require('@/assets/img/fire.png'),
      },
      { 
        id: 3, 
        title: "Heavy ThunderStorm", 
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, eos.",
        soundSrc: require('@/assets/sounds/heavy-tunderstorm.mp3'),
        imgSrc: require('@/assets/img/thunderstorm-rain.jpg'),
      },
      { 
        id: 4, 
        title: "Rainy Day", 
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, eos.",
        soundSrc: require('@/assets/sounds/rainy-study.mp3'),
        imgSrc: require('@/assets/img/rain.jpg'),
      },
      { 
        id: 5, 
        title: "Water Sound", 
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, eos.",
        soundSrc: require('@/assets/sounds/relaxing-water.mp3'),
        imgSrc: require('@/assets/img/water.jpg'),
      },
      { 
        id: 6, 
        title: "Bob Dylan", 
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, eos.",
        soundSrc: require('@/assets/sounds/example.mp3'),
        imgSrc: require('@/assets/img/bob-dylan.jpg'),
      },
    ],
    name: "",
    description: "",
    currentSrc: "",
    currentSound: [],
    currentİmg: "",
    currentTime: 0,
    duration: 0,
    player: new Audio(),
    isPlay: false,
  },
  getters: {

  },
  mutations: {
    play(state) {
      state.player.play()
    },
    pause(state) {
      state.player.pause()
    },
    setSource(state, payload) {
      state.player.src = payload.soundSrc
      state.currentSound = payload
    },
    editButton(state, value: boolean) {
      state.isPlay = value
      if(value) {
        state.player.play()
      } else {
        state.player.pause()
      }
    },
    togglePlaying(state) {
      state.isPlay = !state.isPlay
      if(state.isPlay) {
        state.player.play()
      } else {
        state.player.pause()
      }
    },
    soundMuted(state, payload: boolean) {
      state.player.muted = payload
    },
    toggleMuted(state) {
      state.player.muted = !state.player.muted
    },
    setName(state, payload: string) {
      state.name = payload
    },
    setDescription(state, payload: string) {
      state.description = payload
    },
    setDuration(state, payload: number) {
      state.duration = payload
    },
    setCurrentTime(state, payload: number) {
      state.currentTime = payload
    },
    setCurrentİmg(state, payload: string) {
      state.currentİmg = payload
    }
  },
  actions: {
    playSound({ state, commit }, data) {
      commit("setSource", data)
      commit("setName", data.title)
      commit("setDescription", data.description)
      commit("setDuration", 0)
      commit("setCurrentTime", 0)
      commit("editButton", true)
      commit("setCurrentİmg", data.imgSrc)
      commit("play")
      commit("soundMuted", false)
    },
    pauseSound({ commit }) {
      commit("editButton", false)
      commit("pause")
    }
  }
})
