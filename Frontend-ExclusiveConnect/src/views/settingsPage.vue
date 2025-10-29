<script setup>
import navPages from '@/components/nav.vue'
import footerPages from '@/components/footer.vue'

</script>
<template>
    <div class="content">
        <navPages />
        <div class="container">
            <div class="device">
                <h2>Meu dispositivo</h2>
                <form action="#">
                    <input type="text" placeholder="Digite o endereço MAC do seu dispositivo">
                    <button>Save</button>
                </form>
            </div>
            <div class="inside">
                <h3>Como utilizar?</h3>
                <div class="bottomText">
                    <a href="@/assets/guia.pdf" download>Manual Online</a>
                    <p>©Direitos reservados a Aqua Life piscinas</p>
                </div>
            </div>
        </div>
        <footerPages />
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

.container {
    padding: 1vw 5vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 2vw 5vw 2vw;
    box-shadow: $shadow-card;
    border-radius: 10px;

    & .device {
        text-align: center;
        & h2 {
            margin: 30vh 0 10px 0;
            font-size: $title-size;
        }

        & form {
            display: flex;
            flex-direction: column;
            gap: 10px;
            align-items: end;
            & input {
                width: 100%;
                background-color: $off-white;
                border: none;
                padding: 5px;
                border-radius: 5px;
                box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.25);
            }
            & button {
                background-color: $default-blue;
                border: none;
                padding: 5px;
                color: white;
                width: 30%;
                border-radius: 5px;
            }
        }
    }
    & .inside {
        & .bottomText {
            display: flex;
            justify-content: space-between;
            align-items: end;
            & p {
                font-size: 10px;
            }
            & a {
                color: rgb(0, 66, 165);
                font-weight: 300;
                text-decoration: underline;
                padding: 1px;
            }
        }
    }
}
</style>