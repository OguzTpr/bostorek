<template>
<nav class="navbar navbar-expand-md">
    <div class="container">
        <RouterLink class="navbar-brand" :to="{ name:'home' }">Bostorek</RouterLink>
        <ul class="navbar-nav">
            <li class="nav-item">
                <RouterLink class="nav-link" :to="{ name: 'home' }">Home</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink class="nav-link" :to="{ name: 'books' }">Books</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink class="nav-link" :to="{ name: 'contact' }">Contact Us</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink class="nav-link" :to="{ name: 'login' }">Login</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink class="nav-link" :to="{ name: 'register' }">Register</RouterLink>
            </li>
        </ul>
    </div>
</nav>
</template>

<script>
    export default {
        name : "NavBar"
    }
</script>

<style scoped>

nav {
 background-color: var(--primary);
 padding: 15px 0;
}
.navbar-brand {
    padding: 0;
    margin: 0;
    color: var(--second);
    font-size: large;
    font-weight: bold;
}
.nav-link {
    padding: 10px 15px;
    color: var(--second);
    text-align: center;
}
.nav-link:hover {
    color: var(--third);
    text-align: center;
}
.active-link {
    color: var(--forth);
    text-align: center;
}
</style>