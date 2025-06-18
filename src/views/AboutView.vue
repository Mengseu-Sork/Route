<template>
  <div class="bg-gray-100 flex gap-8 p-6">
    <Card
      v-for="(item, index) in cards"
      :key="index"
      :title="item.title"
      :image="item.image"
      :content="item.content"
    />
  </div>
</template>

<script setup>
import Card from '../components/Card.vue';

const cards = [
  {
    title: "Mountain Bike",
    image: "https://i.pinimg.com/736x/46/7f/46/467f4630e2768b772baa2b74a2f6f1e4.jpg",
    content: "Conquer rugged trails with our premium mountain bikes."
  },
  {
    title: "Road Bike",
    image: "https://i.pinimg.com/736x/61/e7/57/61e7573adc55f1b335e7c6eba3e930f9.jpg",
    content: "Speed and performance for long-distance road cycling."
  },
  {
    title: "Bike Accessories",
    image: "https://i.pinimg.com/736x/7b/e4/10/7be410674aca4172a09fe32dd76aa88e.jpg",
    content: "Helmets, gloves, and more to complete your riding experience."
  },
  {
    title: "Electric Bike",
    image: "https://i.pinimg.com/736x/4e/89/34/4e89345260530e35423908b4c235b77e.jpg",
    content: "Eco-friendly and powerful rides for urban commuting."
  },
  {
    title: "Kids Bike",
    image: "https://i.pinimg.com/736x/fb/03/69/fb03697c1d4e33231e6bc3db1f4a4fe1.jpg",
    content: "Safe and colorful bikes designed especially for kids."
  }
];

</script>

