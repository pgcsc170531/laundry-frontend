<template>
  <div>
    <h1 class="text-2xl font-semibold text-gray-900">Collections</h1>
    <div class="mt-6">
      <p class="text-gray-500">Collection management page coming soon...</p>
    </div>
  </div>
</template>

<script setup>
const collections = [
  {
    id: 1,
    orderId: 'ORD-001',
    customer: 'John Doe',
    items: '2 Shirts, 1 Pants',
    collectionDate: '2023-06-13',
    collectionTime: '14:00',
    status: 'ready'
  },
  {
    id: 2,
    orderId: 'ORD-002',
    customer: 'Jane Smith',
    items: '1 Dress, 3 Shirts',
    collectionDate: '2023-06-13',
    collectionTime: '15:30',
    status: 'collected'
  },
  {
    id: 3,
    orderId: 'ORD-003',
    customer: 'Mike Johnson',
    items: '4 Shirts, 2 Pants',
    collectionDate: '2023-06-14',
    collectionTime: '10:00',
    status: 'processing'
  },
]

const summary = {
  readyForCollection: 12,
  collectedToday: 8,
  pending: 5,
  delayed: 2
}
</script>

<template>
  <div class="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
    <!-- Page Header -->
    <div class="sm:flex sm:items-center sm:justify-between">
      <div>
        <h1 class="text-2xl font-semibold text-gray-900">Collections</h1>
        <p class="mt-2 text-sm text-gray-700">Manage order collections and deliveries</p>
      </div>
      <div class="mt-4 sm:mt-0">
        <button type="button" class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Schedule Collection
        </button>
      </div>
    </div>

    <!-- Summary Cards -->
    <dl class="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <div v-for="(value, key) in summary" :key="key" class="relative overflow-hidden rounded-lg bg-white px-4 pb-5 pt-5 shadow sm:px-6 sm:pt-6">
        <dt class="truncate text-sm font-medium text-gray-500">
          {{ key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1') }}
        </dt>
        <dd class="mt-1 text-2xl font-semibold text-gray-900">{{ value }}</dd>
      </div>
    </dl>

    <!-- Filters -->
    <div class="mt-8 sm:flex sm:items-center space-x-4">
      <div class="relative rounded-md shadow-sm flex-1">
        <input type="text" class="block w-full rounded-md border-gray-300 pr-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Search by order ID or customer name...">
      </div>
      <div>
        <select class="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
          <option>All Status</option>
          <option>Ready</option>
          <option>Processing</option>
          <option>Collected</option>
        </select>
      </div>
      <div>
        <input type="date" class="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
      </div>
    </div>

    <!-- Collections Table -->
    <div class="mt-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle">
          <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Order ID</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Customer</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Items</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Collection Date</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Time</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
                  <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span class="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr v-for="collection in collections" :key="collection.id">
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                    {{ collection.orderId }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ collection.customer }}</td>
                  <td class="px-3 py-4 text-sm text-gray-500">{{ collection.items }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ collection.collectionDate }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ collection.collectionTime }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm">
                    <span :class="[
                      collection.status === 'ready' ? 'bg-green-100 text-green-800' : 
                      collection.status === 'collected' ? 'bg-blue-100 text-blue-800' : 
                      'bg-yellow-100 text-yellow-800',
                      'inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold'
                    ]">
                      {{ collection.status }}
                    </span>
                  </td>
                  <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                    <button class="text-indigo-600 hover:text-indigo-900 mr-4">Update Status</button>
                    <button class="text-indigo-600 hover:text-indigo-900">View Details</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>]]>
