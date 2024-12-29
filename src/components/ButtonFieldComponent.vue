<template>
  <router-link :to="{ name: props.route }" class="">
    <div
      class="rounded-full mb-8 flex flex-row justify-end group transition ease-in-out duration-500 text-onSurface"
    >
      <div
        class="bg-surfaceContainer transition ease-in-out duration-500 group-hover:bg-secondaryContainer rounded-full flex flex-row gap-4 items-center justify-between p-2 w-48"
      >
        <span class="pl-4 font-semibold group-hover:text-onSecondaryContainer">{{
          props.text
        }}</span>
        <div
          class="rounded-full bg-primary text-onPrimary py-1 px-2 transition ease-in-out duration-500 group-hover:opacity-[0.92]"
        >
          <span class="material-symbols-outlined my-2 mx-1 icon-base">{{ props.icon }}</span>
        </div>
      </div>
    </div>
  </router-link>
</template>
<script setup>
const props = defineProps({
  text: String,
  icon: String,
  route: String
})
</script>
