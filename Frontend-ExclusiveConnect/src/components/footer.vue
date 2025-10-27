<script setup>

</script>
<template>
    <footer>
        <nav>
            <div class="select">
                <router-link class="footer-link" to="/main">
                <img src="@/assets/images/pet-house.png" alt="home">
                </router-link>
            </div>
            <div>
                <router-link class="footer-link" to="/settings">
                <img src="@/assets/images/engrenagem.png" alt="settings">
                </router-link>
            </div>
        </nav>
    </footer>
</template>
<style scoped>
    footer {
        padding: 3vw 7vw;
        background-color: #D9D9D9;
        & nav {
            display: flex;
            justify-content: space-between;
            & .footer-link {
                display: block;
            }
            & .footer-link img {
                width: 25px;
            }
            & .footer-link.router-link-exact-active {
                background-color: #446692;
                padding: 5px;
                border-radius: 200px;
            }
        }
    }
</style>