<template>
  <VueColorWheel
    wheel="aurora"
    harmony="monochromatic"
    :radius="120"
    :defaultColor="color"
    v-model:color="internalColor"
  />
</template>
<script lang="ts" setup>
import { ref, watch, toRef } from 'vue'
import { VueColorWheel } from 'vue-color-wheel'
import { useDebounce } from '@vueuse/core'

// --- props e emits para suportar v-model:color ---
const props = defineProps<{ color?: string }>()
const emit = defineEmits<(e: 'update:color', value: string) => void>()

// --- estado interno (imutável pelo pai) para resposta imediata na UI ---
const internalColor = ref(props.color ?? '#40ffff')

// --- manter internal synced quando o pai muda o value externamente ---
const colorProp = toRef(props, 'color')
watch(colorProp, (newVal) => {
  if (newVal !== undefined && newVal !== internalColor.value) {
    internalColor.value = newVal
  }
})

// --- debouncedRef: só depois do debounce emitimos para o pai ---
const debouncedColor = useDebounce(internalColor, 0) // ajuste o ms se quiser

watch(debouncedColor, (val) => {
  if (val !== undefined) emit('update:color', val)
})
</script>