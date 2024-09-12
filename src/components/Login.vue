<template>
    <div style="text-align: center; padding: 20px; display: flex; flex-direction: column; ">
        <h1>Login</h1>
        <img src="https://i.pinimg.com/564x/76/d2/16/76d2160c266a136cc2554987eadfc6e2.jpg" alt="">

        <button style="width: 100%;" @click="$router.push('/home')">LOGIN</button>

        <hr>
        <h3>No tienes cuenta? <a href="/register">Regístrate</a></h3>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: 'Login',
    setup() {


        return {}
    },
    methods: {
    }
})
</script>

<style scoped>
button {
    background-color: #5aa7ab;
    padding: 20px;
    border-radius: 10px;
    border: none;
    margin-top: 10px;
    color: blue;
}

button:hover {
    background-color: #477f82;
}
</style>