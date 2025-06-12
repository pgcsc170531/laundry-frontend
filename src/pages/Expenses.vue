<![CDATA[<template>
  <div>
    <h1 class="text-2xl font-semibold text-gray-900">Expenses</h1>
    <div class="mt-6">
      <p class="text-gray-500">Expense management page coming soon...</p>
    </div>
  </div>
</template>

<script setup>
const expenses = [
  {
    id: 1,
    category: 'Utilities',
    description: 'Electricity Bill',
    amount: '$350.00',
    date: '2023-06-12',
    paymentMethod: 'Bank Transfer',
    status: 'paid'
  },
  {
    id: 2,
    category: 'Supplies',
    description: 'Detergent Stock',
    amount: '$280.00',
    date: '2023-06-11',
    paymentMethod: 'Credit Card',
    status: 'paid'
  },
  {
    id: 3,
    category: 'Maintenance',
    description: 'Machine Repair',
    amount: '$150.00',
    date: '2023-06-10',
    paymentMethod: 'Cash',
    status: 'pending'
  },
]

const summary = {
  totalExpenses: '$780.00',
  pendingPayments: '$150.00',
  thisMonth: '$2,450.00',
  lastMonth: '$2,280.00'
}

const categories = [
  'Utilities',
  'Supplies',
  'Maintenance',
  'Salary',
  'Rent',
  'Others'
]
</script>

<template>
  <div class="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
    <!-- Page Header -->
    <div class="sm:flex sm:items-center sm:justify-between">
      <div>
        <h1 class="text-2xl font-semibold text-gray-900">Expenses</h1>
        <p class="mt-2 text-sm text-gray-700">Track and manage your business expenses</p>
      </div>
      <div class="mt-4 sm:mt-0">
        <button type="button" class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Add Expense
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

    <!-- Filters and Search -->
    <div class="mt-8 sm:flex sm:items-center sm:justify-between">
      <div class="mt-4 sm:mt-0">
        <div class="flex space-x-4">
          <div class="relative rounded-md shadow-sm">
            <input type="text" class="block w-full rounded-md border-gray-300 pr-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Search expenses...">
          </div>
          <select class="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
            <option value="">All Categories</option>
            <option v-for="category in categories" :key="category" :value="category">
              {{ category }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <!-- Expenses Table -->
    <div class="mt-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle">
          <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Description</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Category</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Amount</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Date</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Payment Method</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
                  <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span class="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr v-for="expense in expenses" :key="expense.id">
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                    {{ expense.description }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ expense.category }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-900">{{ expense.amount }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ expense.date }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ expense.paymentMethod }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm">
                    <span :class="[
                      expense.status === 'paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800',
                      'inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold'
                    ]">
                      {{ expense.status }}
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
</template>]]>
