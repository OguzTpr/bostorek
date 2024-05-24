<template>
    <NavBar />
    <RouterView />
    </template>

<script>

import NavBar from '@/components/navbar.vue';

export default {
    name: "App",
    components: {
        NavBar
    },
    
    data() {
        return {

        }
    }
}
</script>
<style>

@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@200..1000&display=swap');

html, body {
 font-family: "Mulish", sans-serif;
}
</style>