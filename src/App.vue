<template>
  <div id="nav">
    <Header :message="title" />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, ref } from '@vue/runtime-core'
import { printLen } from './lib/toggle'

export default {
  name: "App",
  components: {
    Header: defineAsyncComponent(() => import("./components/Header.vue")),
},
  setup() {
    const title = printLen("body Side")
    return {
      title
    }
  }
}
</script>

<style>

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
