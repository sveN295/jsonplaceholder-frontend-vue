<template>
  <link
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
    rel="stylesheet"
  />
  <html class="bg-surface" :class="darkMode ? 'dark' : 'light'">
    <GlobalHeader @toggle-dark-mode="toggleDarkMode" :dark-mode="darkMode" />
    <Suspense>
      <RouterView />
    </Suspense>
  </html>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import GlobalHeader from './components/GlobalHeader.vue'

const darkMode = ref(false)

function toggleDarkMode() {
  darkMode.value = !darkMode.value
}
</script>

<style scoped>
@import 'assets/custom-vars.scss';
</style>
