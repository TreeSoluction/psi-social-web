<script setup lang="ts">
import '../output.css'
import RouterButton from './RouterButton.vue'
</script>

<template>
  <div
    class="flex border-2 rounded-none hover:rounded-xl border-blue-600 transition duration-1000"
  >
    <RouterButton title="Sou Psicologo" route="/psi/register" alert="true" />
  </div>
</template>
