<template>
    <nav class="bg-blue-600 text-white p-4 flex items-center">
        <div class="flex flex-1 items-center gap-8 ml-8">
            <img src="https://i.pinimg.com/736x/31/2c/4d/312c4dd879d2c75a7e7e87be5e544a08.jpg" alt="Logo" class="w-10 h-10" />
            <span class="text-xl font-bold">Shop Bike</span>
        </div>
        <div class="flex flex-1 gap-4 items-center justify-evenly">
            <router-link to="/" class="hover:underline">Home</router-link>
            <router-link to="/about" class="hover:underline">About</router-link>
            <router-link to="/content" class="hover:underline">Content</router-link>
            <router-link to="/services" class="hover:underline">Services</router-link>
        </div>
    </nav>
</template>

<script setup lang="ts">

</script>
