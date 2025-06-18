<template>
  <div class="max-w-7xl mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6">Our Products</h1>

    <div
      class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <ProductCard
        v-for="(prod, index) in products"
        :key="index"
        :product="prod"
      />
    </div>
  </div>
</template>

<script setup>
import ProductCard from '@/components/Product.vue'

const products = [
  {
    title: "Mountain Bike",
    image: "https://i.pinimg.com/736x/46/7f/46/467f4630e2768b772baa2b74a2f6f1e4.jpg",
    description: "Conquer rugged trails with our premium mountain bikes.",
    price: 1200.00
  },
  {
    title: "Road Bike",
    image: "https://i.pinimg.com/736x/61/e7/57/61e7573adc55f1b335e7c6eba3e930f9.jpg",
    description: "Speed and performance for long-distance road cycling.",
    price: 399.99
  },
  {
    title: "Bike Accessories",
    image: "https://i.pinimg.com/736x/7b/e4/10/7be410674aca4172a09fe32dd76aa88e.jpg",
    description: "Helmets, gloves, and more to complete your riding experience.",
    price: 149.99
  },
    {
    title: "Kids Bike",
    image: "https://i.pinimg.com/736x/fb/03/69/fb03697c1d4e33231e6bc3db1f4a4fe1.jpg",
    description: "Safe and colorful bikes designed especially for kids.",
    price: 179.99
  }

]

</script>
