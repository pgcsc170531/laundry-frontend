<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-blue-600 text-white p-4">
      <h1 class="text-xl font-bold">Laundry Management System</h1>
    </header>
    <main class="flex-grow p-4">
      <slot></slot>
    </main>
    <footer class="bg-gray-800 text-white p-4 text-center">
      <p>&copy; 2023 Laundry Management System. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
};
</script>

<style scoped>
/* Add any specific styles for the DefaultLayout here */
</style>