<template>
  <div class="max-w-[762px] p-4 rounded-lg flex flex-col items-center md:flex-row hover:scale-105 hover:shadow-lg transition-transform duration-300">
    <img :src="image" alt="Project Logo" class="w-full md:w-[208px] h-auto rounded-lg mb-4 md:mb-0" />
    <div class="text-left w-full md:pl-4">
      <h4 class="text-xl font-bold">{{ title }}</h4>
      <p class="text-lg font-thin mt-2">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
})
</script>
