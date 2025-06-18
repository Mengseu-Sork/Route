<template>
  <div
    class="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col"
  >
    <img :src="product.image" alt="" class="rounded-md object-cover w-64 h-56 mb-3" />
    <h3 class="font-bold text-lg mb-1">{{ product.title }}</h3>
    <p class="text-gray-600 flex-grow">{{ product.description }}</p>
    <p class="mt-2 font-semibold text-blue-700">${{ product.price.toFixed(2) }}</p>
  </div>
</template>

<script setup>
defineProps({
  product: Object
})
</script>
