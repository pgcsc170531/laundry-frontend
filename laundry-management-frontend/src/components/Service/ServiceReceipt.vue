<template>
  <div class="service-receipt">
    <h1 class="text-2xl font-bold mb-4">Service Receipt</h1>
    <div class="receipt-details">
      <h2 class="text-xl font-semibold">Customer Details</h2>
      <p><strong>Name:</strong> {{ receipt.customer.name }}</p>
      <p><strong>Contact:</strong> {{ receipt.customer.contact }}</p>
      <p><strong>Address:</strong> {{ receipt.customer.address }}</p>
    </div>
    <div class="items-list mt-4">
      <h2 class="text-xl font-semibold">Items Brought for Wash</h2>
      <table class="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th class="border border-gray-300 px-4 py-2">Item</th>
            <th class="border border-gray-300 px-4 py-2">Quantity</th>
            <th class="border border-gray-300 px-4 py-2">Rate</th>
            <th class="border border-gray-300 px-4 py-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in receipt.items" :key="item.id">
            <td class="border border-gray-300 px-4 py-2">{{ item.name }}</td>
            <td class="border border-gray-300 px-4 py-2">{{ item.quantity }}</td>
            <td class="border border-gray-300 px-4 py-2">{{ item.rate }}</td>
            <td class="border border-gray-300 px-4 py-2">{{ item.amount }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="total-charges mt-4">
      <h2 class="text-xl font-semibold">Total Charges</h2>
      <p><strong>Total:</strong> {{ receipt.total }}</p>
    </div>
    <div class="receipt-footer mt-4">
      <p class="text-sm">Receipt Number: SR No: {{ receipt.receiptNumber }}</p>
      <p class="text-sm">Date: {{ receipt.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceReceipt',
  props: {
    receipt: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.service-receipt {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>