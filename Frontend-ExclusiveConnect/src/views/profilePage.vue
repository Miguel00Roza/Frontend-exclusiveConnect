<script setup>
import navPage from '@/components/nav.vue'
import footerPage from '@/components/footer.vue'

let created_at = "2025-11-12"
</script>
<template>
<div class="content">
    <navPage />
    <div class="container">
        <form action="#">
            <label for="username">Username</label>
            <input type="text" placeholder="your username" id="username">
            <label for="gmail">Email</label>
            <input type="email" placeholder="your email" id="gmail">
            <label for="password">password</label>
            <input type="password" placeholder="your password" id="password">
            <div class="joined">
                <h3>Created at</h3>
                <p>{{ created_at }}</p>
            </div>
            <div class="btnContainer">
            <button type="submit">Change</button>
            </div>
        </form>
        <div class="about">
            <h2>About app</h2>
            <p>Exclusive Connect was created with the intention of improving your experience with your pool, allowing you to control it with just a few taps on your cell phone, from turning on the LEDs to programming your motor to turn on and off at the desired time.</p>
        </div>
    </div>
    <footerPage />
</div>
</template>
<style scoped lang="scss">
.content {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}
.container {
    flex-grow: 1;
}

/*-----form----*/
.container {
    padding: 3vw 5vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    & form {
        & label {
            display: block;
            margin: 10px 0 10px 0;
            font-weight: 500;
        }
        & input {
            width: 90%;
            padding: 5px;
            border: none;
            border-radius: 5px;
            background-color: #F6F6F6;
        }
        & .joined {
            margin: 10px 0 10px 0;
            & h3 {
                font-weight: 500;
                margin-bottom: 10px;
            }
            & p {
                background-color: #F6F6F6;
                width: fit-content;
                padding: 5px;
                border-radius: 10px;
            }
        }
        & .btnContainer {
            width: 100%;
            display: flex;
            justify-content: center;
        }
        & button {
            margin-top: 20px;
            background-color: $default-blue;
            color: white;
            border: none;
            padding: 5px 20px;
            border-radius: 5px;
        }
    }
    & .about {
        text-align: center;
        margin-top: 10px;
        background-color: #F6F6F6;
        padding: 10px;
        border-radius: 20px;
    }
}
</style>