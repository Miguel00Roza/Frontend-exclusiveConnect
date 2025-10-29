<script setup>
import colorPicker from '@/components/colorPicker.vue'
import navPages from '@/components/nav.vue'
import footerPages from '@/components/footer.vue'
import { ref } from 'vue';

const selectedColor = ref('#fff');
let isOn = ref(false);
</script>

<template>
  <div class="content">
    <navPages />
    <div class="container">
      <div class="box">
        <h1>Led</h1>
        <colorPicker v-model:color="selectedColor" />
        <div class="containerCurrentColor">
          <div class="currentColor"></div>
          <p>Cor Atual</p>
        </div>
        <div class="preColors">
          <div>
            <button @click="selectedColor = '#f00'" style="background-color: red;"></button>
          </div>
          <div>
            <button @click="selectedColor = '#008000'" style="background-color: green;"></button>
          </div>
          <div>
            <button @click="selectedColor = '#ffff00'" style="background-color: yellow;"></button>
          </div>
          <div>
            <button @click="selectedColor = '#0000ff'" style="background-color: blue;"></button>
          </div>
          <div>
            <button @click="selectedColor = '#fff'" style="background-color: #fff; border: solid 1px;"></button>
          </div>
        </div>
        <button class="onOff" @click="isOn = !isOn" :class="isOn ? 'on' : 'off'">{{ isOn ? "ON" : "OFF" }}</button>
      </div>
    </div>
    <footerPages />
  </div>
</template>
<style lang="scss" scoped>
/*-------Footer on ground-----*/
.content {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  flex-grow: 1;
  padding: 0 5vw;
}

/*-------box-----*/
.box {
  background-color: F4F4F4;
  box-shadow: 4px 4px 18px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  & h1 {
    margin-top: 10px;
    font-size: $title-size;
  }

  & .containerCurrentColor {
    display: flex;
    align-items: center;
    gap: 10px;
    & .currentColor {
      width: 30px;
      height: 30px;
      background-color: v-bind(selectedColor);
      border: solid 1px;
    }
  }
  & .preColors {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
    & div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 30px;
      & button {
        width: 100%;
        height: 30px;
        border: none;
      }
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
@media only screen and (min-width: 900px) {
  .container {
    padding: 5vw;
  }
}
</style>