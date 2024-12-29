<template>
  <div
    class="bg-surfaceContainerLowest rounded-xl shadow flex flex-col h-full text-onSurface"
    v-if="loading.value"
  >
    <div class="w-full h-48 rounded-t-2xl bg-surfaceContainerHighest animate-pulse"></div>
    <div class="p-4">
      <div
        class="text-primary text-sm w-12 h-4 bg-surfaceContainerHighest rounded-full mb-2 animate-pulse"
      ></div>
      <div
        class="text-primary text-sm w-72 h-4 bg-surfaceContainerHighest rounded-full mb-2 animate-pulse"
      ></div>
      <div
        class="text-primary text-sm w-72 h-4 bg-surfaceContainerHighest rounded-full mb-2 animate-pulse"
      ></div>
      <div
        class="text-primary text-sm w-36 h-4 bg-surfaceContainerHighest rounded-full animate-pulse"
      ></div>
    </div>
    <div class="flex flow-row flex-wrap gap-2 p-4 mt-auto">
      <div
        class="text-primary text-sm w-4 h-4 bg-surfaceContainerHighest rounded-full animate-pulse"
      ></div>
      <div
        class="text-primary text-sm w-8 h-4 bg-surfaceContainerHighest rounded-full animate-pulse"
      ></div>
      <div
        class="text-primary text-sm w-4 h-4 bg-surfaceContainerHighest rounded-full ml-8 animate-pulse"
      ></div>
      <div
        class="text-primary text-sm w-32 h-4 bg-surfaceContainerHighest rounded-full animate-pulse"
      ></div>
    </div>
  </div>
  <div
    class="bg-surfaceContainerLowest rounded-xl shadow flex flex-col h-full text-onSurface"
    v-if="!loading.value"
  >
    <slot name="image"></slot>
    <div class="p-4">
      <span class="text-primary text-sm"><slot name="subheading"></slot></span>
      <HeadingComponent size="h3"><slot name="header"></slot></HeadingComponent>
      <slot name="body"></slot>
    </div>
    <div class="flex flow-row flex-wrap gap-4 justify-between p-4 mt-auto">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'

const loading = ref(true)

onMounted(() => {
  loading.value = false
})
</script>
