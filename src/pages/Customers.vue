<template>
  <div class="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
    <!-- Page Header -->
    <div class="sm:flex sm:items-center sm:justify-between">
      <div>
        <h1 class="text-2xl font-semibold text-gray-900">Customers</h1>
        <p class="mt-2 text-sm text-gray-700">Manage your customer information and orders</p>
      </div>
      <div class="mt-4 sm:mt-0">
        <button type="button" class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Add Customer
        </button>
      </div>
    </div>

    <!-- Search and Filter Section -->
    <div class="mt-6 sm:flex sm:items-center sm:justify-between">
      <div class="flex-1 min-w-0">
        <div class="max-w-xs">
          <label for="search" class="sr-only">Search customers</label>
          <div class="relative rounded-md shadow-sm">
            <input type="search" name="search" id="search" class="block w-full rounded-md border-gray-300 pr-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Search customers...">
          </div>
        </div>
      </div>
    </div>

    <!-- Customers Table -->
    <div class="mt-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Customer</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Contact</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Orders</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Last Order</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
                  <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span class="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr v-for="customer in customers" :key="customer.id">
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                    <div class="font-medium text-gray-900">{{ customer.name }}</div>
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <div>{{ customer.email }}</div>
                    <div>{{ customer.phone }}</div>
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {{ customer.totalOrders }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {{ customer.lastOrder }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm">
                    <span :class="[
                      customer.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800',
                      'inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold'
                    ]">
                      {{ customer.status }}
                    </span>
                  </td>
                  <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                    <button class="text-indigo-600 hover:text-indigo-900 mr-4">Edit</button>
                    <button class="text-red-600 hover:text-red-900">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const customers = [
  { 
    id: 1, 
    name: 'John Doe', 
    email: 'john@example.com', 
    phone: '+1234567890',
    totalOrders: 15,
    lastOrder: '2023-06-10',
    status: 'active'
  },
  { 
    id: 2, 
    name: 'Jane Smith', 
    email: 'jane@example.com', 
    phone: '+1234567891',
    totalOrders: 8,
    lastOrder: '2023-06-08',
    status: 'active'
  },
  { 
    id: 3, 
    name: 'Mike Johnson', 
    email: 'mike@example.com', 
    phone: '+1234567892',
    totalOrders: 12,
    lastOrder: '2023-06-05',
    status: 'inactive'
  },
]
</script>]]>
