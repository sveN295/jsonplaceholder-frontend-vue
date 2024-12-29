<template>
  <div v-if="props.show" class="fixed top-[40%] left-[40%]">
    <div class="bg-surfaceContainerHighest p-8 rounded-2xl shadow-2xl">
      Do you really want to delete this element?
      <div class="flex flex-row gap-2 mt-6 justify-end">
        <SimpleButton
          text="Delete"
          icon="delete"
          styling="bg-error text-onError"
          @click="$emit('modalConfirmed')"
        ></SimpleButton>
        <SimpleButton
          text="Cancel"
          styling="bg-surface text-onSurface"
          @click="$emit('modalCancelled')"
        ></SimpleButton>
      </div>
    </div>
  </div>
</template>
<script setup>
import SimpleButton from '../components/ButtonComponent.vue'

const emit = defineEmits(['modalConfirmed', 'modalCancelled'])

const props = defineProps({
  show: Boolean
})
</script>
