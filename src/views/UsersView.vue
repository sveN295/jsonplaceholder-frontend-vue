<template>
  <div class="max-w-7xl mx-auto my-8">
    <HeadingComponent size="h1" styling="px-4 text-onSurface mb-12">Users</HeadingComponent>
    <div class="grid grid-cols-2 lg:grid-cols-6 gap-4 mx-4 lg:mx-0">
      <div v-for="(user, index) in users" v-bind:key="user.id" class="mb-6">
        <router-link :to="{ name: 'user', params: { id: user.id } }" class="">
          <CardComponent>
            <template v-slot:image>
              <div
                class="rounded-xl bg-primaryContainer text-onPrimaryContainer px-8 py-4 mt-4 max-w-8 mx-auto flex justify-center"
              >
                <span class="text-3xl text-center">{{ user.name.slice(0, 1) }}</span>
              </div></template
            >
            <template v-slot:body
              ><div class="flex justify-center text-center">
                <span>{{ user.name }}</span>
              </div></template
            >
          </CardComponent>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { getUsers } from '../services/UserService'

const users = ref<any[]>([])

users.value = await getUsers()
</script>
