<template>
  <div class="flex flex-col lg:flex-row h-[450px] w-[900px] bg-gray-100">
    <div class="flex-1 bg-white bg-opacity-90 backdrop-blur-sm shadow-xl rounded-lg p-8 m-4 space-y-6">
      <h2 class="text-2xl font-bold text-blue-700 text-center">Contact Speedy Bike Shop</h2>

      <form @submit.prevent="submitForm" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            v-model="form.name"
            class="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            v-model="form.email"
            class="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Bike Type</label>
          <select
            v-model="form.bikeType"
            class="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            required
          >
            <option disabled value="">Select a type</option>
            <option v-for="(type, idx) in bikeTypes" :key="idx" :value="type">{{ type }}</option>
          </select>
        </div>

        <button
          type="submit"
          class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
        >
          Send Message
        </button>
      </form>
    </div>

    <!-- Map Section -->
    <div class="flex-1 m-4">
        <iframe
            class="w-full h-full rounded-lg shadow-lg"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15641.775476529713!2d104.87228355!3d11.55086615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951add5e2cd81%3A0x171e0b69c7c6f7ba!2sPasserelles%20num%C3%A9riques%20Cambodia%20(PNC)!5e0!3m2!1sen!2skh!4v1718700000000!5m2!1sen!2skh"
        />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const bikeTypes = [
  'Mountain Bike',
  'Road Bike',
  'Electric Bike',
  'City Bike'
]

const form = reactive({
  name: '',
  email: '',
  bikeType: '',
  message: ''
})

function submitForm() {
  alert(`Thanks, ${form.name}! Your message was sent.`)
}
</script>
