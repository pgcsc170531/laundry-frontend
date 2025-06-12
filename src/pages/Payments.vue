<template>
  <div class="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
    <!-- Page Header -->
    <div class="sm:flex sm:items-center sm:justify-between">
      <div>
        <h1 class="text-2xl font-semibold text-gray-900">Payments</h1>
        <p class="mt-2 text-sm text-gray-700">Track all payment transactions</p>
      </div>
      <div class="mt-4 sm:mt-0">
        <button type="button" class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          New Payment
        </button>
      </div>
    </div>

    <!-- Stats -->
    <dl class="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <div v-for="(value, key) in summary" :key="key" class="relative overflow-hidden rounded-lg bg-white px-4 pb-5 pt-5 shadow sm:px-6 sm:pt-6">
        <dt class="truncate text-sm font-medium text-gray-500">
          {{ key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1') }}
        </dt>
        <dd class="mt-1 text-2xl font-semibold text-gray-900">{{ value }}</dd>
      </div>
    </dl>

    <!-- Transactions Table -->
    <div class="mt-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <div class="mt-4 sm:mt-0">
          <div class="flex space-x-4">
            <div class="relative rounded-md shadow-sm">
              <input type="text" class="block w-full rounded-md border-gray-300 pr-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Search transactions...">
            </div>
            <select class="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
              <option>All Payments</option>
              <option>Completed</option>
              <option>Pending</option>
              <option>Failed</option>
            </select>
          </div>
        </div>
      </div>

      <div class="mt-8 flex flex-col">
        <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle">
            <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table class="min-w-full divide-y divide-gray-300">
                <thead class="bg-gray-50">
                  <tr>
                    <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Transaction ID</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Customer</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Amount</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Date</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Method</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Order</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 bg-white">
                  <tr v-for="transaction in transactions" :key="transaction.id">
                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-6">#{{ transaction.id }}</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ transaction.customer }}</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-900">{{ transaction.amount }}</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ transaction.date }}</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ transaction.method }}</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm">
                      <span :class="[
                        transaction.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800',
                        'inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold'
                      ]">
                        {{ transaction.status }}
                      </span>
                    </td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-indigo-600 hover:text-indigo-900">
                      <a href="#">{{ transaction.orderId }}</a>
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
</template>

<script setup>
const transactions = [
  {
    id: 1,
    customer: 'John Doe',
    amount: '$45.00',
    date: '2023-06-12',
    method: 'Credit Card',
    status: 'completed',
    orderId: 'ORD-001'
  },
  {
    id: 2,
    customer: 'Jane Smith',
    amount: '$32.50',
    date: '2023-06-11',
    method: 'Cash',
    status: 'completed',
    orderId: 'ORD-002'
  },
  {
    id: 3,
    customer: 'Mike Johnson',
    amount: '$78.00',
    date: '2023-06-11',
    method: 'Bank Transfer',
    status: 'pending',
    orderId: 'ORD-003'
  },
]

const summary = {
  today: '$450.00',
  thisWeek: '$2,850.00',
  thisMonth: '$12,450.00',
  pending: '$180.00'
}
</script>]]>
