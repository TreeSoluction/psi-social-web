<template>
    <div
      v-for="(notification, index) in notifications"
      :key="index"
      :class="['notification', notification.type]"
      class="fixed bottom-4 right-4 p-4 rounded-md shadow-md transition-all duration-1000"
    >
      <span>{{ notification.message }}</span>
      <button @click="closeNotification(index)" class="ml-4 text-white">X</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const notifications = ref([]);
  
  const addNotification = (message, type = 'success') => {
    notifications.value.push({ message, type });
  
    // Remove notification after 5 seconds
    setTimeout(() => {
      notifications.value.shift();
    }, 5000);
  };
  
  const closeNotification = (index) => {
    notifications.value.splice(index, 1);
  };
  
  defineExpose({ addNotification });
  </script>
  
  <style scoped>
  .notification {
    background-color: #28a745; /* Green by default for success */
    color: white;
  }
  
  .notification.error {
    background-color: #dc3545;
  }
  
  .notification.info {
    background-color: #17a2b8;
  }
  
  .notification.warning {
    background-color: #ffc107;
  }
  </style>
  