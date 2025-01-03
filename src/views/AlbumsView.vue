<template>
  <div class="mx-4 lg:mx-auto max-w-7xl mt-12">
    <!-- Albums -->
    <HeadingComponent size="h2" styling="px-4 text-onSurface mb-8">Albums</HeadingComponent>
    <div class="grid auto-rows-fr grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
      <AlbumsComponent :albums="albums" :elements="12"></AlbumsComponent>
    </div>
    <ButtonFieldComponent
      text="All Albums"
      icon="arrow_forward_ios"
      route="albums"
    ></ButtonFieldComponent>
  </div>
</template>

<script setup lang="ts">
import { getAlbums } from '../services/AlbumService'

const albums = await getAlbums()
</script>
