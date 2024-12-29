<template>
  <div class="mx-4 lg:mx-auto max-w-7xl mt-12">
    <HeadingComponent size="h1" styling="px-4 mb-12 text-onSurface">Dashboard</HeadingComponent>
    <!-- Posts -->
    <HeadingComponent size="h2" styling="px-4 mb-8 text-onSurface">Posts</HeadingComponent>
    <div class="grid auto-rows-fr grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
      <Posts :posts="posts" :elements="6"></Posts>
    </div>
    <ButtonField text="All Posts" icon="arrow_forward_ios" route="posts"></ButtonField>
    <!-- Albums -->
    <HeadingComponent size="h2" styling="px-4 text-onSurface mb-8">Albums</HeadingComponent>
    <div class="grid auto-rows-fr grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
      <Albums :albums="albums" :elements="6"></Albums>
    </div>
    <ButtonField text="All Albums" icon="arrow_forward_ios" route="albums"></ButtonField>
  </div>
</template>

<script setup lang="ts">
import { getPosts } from '../services/PostService'
import ButtonField from '../components/ButtonFieldComponent.vue'
import { getAlbums } from '../services/AlbumService'
import Posts from '../components/PostsComponent.vue'
import Albums from '../components/AlbumsComponent.vue'

const posts = await getPosts()
const albums = await getAlbums()
</script>

<style></style>
