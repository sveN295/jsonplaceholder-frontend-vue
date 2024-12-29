<template>
  <div v-for="post in props.posts.slice(0, elements)" v-bind:key="post.id">
    <router-link :to="{ name: 'post', params: { id: post.id } }" class="">
      <Card>
        <template v-slot:image>
          <img
            src="/images/E3E3E3-150x150.png"
            class="rounded-t-2xl overflow-hidden w-full h-48 object-cover"
          />
        </template>
        <template v-slot:subheading>Post</template>
        <template v-slot:header>
          {{ post.title }}
        </template>
        <template v-slot:footer>
          <div class="flex flex-row gap-4 text-onSurface">
            <div class="flex flex-row gap-2 items-center">
              <span class="material-symbols-outlined icon-base">favorite</span>
              <span>{{ Math.round(Math.random() * 100) }}</span>
            </div>
            <div class="flex flex-row gap-2 items-center" v-if="!props.hideUser">
              <span class="material-symbols-outlined icon-base">person</span>
              <span>
                {{ userNames.get(post.userId) }}
              </span>
            </div>
          </div>
        </template>
      </Card>
    </router-link>
  </div>
</template>
<script setup>
import Card from '../components/CardComponent.vue'
import { getUserNames } from '../services/UserService'

const userNames = await getUserNames()

const props = defineProps({
  posts: Array,
  elements: Number,
  hideUser: Boolean
})
</script>
