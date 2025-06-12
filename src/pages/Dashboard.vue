<script setup>
const stats = [
  { title: 'Total Orders', value: '45', change: '+12%', changeType: 'positive' },
  { title: 'Pending Orders', value: '8', change: '-2%', changeType: 'negative' },
  { title: "Today's Revenue", value: '$1,280', change: '+15%', changeType: 'positive' },
  { title: 'Pending Collection', value: '12', change: '+3%', changeType: 'positive' },
]

const recentOrders = [
  { id: 1, customer: 'John Doe', service: 'Wash & Iron', amount: '$25', status: 'Pending' },
  { id: 2, customer: 'Jane Smith', service: 'Dry Clean', amount: '$45', status: 'Processing' },
  { id: 3, customer: 'Mike Johnson', service: 'Wash & Fold', amount: '$30', status: 'Ready' },
]
</script>

<template>
  <div class="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
    <!-- Page Header -->
    <div class="sm:flex sm:items-center sm:justify-between">
      <div>
        <h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <p class="mt-2 text-sm text-gray-700">Overview of your laundry business</p>
      </div>
    </div>

    <!-- Stats Grid -->
    <div class="mt-8">
      <dl class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="item in stats" :key="item.title" 
          class="relative overflow-hidden rounded-lg bg-white px-4 pb-5 pt-5 shadow sm:px-6 sm:pt-6">
          <dt class="truncate text-sm font-medium text-gray-500">{{ item.title }}</dt>
          <dd class="mt-2 flex items-baseline">
            <p class="text-2xl font-semibold text-gray-900">{{ item.value }}</p>
            <p :class="[
              item.changeType === 'positive' ? 'text-green-600' : 'text-red-600',
              'ml-2 flex items-baseline text-sm font-semibold'
            ]">
              {{ item.change }}
            </p>
          </dd>
        </div>
      </dl>
    </div>

    <!-- Recent Orders -->
    <div class="mt-8">
      <div class="rounded-lg bg-white shadow">
        <div class="px-4 py-5 sm:p-6">
          <h3 class="text-base font-semibold leading-6 text-gray-900">Recent Orders</h3>
          <div class="mt-4 flow-root">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="inline-block min-w-full py-2 align-middle">
                <table class="min-w-full divide-y divide-gray-300">
                  <thead>
                    <tr>
                      <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8">Order ID</th>
                      <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Customer</th>
                      <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Service</th>
                      <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Amount</th>
                      <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 bg-white">
                    <tr v-for="order in recentOrders" :key="order.id">
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">#{{ order.id }}</td>
                      <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ order.customer }}</td>
                      <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ order.service }}</td>
                      <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ order.amount }}</td>
                      <td class="whitespace-nowrap px-3 py-4 text-sm">
                        <span :class="[
                          order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                          order.status === 'Processing' ? 'bg-blue-100 text-blue-800' : 
                          'bg-green-100 text-green-800',
                          'inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold'
                        ]">
                          {{ order.status }}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
