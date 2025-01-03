<template>
  <div class="mx-4 lg:mx-auto max-w-7xl mt-12">
    <HeadingComponent size="h1" styling="px-4 mb-12 text-onSurface">Dashboard</HeadingComponent>
    <!-- Posts -->
    <HeadingComponent size="h2" styling="px-4 mb-8 text-onSurface">Posts</HeadingComponent>
    <div class="grid auto-rows-fr grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
      <PostsComponent :posts="posts" :elements="6"></PostsComponent>
    </div>
    <ButtonFieldComponent
      text="All Posts"
      icon="arrow_forward_ios"
      route="posts"
    ></ButtonFieldComponent>
    <!-- Albums -->
    <HeadingComponent size="h2" styling="px-4 text-onSurface mb-8">Albums</HeadingComponent>
    <div class="grid auto-rows-fr grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
      <AlbumsComponent :albums="albums" :elements="6"></AlbumsComponent>
    </div>
    <ButtonFieldComponent
      text="All Albums"
      icon="arrow_forward_ios"
      route="albums"
    ></ButtonFieldComponent>
  </div>
</template>

<script setup lang="ts">
import { getPosts } from '../services/PostService'
import { getAlbums } from '../services/AlbumService'

const posts = await getPosts()
const albums = await getAlbums()
</script>

<style></style>
