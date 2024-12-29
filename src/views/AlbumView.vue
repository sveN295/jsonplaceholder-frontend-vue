<template>
  <div v-if="showScrim">
    <div class="fixed top-0 w-full h-full bg-scrim/75 flex align-center"></div>
    <div class="fixed mx-4 lg:mx-0 lg:top-[15%] lg:left-1/3">
      <img :src="photos[lightboxPhoto].url" class="rounded-2xl" />
      <div class="mt-4 ml-3 text-xl text-secondaryFixed">
        {{ photos[lightboxPhoto].title }}
      </div>
      <button
        class="absolute top-2 right-2 lg:right-[-60px] rounded-full bg-surface text-onSurface py-1 px-2 transition ease-in-out duration-500 hover:opacity-[0.92] shadow hover:scale-105"
        @click="toggleScrim(0)"
      >
        <span class="material-symbols-outlined my-2 mx-1">close</span>
      </button>
    </div>
  </div>
  <div class="mx-4 lg:mx-auto max-w-7xl">
    <div class="mt-12 mb-8">
      <div class="text-primary text-xl">Album</div>
      <HeadingComponent size="h1" styling="text-onSurface">
        {{ album?.data.title }}
      </HeadingComponent>
      <div class="flex flex-row gap-2 items-center mt-2 text-onSurface">
        <span class="material-symbols-outlined icon-base">person</span>
        <span>
          {{ userNames.get(album.data.userId) }}
        </span>
      </div>
    </div>
    <div class="bg-surfaceContainerLowest rounded-xl p-8">
      <div class="grid grid-cols-3 lg:grid-cols-6 gap-6 justify-around">
        <div
          v-for="(photo, index) in photos"
          v-bind:key="photo.id"
          class="cursor-pointer rounded-2xl flex justify-center"
          @click="toggleScrim(index)"
        >
          <img
            :src="photo.thumbnailUrl"
            class="rounded-2xl object-fill hover:shadow-lg hover:outline outline-1 outline-outlineVariant"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getAlbum, getAlbumPhotos } from '../services/AlbumService'
import { getUserNames } from '../services/UserService'

const props = defineProps({
  id: String
})

const showScrim = ref(false)
const lightboxPhoto = ref(0)

const userNames = await getUserNames()
const album = await getAlbum(props.id)
const photos = await getAlbumPhotos(album.data.userId)

function toggleScrim(index: number) {
  showScrim.value = !showScrim.value
  lightboxPhoto.value = index
}
</script>
