<template>
  <div class="mx-auto max-w-4xl mt-12">
    <HeadingComponent size="h1" styling="px-4 mb-12 text-onSurface">Edit Post</HeadingComponent>
    <div class="px-4">
      <div class="relative">
        <label for="title" class="absolute px-3 pt-2 text-xs text-outline">Author</label>
        <div
          class="mb-6 bg-surfaceContainerHighest px-3 pb-2 pt-6 rounded-t-sm border-b border-primary w-full focus:outline-primary"
        >
          <select v-model="selected" class="bg-transparent w-full">
            <option v-for="(user, index) in userNames" v-bind:key="index" :value="index + 1">
              {{ userNames.get(index + 1) }}
            </option>
          </select>
        </div>
      </div>
      <div class="relative">
        <label for="title" class="absolute px-3 pt-2 text-xs text-outline">Title</label>
        <input
          type="text"
          id="title"
          v-model="title"
          class="mb-6 bg-surfaceContainerHighest px-3 pb-2 pt-6 rounded-t-sm border-b border-primary w-full focus:outline-primary"
        />
      </div>
      <div class="relative">
        <label for="body" class="absolute px-3 pt-2 text-xs text-outline">Body</label>
        <textarea
          type="text"
          id="body"
          v-model="body"
          class="mb-12 bg-surfaceContainerHighest px-3 pb-2 pt-6 rounded-t-sm border-b border-primary w-full h-48 focus:outline-primary"
        />
      </div>
      <div class="flex flex-row justify-between">
        <div class="text-green-500" :class="{ 'text-error': error }">
          {{ message }}
        </div>
        <div class="flex flex-row gap-2">
          <ButtonComponent
            text="Cancel"
            styling="bg-surfaceContainerHighest text-onSurfaceContainer"
            @click="router.back()"
          ></ButtonComponent>
          <ButtonComponent
            text="Save"
            styling="bg-primary text-onPrimary"
            :loading="loading"
            @click="submitForm"
          ></ButtonComponent>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { getPost, updatePost } from '../services/PostService'
import router from '@/router'
import { getUserNames } from '../services/UserService'

const userNames = await getUserNames()

const props = defineProps({
  id: String
})

const post = await getPost(props.id)
var selected = ref(post?.data.userId)
var title = ref(post?.data.title)
var body = ref(post?.data.body)
var message = ref('')
var error = ref(false)
var loading = ref(false)

async function submitForm() {
  loading.value = true

  if (props.id && title && body && selected) {
    const res = await updatePost(props.id, title.value, body.value, selected.value)

    if (res === 200) {
      message.value = 'Post saved.'
      loading.value = false
    } else {
      error.value = true
      message.value = 'Error: Saving post failed. Response code ' + res
      loading.value = false
    }
  }
}
</script>
