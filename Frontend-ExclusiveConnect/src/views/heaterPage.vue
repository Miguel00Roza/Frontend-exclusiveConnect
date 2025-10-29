<script setup>
import navPages from '@/components/nav.vue'
import footerPages from '@/components/footer.vue'
// Importe 'computed' além de 'ref'
import { ref, computed } from 'vue';

let isOn = ref(false);
let temp = ref(23);
let unidadeTemp = "°C";

// --- ADICIONADO ---
// Define as cores de início e fim do seu gradiente
const startColor = { r: 0, g: 0, b: 255 }; // Azul (#098CEA)
const endColor = { r: 255, g: 0, b: 0 };     // Vermelho (#EF0000)
const minTemp = 12;
const maxTemp = 40;

// Cria uma propriedade computada que calcula a cor exata
const thumbColor = computed(() => {
    // 1. Calcula a porcentagem atual (0 a 1)
    const percent = (temp.value - minTemp) / (maxTemp - minTemp);

    // 2. Interpola cada canal de cor (R, G, B)
    const r = Math.round(startColor.r + (endColor.r - startColor.r) * percent);
    const g = Math.round(startColor.g + (endColor.g - startColor.g) * percent);
    const b = Math.round(startColor.b + (endColor.b - startColor.b) * percent);

    // 3. Converte os valores RGB de volta para uma string Hex
    const toHex = (c) => c.toString(16).padStart(2, '0');
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
});
</script>

<template>
    <div class="content">
        <navPages />
        <div class="container">
            <div class="box">
                <h1>Aquecimento</h1>
                <div class="tempDisplay">
                    <h2>{{ temp }}{{ unidadeTemp }}</h2>
                </div>
                <div class="tempSelect">
                    <div class="numbersTop">
                        <p>12°</p>
                        <p>40°</p>
                    </div>
                    <input 
                        type="range" 
                        class="tempRange" 
                        id="tempRange" 
                        min="12" 
                        max="40" 
                        v-model="temp"
                        :style="{ '--thumb-color': thumbColor }" 
                    > </div>
                <button class="onOff" @click="isOn = !isOn" :class="isOn ? 'on' : 'off'">{{ isOn ? "ON" : "OFF"}}</button>
            </div>
        </div>
        <footerPages />
    </div>
</template>

<style lang="scss" scoped>
.content {
    height: 100vh;
    display: flex;
    flex-direction: column;
}

.container {
    flex-grow: 1;
    padding: 5vw 5vw;
}

.box {
    box-shadow: $shadow-card;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    border-radius: 25px;
    height: 100%;

    & h1 {
        font-size: $title-size;
        margin-top: 10px;
    }

    & .tempDisplay {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: v-bind(thumbColor);
        width: 100px;
        height: 100px;
        border-radius: 200px;
        box-shadow: 0px 0px 15px 5px v-bind(thumbColor);

        & h2 {
            font-size: 35px;
            font-weight: 600;
            color: white;
        }
    }

    & .tempSelect {
        & .numbersTop {
            display: flex;
            justify-content: space-between;
        }

        & input[type="range"] {
            -webkit-appearance: none;
            appearance: none;
            width: 300px;
            height: 6px;
            background: linear-gradient(to right, #098CEA, #EF0000);
            border-radius: 3px;
            outline: none;
            transition: background 0.3s;
        }

        /* --- Peguei essa prr da ia msm, somos humanos não cavalos --- */

        /* Para Chrome, Safari, Edge */
        & input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 20px; /* Tamanho do thumb */
            height: 20px; /* Tamanho do thumb */
            border-radius: 50%; /* Deixa redondo */
            background-color: v-bind(thumbColor); /* <-- USA A VARIÁVEL */
            border: solid 2px white;
            box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
            cursor: pointer;
            margin-top: -7px; /* Centraliza verticalmente no trilho */
        }

        /* Para Firefox */
        & input[type="range"]::-moz-range-thumb {
            width: 20px; /* Mesmo tamanho */
            height: 20px; /* Mesmo tamanho */
            border-radius: 50%; /* Deixa redondo */
            background-color: v-bind(thumbColor); /* <-- USA A VARIÁVEL */
            border: solid 2px white;
            box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
            cursor: pointer;
        }
    }
    & .onOff {
    width: 70px;
    height: 70px;
    border-radius: 200px;
    border: none;
    margin-bottom: 10px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
  }
  .on {
    background-color: rgb(0, 255, 0);
    color: white;
  }
  .off {
    background-color: red;
    color: white;
  }
}
</style>