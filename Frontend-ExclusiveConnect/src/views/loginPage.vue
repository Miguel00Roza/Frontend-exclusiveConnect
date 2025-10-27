<script setup>

</script>
<template>
    <div class="content">
    <header>
    <nav>
        <router-link to="/login">Login</router-link>
        <router-link to="/register">Register</router-link>
    </nav>
    </header>
    <main>
        <div class="screen">
        <div class="container">
            <form action="#">
                <label for="username">Username</label>
                <input type="text" placeholder="Type your username" name="username" required>
                <label for="password">Password</label>
                <input type="password" placeholder="Type your password" name="password" required>
                <button type="submit">Login</button>
            </form>
        </div>
        </div>
    </main>
    </div>
</template>
<style scoped>
.content {
    width: 100vw;
    height: 100vh;
    background-image: url('@/assets/images/background2.jpg');
    background-size: cover;
    background-position: center;
}
header {
    padding: 10px;
    display: flex;
    justify-content: center;
    & nav {
        background: #446692;
        display: flex;
        justify-content: center;
        border-radius: 200px;
        width: fit-content;
        gap: 30px;
        padding: 5px;
        & a {
            display: block;
            padding: 15px 50px;
            font-size: calc(17px + 0.1vw);
            font-weight: 400;
            color: white;
        }
        & a.router-link-exact-active {
            background-color: white;
            border-radius: 200px;
            color: #446692;
        }
    }
}
@media only screen and (max-width: 320px) {
    header nav {
        gap: 10px;
        & a {
            padding: 15px 45px;
        }
    }
}
main {
    padding: 10vw 5vw;
    & .container {
        background-color: #d9d9d971;
        backdrop-filter: blur(5px);
        padding: 30px;
        border-radius: 25px;
        box-shadow: 8px 6px 16px rgba(0, 0, 0, 0.432);
        & form{
            & label {
                display: block;
                padding-bottom: 10px;
                font-size: 17px;
                color: #446692;
                font-weight: 500;
            }
            & input {
                display: block;
                margin-bottom: 20px;
                width: 95%;
                padding: 10px 5px;
                border: none;
                border-radius: 20px;
            }
            & button {
                width: 100%;
                padding: 10px;
                border-radius: 20px;
                background-color: #446692;
                border: none;
                color: white;
                font-weight: 500;
                font-size: 17px;
            }
        }
    }
}
</style>