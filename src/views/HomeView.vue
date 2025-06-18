<template>
  <div
    class="p-6 h-[430px] flex flex-col items-center text-center overflow-y-auto bg-cover bg-center"
    style="background-image: url('https://i.pinimg.com/736x/26/4e/4b/264e4b0ccc84dbeb6e32d4bac269755e.jpg');"
  >
    <div class="bg-white bg-opacity-80 p-6 rounded-lg max-w-5xl w-full">
      <h1 class="text-4xl font-bold text-blue-700 mb-4">{{ title }}</h1>
      <p class="text-lg text-gray-700 max-w-xl mx-auto mb-6">
        {{ paragraph }}
      </p>

      <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 w-full">
        <div
          v-for="(category, index) in categories"
          :key="index"
          class="bg-white p-6 rounded-lg shadow hover:shadow-xl transition"
        >
          <h3 class="font-bold text-lg mb-2">{{ category.title }}</h3>
          <p class="text-gray-600 text-sm">{{ category.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const title = "Welcome to Speedy Bike Shop";
const paragraph = "Discover high-quality bicycles, parts, and accessories for every rider — from beginners to pros.";
const categories = [
  {
    title: "Mountain Bikes",
    description: "Durable and powerful bikes for off-road adventures."
  },
  {
    title: "City Bikes",
    description: "Smooth and stylish bikes perfect for urban commuting."
  },
  {
    title: "Accessories",
    description: "Helmets, lights, locks, and more to keep you safe and secure."
  },
  {
    title: "Repair Services",
    description: "Fast and reliable bike maintenance by expert mechanics."
  }
];
</script>
