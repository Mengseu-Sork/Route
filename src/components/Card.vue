<template>
  <div class="max-w-sm h-[380px] w-[220px] rounded overflow-hidden shadow-lg bg-white">
    <img
      class="w-56 h-56 object-cover"
      :src="image"
      :alt="title"
    />
    <div class="px-6 py-4">
      <h3 class="font-bold text-xl mb-2">{{ title }}</h3>
      <p class="text-gray-700 text-base">{{ content }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  image: String,
  content: String,
});
</script>
