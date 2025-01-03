<template>
  <div class="mx-auto max-w-4xl mt-4">
    <div class="grid grid-cols-12 mb-2">
      <div class="col-start-2 col-span-10">
        <img src="/images/E3E3E3-600x600.png" class="w-full h-96 object-cover rounded-lg" />
      </div>
    </div>
    <div class="grid grid-cols-12 justify-items-center">
      <div class="max-w-lg mr-4 mt-12">
        <button
          class="rounded-full bg-primary text-onPrimary py-1 px-2 transition ease-in-out duration-500 hover:opacity-[0.92] hover:shadow hover:scale-105"
          @click="router.back()"
        >
          <span class="material-symbols-outlined my-2 mx-1">arrow_back</span>
        </button>
      </div>
      <div class="col-span-10 bg-surfaceContainerLowest rounded-xl p-12">
        <HeadingComponent size="h1" styling="text-onSurface">{{
          post?.data.title
        }}</HeadingComponent>
        <div class="text-primary mt-2">
          {{ userNames.get(post?.data.userId) }}
        </div>
        <div class="mt-8 text-onSurface">
          <p class="mb-2">{{ post?.data.body }} {{ post?.data.body }}</p>
          <p class="mb-8">{{ post?.data.body }}</p>
          <HeadingComponent size="h2"
            ><span class="text-onSurface">This is a subheading</span></HeadingComponent
          >
          <p class="mb-2 mt-4">{{ post?.data.body }}{{ post?.data.body }}</p>
          <p>{{ post?.data.body }}{{ post?.data.body }}</p>
        </div>
        <!-- Comments -->
        <div class="bg-surfaceContainerLow rounded-xl p-8 mt-8 text-onSurface">
          <h2 id="comments" class="text-2xl mb-8 flex flex-row gap-4 items-center">
            <span class="material-symbols-outlined icon-large">comment</span>
            <span>{{ replies.length }} Comments</span>
          </h2>
          <div v-for="reply in replies" v-bind:key="reply.id">
            <div class="grid grid-cols-8">
              <div class="col-span-7">
                <div class="flex flex-row gap-4 mb-2 items-center">
                  <span
                    class="rounded-full bg-tertiaryContainer text-onTertiaryContainer px-3 py-1"
                    >{{ reply.email.slice(0, 1) }}</span
                  >
                  <div class="d-flex gap-2">
                    <span class="font-semibold">{{ reply.email }}</span>
                  </div>
                </div>
                <span>
                  {{ reply.name }}
                </span>
                <p class="mt-1 mb-4">{{ reply.body }}</p>
                <p class="text-outline mb-8">Antworten</p>
              </div>
              <div class="flex flex-col align-center items-center mt-8">
                <span class="material-symbols-outlined text-lg">favorite</span>
                <span>{{ Math.round(Math.random() * 10) }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-lg">
        <div class="flex flex-col flex-wrap gap-6 mt-12 text-onSurface">
          <span
            class="material-symbols-outlined md-30 cursor-pointer transition ease-in-out duration-500 hover:text-primary"
            >favorite</span
          >
          <span
            class="material-symbols-outlined md-30 cursor-pointer transition ease-in-out duration-500 hover:text-primary"
            >bookmark</span
          >
          <span
            class="material-symbols-outlined md-30 cursor-pointer transition ease-in-out duration-500 hover:text-primary"
            >share</span
          >
          <a href="#comments">
            <div class="relative">
              <span
                class="material-symbols-outlined md-30 cursor-pointer transition ease-in-out duration-500 hover:text-primary"
                >chat_bubble</span
              >
              <div
                class="bg-tertiary text-onTertiary rounded-full text-xs py-1 px-2 text-center absolute -top-3 -right-3"
              >
                {{ replies.length }}
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getPost, getComments } from '../services/PostService'
import router from '@/router'
import { getUserNames } from '../services/UserService'

const userNames = await getUserNames()

const props = defineProps({
  id: String
})

const post = await getPost(props.id)
const replies = await getComments(props.id)
</script>
