<template>
  <div class="max-w-7xl mx-auto my-8">
    <div class="">
      <ModalComponent
        :show="showModal"
        @modal-cancelled="modalCancelled"
        @modal-confirmed="modalConfirmed"
      ></ModalComponent>
    </div>
    <HeadingComponent size="h1" styling="px-4 mb-12 text-onSurface"
      >Administration</HeadingComponent
    >
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 px-2 lg:px-0">
      <div>
        <HeadingComponent size="h2" styling="px-4 mb-8 text-onSurface">Users</HeadingComponent>
        <ul class="bg-surfaceContainerLowest rounded-xl p-8 mt-4">
          <li v-for="(user, index) in users" v-bind:key="user.id" class="mb-6">
            <div class="flex flex-row justify-between">
              <div class="flex flex-row gap-4 items-center text-onSurface">
                <span class="rounded-full bg-primaryContainer text-onPrimaryContainer px-3 py-1">{{
                  user.name.slice(0, 1)
                }}</span>
                <span>{{ user.name }}</span>
              </div>
              <div class="flex flex-row gap-4 items-center">
                <ButtonComponent
                  text="Delete"
                  icon="delete"
                  styling="bg-error text-onError"
                  @click="toggleModal('users', index)"
                ></ButtonComponent>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <HeadingComponent size="h2" styling="px-4 mb-8 text-onSurface">Posts</HeadingComponent>
        <div class="bg-surfaceContainerLowest rounded-xl py-8 pl-8 pr-2 mt-4">
          <ul class="max-h-[75vh] overflow-y-scroll pr-2 pb-2">
            <li v-for="(post, index) in posts" v-bind:key="post.id" class="mb-6">
              <div class="flex flex-row justify-between">
                <div class="flex flex-row gap-4 items-center text-onSurface">
                  <span>{{ post.title }}</span>
                </div>
                <div class="flex flex-row gap-2 items-center">
                  <router-link :to="{ name: 'edit.post', params: { id: post.id } }">
                    <ButtonComponent
                      text="Edit"
                      icon="edit"
                      styling="bg-primary text-onPrimary"
                      @click="toggleModal('posts', index)"
                    ></ButtonComponent>
                  </router-link>
                  <ButtonComponent
                    text="Delete"
                    icon="delete"
                    styling="bg-error text-onError"
                    @click="toggleModal('posts', index)"
                  ></ButtonComponent>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <HeadingComponent size="h2" styling="px-4 mb-8 text-onSurface">Albums</HeadingComponent>
        <div class="bg-surfaceContainerLowest rounded-xl py-8 pl-8 pr-2 mt-4">
          <ul class="max-h-[75vh] overflow-y-scroll pr-2 pb-2">
            <li v-for="(album, index) in albums" v-bind:key="album.id" class="mb-6">
              <div class="flex flex-row justify-between">
                <div class="flex flex-row gap-4 items-center text-onSurface">
                  <span>{{ album.title }}</span>
                </div>
                <div class="flex flex-row gap-4 items-center">
                  <ButtonComponent
                    text="Delete"
                    icon="delete"
                    styling="bg-error text-onError"
                    @click="toggleModal('albums', index)"
                  ></ButtonComponent>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { getUsers } from '../services/UserService'
import { getPosts } from '../services/PostService'
import { getAlbums } from '@/services/AlbumService'

const users = ref<any[]>([])
const posts = ref<any[]>([])
const albums = ref<any[]>([])
const showModal = ref(false)
const modalArray = ref('')
const modalIndex = ref(0)

users.value = await getUsers()
posts.value = await getPosts()
albums.value = await getAlbums()

function toggleModal(arrayName: string, index: number) {
  console.log(index)
  modalArray.value = arrayName
  modalIndex.value = index
  showModal.value = true
}

function modalConfirmed() {
  switch (modalArray.value) {
    case 'users':
      users.value.splice(modalIndex.value, 1)
      break
    case 'posts':
      posts.value.splice(modalIndex.value, 1)
      break
    case 'albums':
      albums.value.splice(modalIndex.value, 1)
      break
    default:
      break
  }

  modalCancelled()
}

function modalCancelled() {
  showModal.value = false
  modalArray.value = ''
  modalIndex.value = 0
}
</script>
