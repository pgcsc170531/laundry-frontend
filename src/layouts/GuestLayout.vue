<script setup>
// Guest layout for authentication pages
</script>

<template>
  <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img class="mx-auto h-12 w-auto" src="/vite.svg" alt="Laundry MS" />
      <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
        <slot name="title">Welcome back</slot>
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        <slot name="description"></slot>
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
