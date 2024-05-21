<template>
<nav class="navbar navbar-expand-md">
    <div class="container">
        <a href="#" class="navbar-brand">Bostorek</a>
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Books</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Contact Us</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Login</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Register</a>
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
 background-color: #063547;
 padding: 15px 0;
}
.navbar-brand {
    padding: 0;
    margin: 0;
    color:aliceblue;
    font-size: large;
    font-weight: bold;
}
.nav-link {
    padding: 10px 25px;
    color: aliceblue;
    text-align: center;
}
</style>