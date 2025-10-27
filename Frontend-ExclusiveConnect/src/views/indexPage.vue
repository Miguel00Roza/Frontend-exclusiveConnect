<script setup>
    import navPages from '@/components/nav.vue'
    import footerPages from '@/components/footer.vue'
    let phAgua = 7.1;
    let temperatura = 23 + "°C"
</script>
<template>
    <div class="contents">
    <navPages />
    <main>
    <div class="details">
        <h1>Detalhes gerais</h1>
        <ul>
            <li>
                <div class="info">
                    <p>{{ phAgua }}</p>
                </div>
                <h2>Ph da água</h2>
            </li>
            <li>
                <div class="info">
                    <p>{{ temperatura }}</p>
                </div>
                <h2>Temperatura</h2>
            </li>
            <li>
                <div class="info">
                    <p>Sla</p>
                </div>
                <h2>Sla</h2>
            </li>
        </ul>
    </div>
    <div class="cards">
        <ul>
            <li>
                <router-link class="menu-link">
                <img src="@/assets/images/luz-led.png" alt="luzled">
                <h2>Led</h2>
                </router-link>
            </li>
            <li>
                <router-link class="menu-link">
                <img src="@/assets/images/ondas-de-agua.png" alt="ondas">
                <h2>Aquecimento</h2>
                </router-link>
            </li>
            <li>
                <router-link class="menu-link">
                <img src="@/assets/images/motor.png" alt="motor">
                <h2>Motor</h2>
                </router-link>
            </li>
        </ul>
    </div>
    </main>
    <footerPages />
    </div>
</template>
<style scoped>
/*-----detalhes----*/
.details {
    margin: 20px;
    padding: 20px;
    box-shadow: 8px 8px 11px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
    & h1 {
        font-size: calc(17px + 1vw);
        text-align: center;
        margin-bottom: 20px;
    }
    & ul {
        display: flex;
        justify-content: center;
        gap: 10px;
        & li .info {
            box-shadow: inset 1px 1px 6px rgba(0, 0, 0, 0.25);
            width: 5vw;
            height: 5vw;
            padding: 20px;
            min-width: 30px;
            border-radius: 200px;
            display: flex;
            justify-content: center;
            align-items: center;
            & p {
                font-size: calc(17px + 1vw);
                font-weight: 600;
            }
        }
        & li {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            & h2 {
                text-align: center;
            }
        }
    }
}
/*-----funções----*/
.menu-link {
    display: block;
}
.cards {
    padding: 20px;
    & ul {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
        & li .menu-link{
            width: 35vw;
            height: 35vw;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            box-shadow: 4px 4px 17px rgba(0, 0, 0, 0.25);
            padding: 10px;
            border-radius: 25px;
            max-width: 300px;
            max-height: 300px;
            & img {
                height: 50%;
            }
            & h2 {
                font-size: calc(13px + 0.5vw);
            }
        }
    }
}
.contents {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
main {
    flex-grow: 1;
}
</style>