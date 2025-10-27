<script setup>
    let nomeUsuario = "Miguel";
    let inicialUsuario = nomeUsuario[0];
</script>
<template>
    <nav>
        <div class="hello">
            <p>Olá, {{ nomeUsuario }}</p>
        </div>
        <div class="user">
            <router-link>{{ inicialUsuario }}</router-link>
        </div>
    </nav>
</template>
<style scoped>
    nav {
        display: flex;
        justify-content: space-between;
        padding: 3vw 10vw;
        align-items: center;
        & .hello {
            background-color: #446692;
            padding: 10px 20px;
            border-radius: 10px;
            & p {
                color: white;
            }
        }
        & .user {
            background-color: #446692;
            padding: 10px;
            border-radius: 200px;
            & a {
                color: white;
                font-size: 20px;
            }
        }
    }
</style>