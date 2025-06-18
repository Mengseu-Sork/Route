<template>
  <li
    class="hover:text-blue-600 cursor-pointer"
  >
    {{ text }}
  </li>
</template>

<script setup>
defineProps({
  text: String
});
</script>
