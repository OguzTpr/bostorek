<template>
    <div>
    <sectionHeader title="L.o.g.i.n" text="A basic form for login to Bostorek system"/>
</div>
<section class="full-section">
<div class="container">
    <form class="mt-5" @submit.prevent="submitform">
        <!-- <div class="row justify-content-center"> -->
            <!-- Username Field-->
             <!-- <div class="col-md-6 col-8 mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="text" class="form-control" id="username" name="username" v-model.trim="formDa.username" required>
            </div>
        </div> -->

        <div class="row justify-content-center">
            <!-- Email Field-->
             <div class="col-md-6 col-8 mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="text" class="form-control" id="email" name="email" v-model.trim="formDa.email"  required>
            </div>
        </div>

        <div class="row justify-content-center">
            <!-- Password Field-->
             <div class="col-md-6 col-8 mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="text" class="form-control" id="password" name="password" v-model.trim="formDa.password"  required>
            </div>
        </div>
        <!-- Submit Button -->
         <div class="row justify-content-center">
         <div class="col-md-6 col-8 mb-3"><button type="submit" class="btn btn-primary w-100">Register</button></div></div>
    </form>
</div>
</section>
</template>

<script>
import sectionHeader from '@/components/sectionheader.vue';
    export default {
        name: "login",
        components: {
            sectionHeader
        },
        data() {
            return {
                formDa: {
                    email: '',
                    password: '',
                }
            }
        },
        methods: {
            submitform() {
                console.log('login Form', this.formDa)
            }

        }
    }
</script>

<style lang="scss" scoped>

</style>