<template>
  <div class="mx-4 lg:mx-auto max-w-7xl rounded-full bg-surfaceContainer hidden lg:block">
    <div class="flex flex-wrap justify-between items-center">
      <span class="py-6 px-16 font-semibold text-onSurface">
        JSON Placeholder Frontend with Vue.js
      </span>
      <ul class="flex flex-wrap">
        <li>
          <router-link :to="{ name: 'home' }">
            <div
              class="flex gap-2 text-onSurface font-semibold py-6 px-8 rounded-full transition ease-in-out duration-300 hover:bg-secondaryContainer"
              :class="route.name === 'home' ? 'active text-primary bg-surfaceContainerHighest' : ''"
            >
              <span class="material-symbols-outlined">home</span>
              <span>Home</span>
            </div>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'posts' }">
            <div
              class="flex gap-2 text-onSurface font-semibold py-6 px-8 rounded-full transition ease-in-out duration-300 hover:bg-secondaryContainer"
              :class="
                route.name === 'posts' ? 'active text-primary bg-surfaceContainerHighest' : ''
              "
            >
              <span class="material-symbols-outlined">newspaper</span>
              <span>Posts</span>
            </div>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'users' }">
            <div
              class="flex gap-2 text-onSurface font-semibold py-6 px-8 rounded-full transition ease-in-out duration-300 hover:bg-secondaryContainer"
              :class="
                route.name === 'users' ? 'active text-primary bg-surfaceContainerHighest' : ''
              "
            >
              <span class="material-symbols-outlined">group</span>
              <span>Users</span>
            </div>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'albums' }">
            <div
              class="flex gap-2 text-onSurface font-semibold py-6 px-8 rounded-full transition ease-in-out duration-300 hover:bg-secondaryContainer"
              :class="
                route.name === 'albums' ? 'active text-primary bg-surfaceContainerHighest' : ''
              "
            >
              <span class="material-symbols-outlined">photo_library</span>
              <span>Albums</span>
            </div>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'admin' }">
            <div
              class="flex gap-2 text-onSurface font-semibold py-6 px-8 rounded-full transition ease-in-out duration-300 hover:bg-secondaryContainer"
              :class="
                route.name === 'admin' ? 'active text-primary bg-surfaceContainerHighest' : ''
              "
            >
              <span class="material-symbols-outlined">settings</span>
              <span>Admin</span>
            </div>
          </router-link>
        </li>
      </ul>
      <div class="cursor-pointer pr-8" @click="$emit('toggleDarkMode')">
        <div
          class="grid grid-cols-2 bg-secondaryContainer rounded-full items-center shadow transition duration-500 ease-in-out"
        >
          <span
            class="material-symbols-outlined text-onPrimary bg-primary rounded-full order-2 p-1"
            >{{ props.darkMode ? 'dark_mode' : 'light_mode' }}</span
          >
          <div :class="props.darkMode ? 'order-2' : 'order-1'"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="lg:hidden grid grid-cols-10 items-center bg-surfaceContainer text-onSurface">
    <span class="p-6 font-semibold text-onSurface col-span-7">
      JSON Placeholder Frontend with Vue.js
    </span>
    <div class="cursor-pointer pr-8" @click="$emit('toggleDarkMode')">
      <span class="material-symbols-outlined text-onSurface">{{
        props.darkMode ? 'dark_mode' : 'light_mode'
      }}</span>
    </div>
    <HamburgerMenu icon="menu" class="col-span-2 mx-auto">
      <ul>
        <li>
          <router-link :to="{ name: 'home' }">
            <div
              class="flex gap-2 text-onSurface py-4 px-6 rounded-full transition ease-in-out duration-300 items-center"
              :class="route.name === 'home' ? 'active text-primary' : ''"
            >
              <span class="material-symbols-outlined icon-base">home</span>
              <span>Home</span>
            </div>
          </router-link>
        </li>
        <li>
          <hr class="border-outlineVariant" />
          <router-link :to="{ name: 'posts' }">
            <div
              class="flex gap-2 text-onSurface py-4 px-6 rounded-full transition ease-in-out duration-300 items-center"
              :class="route.name === 'posts' ? 'active text-primary' : ''"
            >
              <span class="material-symbols-outlined icon-base">newspaper</span>
              <span>Posts</span>
            </div>
          </router-link>
        </li>
        <li>
          <hr class="border-outlineVariant" />
          <router-link :to="{ name: 'users' }">
            <div
              class="flex gap-2 text-onSurface py-4 px-6 rounded-full transition ease-in-out duration-300 items-center"
              :class="route.name === 'users' ? 'active text-primary' : ''"
            >
              <span class="material-symbols-outlined icon-base">group</span>
              <span>Users</span>
            </div>
          </router-link>
        </li>
        <li>
          <hr class="border-outlineVariant" />
          <router-link :to="{ name: 'albums' }">
            <div
              class="flex gap-2 text-onSurface py-4 px-6 rounded-full transition ease-in-out duration-300 items-center"
              :class="route.name === 'albums' ? 'active text-primary' : ''"
            >
              <span class="material-symbols-outlined icon-base">photo_library</span>
              <span>Albums</span>
            </div>
          </router-link>
        </li>
        <li>
          <hr class="border-outlineVariant" />
          <router-link :to="{ name: 'admin' }">
            <div
              class="flex gap-2 text-onSurface py-4 px-6 rounded-full transition ease-in-out duration-300 items-center"
              :class="route.name === 'admin' ? 'active text-primary' : ''"
            >
              <span class="material-symbols-outlined icon-base">photo_library</span>
              <span>Admin</span>
            </div>
          </router-link>
        </li>
      </ul>
    </HamburgerMenu>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import HamburgerMenu from '../components/HamburgerMenuComponent.vue'

const emit = defineEmits(['toggleDarkMode'])

const props = defineProps({
  darkMode: Boolean
})

const route = useRoute()
</script>

<style></style>
