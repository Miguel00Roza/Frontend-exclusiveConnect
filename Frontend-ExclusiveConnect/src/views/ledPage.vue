<script setup>
    import navComp from '../components/nav.vue'
    import footerComp from '../components/footer.vue'
    import { ref } from 'vue';
    let corSelecionada = ref('#FF0000');
</script>
<template>
    <div class="contents">
        <navComp />
        <main>
            <input type="color" v-model="corSelecionada">
            <div class="caixa-de-cor" :style="{ backgroundColor: corSelecionada }">

            </div>
        </main>
    </div>
</template>
<style scoped>
.caixa-de-cor {
  width: 150px;
  height: 150px;
  border: 1px solid #ccc;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: white;
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.5); 
}

input[type="color"] {
  width: 50px;
  height: 50px;
  padding: 0;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
</style>