<template>
    <div class="header">
        <h1 v-dcenter class="site-name">FocusMore</h1>
    </div>  
</template>

<script lang="ts">

export default {
    name: "Header",
    props: {
        message: {
            default: "No message"
        }
    },
    setup(props: any) {
        const setMsg = () => {
            return props.message
        }
        return {
            setMsg
        }
    },
}
</script>


<style>
.header {
    width: 100%;
    height: 85px;
    background-color: var(--header-bg-color);
    border-bottom: 1px solid rgb(189, 165, 165);
    position: relative;
    margin-top: -22px;
    /* position: fixed; */
    /* z-index: 2; */
}
.site-name {
    font-family: 'Rokkitt', serif;
    position: absolute;
    color: rgb(31, 26, 26);
    top: 13px;
    left: 50px;
}

</style>