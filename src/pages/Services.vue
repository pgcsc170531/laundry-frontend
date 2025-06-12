<template>
  <div class="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
    <!-- Page Header -->
    <div class="sm:flex sm:items-center sm:justify-between">
      <div>
        <h1 class="text-2xl font-semibold text-gray-900">Services</h1>
        <p class="mt-2 text-sm text-gray-700">Manage your laundry services and pricing</p>
      </div>
      <div class="mt-4 sm:mt-0">
        <button type="button" class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Add Service
        </button>
      </div>
    </div>

    <!-- Services Grid -->
    <div class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div v-for="service in services" :key="service.id" class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm hover:shadow-md flex flex-col">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-medium text-gray-900">{{ service.name }}</h3>
          <span :class="[
            service.status === 'available' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800',
            'inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold'
          ]">
            {{ service.status }}
          </span>
        </div>
        <div class="mt-2 flex items-center text-sm text-gray-500">
          <span class="text-2xl font-bold text-gray-900">{{ service.price }}</span>
          <span class="ml-2">per kg</span>
        </div>
        <p class="mt-3 text-sm text-gray-500">{{ service.description }}</p>
        <div class="mt-4 flex items-center text-sm text-gray-500">
          <svg class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
          </svg>
          {{ service.duration }}
        </div>
        <div class="mt-4 flex justify-end space-x-3">
          <button class="text-sm font-medium text-indigo-600 hover:text-indigo-900">Edit</button>
          <button class="text-sm font-medium text-red-600 hover:text-red-900">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const services = [
  {
    id: 1,
    name: 'Wash & Iron',
    price: '$4.99',
    duration: '24 hours',
    description: 'Complete wash and iron service for all types of clothes',
    status: 'available'
  },
  {
    id: 2,
    name: 'Dry Clean',
    price: '$7.99',
    duration: '48 hours',
    description: 'Professional dry cleaning service for delicate fabrics',
    status: 'available'
  },
  {
    id: 3,
    name: 'Wash & Fold',
    price: '$3.99',
    duration: '24 hours',
    description: 'Basic wash and fold service for regular clothes',
    status: 'available'
  },
  {
    id: 4,
    name: 'Express Service',
    price: '$9.99',
    duration: '6 hours',
    description: 'Quick turnaround service for urgent requirements',
    status: 'limited'
  },
]
</script>]]>
