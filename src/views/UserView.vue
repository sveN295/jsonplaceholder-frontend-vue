<template>
  <div class="mx-4 lg:mx-auto max-w-7xl">
    <div class="grid grid-cols-1 lg:grid-cols-3 mt-12 lg:gap-12">
      <!-- Tabs -->
      <div class="col-span-2 order-2 lg:order-1">
        <UserTabsComponent>
          <template v-slot:posts>
            <div class="grid auto-rows-fr grid-cols-1 lg:grid-cols-2 gap-4 mb-4 mt-8 lg:mt-0">
              <PostsComponent :posts="posts" :elements="6" hideUser></PostsComponent>
            </div>
          </template>
          <template v-slot:albums>
            <div class="grid auto-rows-fr grid-cols-1 lg:grid-cols-2 gap-4 mb-4 mt-8 lg:mt-0">
              <AlbumsComponent :albums="albums" :elements="6" hideUser></AlbumsComponent>
            </div>
          </template>
          <template v-slot:todos>
            <div class="bg-surfaceContainerLowest rounded-xl p-8 text-onSurface">
              <ul>
                <li v-for="(todo, index) in todos" v-bind:key="todo.id" class="mb-6">
                  <div class="flex flex-row gap-4 items-center justify-between group">
                    <div class="flex flex-row gap-4 items-center">
                      <span
                        class="material-symbols-outlined cursor-pointer group-hover:text-primary"
                        :class="{ 'text-primary': todo.completed }"
                        @click="toggleTodo(index)"
                        >{{ isTodoChecked(index) ? 'check_box' : 'check_box_outline_blank' }}</span
                      >
                      <div class="group-hover:text-secondary">
                        {{ todo.title }}
                      </div>
                    </div>
                    <span
                      class="material-symbols-outlined cursor-pointer hover:text-error"
                      @click="deleteTodo(index)"
                      >delete</span
                    >
                  </div>
                </li>
              </ul>
            </div>
          </template>
        </UserTabsComponent>
      </div>
      <!-- User Information -->
      <div class="col-span-1 order-1 lg:order-2 text-onSurface">
        <div class="text-primary">User Profile</div>
        <HeadingComponent size="h1" styling="text-onSurface mb-6">
          {{ user?.data.name }}
        </HeadingComponent>
        <div class="bg-surfaceContainerLowest rounded-xl p-8">
          <div class="mb-10">
            <div class="flex flex-row gap-4 items-center mb-4">
              <span class="material-symbols-outlined md-30 text-primary">home_pin</span>
              <HeadingComponent size="h2" styling="text-onSurface">Address</HeadingComponent>
            </div>
            <div class="pl-4 leading-8">
              <p>{{ user?.data.address.street }} {{ user?.data.address.suite }}</p>
              <p>{{ user?.data.address.zipcode }} {{ user?.data.address.city }}</p>
            </div>
          </div>
          <div class="mb-10">
            <div class="flex flex-row gap-4 items-center mb-4">
              <span class="material-symbols-outlined md-30 text-primary">contact_page</span>
              <HeadingComponent size="h2" styling="text-onSurface">Contact</HeadingComponent>
            </div>
            <div class="pl-4 leading-8">
              <p class="flex flex-row items-center gap-4 mb-1">
                <span class="material-symbols-outlined text-primary">call</span>
                {{ user?.data.phone }}
              </p>
              <p class="flex flex-row items-center gap-4 mb-1">
                <span class="material-symbols-outlined text-primary">mail</span>
                {{ user?.data.email }}
              </p>
              <p class="flex flex-row items-center gap-4 mb-1">
                <span class="material-symbols-outlined text-primary">language</span>
                {{ user?.data.website }}
              </p>
            </div>
          </div>
          <div>
            <div class="flex flex-row gap-4 items-center mb-4">
              <span class="material-symbols-outlined md-30 text-primary">apartment</span>
              <HeadingComponent size="h2" styling="text-onSurface">Company</HeadingComponent>
            </div>
            <div class="pl-4 leading-8">
              <p>{{ user?.data.company.name }}</p>
              <p>{{ user?.data.company.catchPhrase }}.</p>
              <p>{{ user?.data.company.bs }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { getUser, getUserTodos } from '../services/UserService'
import { getUserPosts } from '../services/PostService'
import { getUserAlbums } from '../services/AlbumService'

const todos = ref<any[]>([])

const props = defineProps({
  id: String
})

const user = await getUser(props.id)
todos.value = await getUserTodos(props.id)
const posts = await getUserPosts(props.id)
const albums = await getUserAlbums(props.id)

function isTodoChecked(index: number) {
  return todos.value[index].completed
}

function toggleTodo(index: number) {
  todos.value[index].completed = !todos.value[index].completed
}

function deleteTodo(index: number) {
  todos.value.splice(index, 1)
}
</script>
