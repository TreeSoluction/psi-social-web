<script setup lang="ts">
import '../output.css'
defineProps<{
  title: string
  route?: string
  alert?: boolean
}>()
</script>

<template>
  <RouterLink
    :to="route ?? '/'"
    :class="[
      'flex font-bold text-blue-600 text-funnel min-h-12 min-w-40 max-w-40 justify-center text-center items-center rounded-xl hover:bg-blue-100 transition duration-200',
      { 'blink-animation': alert },
    ]"
  >
    {{ title }}
  </RouterLink>
</template>

<style scoped>
@keyframes blink {
  0% {
    scale: 1;
  }
  50% {
    scale: 1.1;
  }
  100% {
    scale: 1;
  }
}

.blink-animation {
  animation: blink 1s ease-in-out;
  animation-iteration-count: 3;
}
</style>
