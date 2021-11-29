<template>
        <div class="message-box animate__animated animate__fadeInDown">
            <h3 class="title">Hi There,</h3>
            <div class="message">
                {{ message }}
            </div>
        </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        const message = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos in, a facere ut, illo dolore rerum fuga exercitationem, facilis tempora molestias excepturi omnis laboriosam. Dolor, facere voluptate maiores reiciendis tenetur sed quae doloribus nihil totam deserunt ex doloremque cupiditate consequuntur repudiandae? Nemo asperiores maxime doloremque dolor minima ut modi voluptatibus voluptas eaque, velit, incidunt necessitatibus. Officiis ab provident iusto! Deleniti."
        return { message }
    },
})
</script>


<style>
.message-box {
    width: 100%;
    height: fit-content;
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background-color: var(--message-bg-color);
    animation-duration: .5s;
}
.message, .title {
    font: 20px 'Rokkitt', serif; 
}
.title {
    font-weight: bold;
}
</style>