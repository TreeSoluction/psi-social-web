<script setup lang="ts">
import "../output.css";
  defineProps<{
    title: string,
    route?: string
  }>()
</script>

<template>  
    <RouterLink 
      to="user/register" 
      class="flex font-bold text-blue-600 text-funnel min-h-12 min-w-40 max-w-40 justify-center  items-center rounded-xl  hover:bg-blue-100  transition  duration-200">
        {{title}}  
    </RouterLink>
</template>
    