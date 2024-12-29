<template>
  <div
    class="flex flex-row justify-around border-solid border-b border-outlineVariant cursor-pointer mb-4 text-onSurface"
  >
    <div
      class="flex flex-col items-center gap-1 py-2 px-4 border-solid w-full hover:bg-secondaryContainer"
      :class="{ 'text-primary border-b-2 border-primary': activeTab === 'posts' }"
      @click="setActiveTab('posts')"
    >
      <span class="material-symbols-outlined">newspaper</span>
      <div>Posts</div>
    </div>
    <div
      class="flex flex-col items-center gap-1 py-2 px-4 border-solid w-full hover:bg-secondaryContainer"
      :class="{ 'text-primary border-b-2 border-primary': activeTab === 'albums' }"
      @click="setActiveTab('albums')"
    >
      <span class="material-symbols-outlined">image</span>
      <div>Albums</div>
    </div>
    <div
      class="flex flex-col items-center gap-1 py-2 px-4 border-solid w-full hover:bg-secondaryContainer"
      :class="{ 'text-primary border-b-2 border-primary': activeTab === 'todos' }"
      @click="setActiveTab('todos')"
    >
      <span class="material-symbols-outlined">check_box</span>
      <div>To Dos</div>
    </div>
  </div>
  <slot name="posts" v-if="activeTab === 'posts'"></slot>
  <slot name="albums" v-if="activeTab === 'albums'"></slot>
  <slot name="todos" v-if="activeTab === 'todos'"></slot>
</template>
<script setup>
import { ref } from 'vue'

const activeTab = ref('posts')

function setActiveTab(tab) {
  activeTab.value = tab
}
</script>
