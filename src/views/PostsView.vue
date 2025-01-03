<template>
  <div class="mx-4 lg:mx-auto max-w-7xl mt-12">
    <HeadingComponent size="h2" styling="px-4 mb-8 text-onSurface">Posts</HeadingComponent>
    <div class="grid auto-rows-fr grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
      <PostsComponent :posts="posts" :elements="12"></PostsComponent>
    </div>
    <ButtonFieldComponent
      text="All Posts"
      icon="arrow_forward_ios"
      route="posts"
    ></ButtonFieldComponent>
  </div>
</template>

<script setup lang="ts">
import { getPosts } from '../services/PostService'

const posts = await getPosts()
</script>

<style></style>
