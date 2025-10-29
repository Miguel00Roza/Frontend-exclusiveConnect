<script setup>

const props = defineProps({
    hello: {
        type: Boolean,
        default: false
    }
})
let nomeUsuario = "Miguel";
let inicialUsuario = nomeUsuario[0];

</script>
<template>
    <nav :class="props.hello ? 'show' : 'dont'">
        <div :class="props.hello ? 'hello' : 'noHello'">
            <p>Olá, {{ nomeUsuario }}</p>
        </div>
        <div class="user">
            <router-link to="/profilePage">{{ inicialUsuario }}</router-link>
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
    & .noHello {
        display: none;
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
.dont {
    justify-content: end;
}
</style>