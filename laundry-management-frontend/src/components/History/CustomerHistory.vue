<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Customer History</h1>
    <div class="tabs">
      <ul class="flex space-x-4">
        <li class="tab" @click="activeTab = 'serviceReceipts'" :class="{ 'active': activeTab === 'serviceReceipts' }">Service Receipts</li>
        <li class="tab" @click="activeTab = 'paymentList'" :class="{ 'active': activeTab === 'paymentList' }">Payment List</li>
        <li class="tab" @click="activeTab = 'itemCollected'" :class="{ 'active': activeTab === 'itemCollected' }">Items Collected</li>
      </ul>
    </div>

    <div v-if="activeTab === 'serviceReceipts'" class="mt-4">
      <h2 class="text-xl font-semibold">Service Receipts</h2>
      <table class="min-w-full mt-2">
        <thead>
          <tr>
            <th class="border px-4 py-2">SR No</th>
            <th class="border px-4 py-2">Customer Name</th>
            <th class="border px-4 py-2">Total Amount</th>
            <th class="border px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="receipt in serviceReceipts" :key="receipt.srNo">
            <td class="border px-4 py-2">{{ receipt.srNo }}</td>
            <td class="border px-4 py-2">{{ receipt.customerName }}</td>
            <td class="border px-4 py-2">{{ receipt.totalAmount }}</td>
            <td class="border px-4 py-2">{{ receipt.date }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="activeTab === 'paymentList'" class="mt-4">
      <h2 class="text-xl font-semibold">Payment List</h2>
      <table class="min-w-full mt-2">
        <thead>
          <tr>
            <th class="border px-4 py-2">Payment ID</th>
            <th class="border px-4 py-2">SR No</th>
            <th class="border px-4 py-2">Amount Paid</th>
            <th class="border px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="payment in payments" :key="payment.id">
            <td class="border px-4 py-2">{{ payment.id }}</td>
            <td class="border px-4 py-2">{{ payment.srNo }}</td>
            <td class="border px-4 py-2">{{ payment.amount }}</td>
            <td class="border px-4 py-2">{{ payment.date }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="activeTab === 'itemCollected'" class="mt-4">
      <h2 class="text-xl font-semibold">Items Collected</h2>
      <table class="min-w-full mt-2">
        <thead>
          <tr>
            <th class="border px-4 py-2">SR No</th>
            <th class="border px-4 py-2">Item Name</th>
            <th class="border px-4 py-2">Quantity Collected</th>
            <th class="border px-4 py-2">Date Collected</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in collectedItems" :key="item.srNo">
            <td class="border px-4 py-2">{{ item.srNo }}</td>
            <td class="border px-4 py-2">{{ item.itemName }}</td>
            <td class="border px-4 py-2">{{ item.quantity }}</td>
            <td class="border px-4 py-2">{{ item.dateCollected }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'serviceReceipts',
      serviceReceipts: [],
      payments: [],
      collectedItems: []
    };
  },
  methods: {
    fetchCustomerHistory() {
      // Fetch customer history data from API
    }
  },
  mounted() {
    this.fetchCustomerHistory();
  }
};
</script>

<style scoped>
.tabs {
  border-bottom: 2px solid #e2e8f0;
}
.tab {
  cursor: pointer;
  padding: 10px;
}
.tab.active {
  border-bottom: 2px solid #4a5568;
  font-weight: bold;
}
</style>