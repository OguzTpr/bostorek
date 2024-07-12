<template>
    <NavBar />
    <RouterView />
    <Footer />
    </template>

<script>

import NavBar from '@/components/navbar.vue';
import Footer from '@/components/footer.vue';
export default {
    name: "App",
    components: {
        NavBar,
        Footer
    },
    
    data() {
        return {

        }
    }
}
</script>
<style>

</style>