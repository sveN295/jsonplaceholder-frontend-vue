<template>
  <div v-for="album in props.albums.slice(0, elements)" v-bind:key="album.id" class="relative">
    <router-link :to="{ name: 'album', params: { id: album.id } }">
      <Card>
        <template v-slot:image>
          <img
            src="/images/E3E3E3-150x150.png"
            class="rounded-t-2xl overflow-hidden w-full h-48 object-cover"
          />
        </template>
        <template v-slot:subheading>Album</template>
        <template v-slot:header>
          {{ album.title }}
        </template>
        <template v-slot:footer>
          <div class="flex flex-row gap-4">
            <div class="flex flex-row gap-2 items-center">
              <span class="material-symbols-outlined icon-base">image</span>
              <span>{{ Math.round(Math.random() * 100) }}</span>
            </div>
            <div class="flex flex-row gap-2 items-center" v-if="!props.hideUser">
              <span class="material-symbols-outlined icon-base">person</span>
              <span>
                {{ userNames.get(album.userId) }}
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
  albums: Array,
  elements: Number,
  hideUser: Boolean
})
</script>
