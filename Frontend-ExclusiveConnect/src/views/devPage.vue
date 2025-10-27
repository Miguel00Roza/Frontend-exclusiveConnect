<script>

</script>
<template>
    <div class="routers">
    <router-link to="/register">Register Page</router-link>
    <router-link to="/main">Main page</router-link>
    </div>
</template>
<style scoped>
.routers {
    padding: 50px;
    display: flex;
    gap: 30px;
}
a {
    display: block;
    background-color: aqua;
    padding: 10px;
    border-radius: 10px;
    transition: ease 200ms;
}
</style>