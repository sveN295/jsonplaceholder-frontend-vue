<template>
  <button class="rounded-full py-2 px-6 hover:shadow-lg hover:opacity-90" :class="props.styling">
    <div class="flex flex-row items-center gap-2">
      <span v-if="icon" class="material-symbols-outlined my-2 mx-1 icon-base">{{
        props.icon
      }}</span>
      <span class="border-onPrimary border-b-transparent loader animate-spin" v-if="loading"></span>
      {{ props.text }}
    </div>
  </button>
</template>
<script setup>
const props = defineProps({
  text: String,
  icon: String,
  styling: String,
  loading: Boolean
})
</script>
<style>
.loader {
  width: 16px;
  height: 16px;
  border: 2px solid;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
