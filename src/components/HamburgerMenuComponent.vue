<template>
  <div class="relative">
    <button @click="toggleMenu" class="text-onSurface hover:text-onSurfaceVariant">
      <span class="material-symbols-outlined">{{ open ? 'close' : props.icon }}</span>
    </button>
    <div
      v-if="open"
      class="absolute top-8 right-0 bg-surfaceContainerHighest shadow text-onSurface rounded-lg cursor-pointer"
    >
      <slot></slot>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const props = defineProps({
  icon: String
})

const open = ref(false)

const toggleMenu = () => {
  open.value = !open.value
}
</script>
