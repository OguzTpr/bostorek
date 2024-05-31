<template>
        <div class="text-center mb-7 mt-5">
        <h1 class="display-5 font-weight-bolder">{{ title }}</h1>
        <p class="lead">{{ text }}</p>
    </div>
</template>

<script>
    export default {
        name: "sectionHeader",
        // props: ['title', 'text']
        props: {
            title: {
                type:String,
                required:true
            },
            text: {
                type:String,
                required:true
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>