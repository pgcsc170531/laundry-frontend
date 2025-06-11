<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Service Collection</h1>
    <form @submit.prevent="fetchServiceReceipt">
      <div class="mb-4">
        <label for="srNumber" class="block text-sm font-medium text-gray-700">Enter SR Number:</label>
        <input
          type="text"
          id="srNumber"
          v-model="srNumber"
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          required
        />
      </div>
      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Load Service Receipt</button>
    </form>

    <div v-if="serviceReceipt" class="mt-6">
      <h2 class="text-xl font-semibold">Service Receipt Details</h2>
      <div class="border border-gray-300 rounded-md p-4">
        <p><strong>Customer Name:</strong> {{ serviceReceipt.customerName }}</p>
        <p><strong>Contact:</strong> {{ serviceReceipt.contact }}</p>
        <p><strong>Items:</strong></p>
        <ul>
          <li v-for="item in serviceReceipt.items" :key="item.id">
            {{ item.name }} - Qty: {{ item.qty }} - Amount: {{ item.amount }}
          </li>
        </ul>
        <p><strong>Total Amount:</strong> {{ serviceReceipt.totalAmount }}</p>
      </div>

      <h3 class="text-lg font-semibold mt-4">Select Items to Collect</h3>
      <ul class="mt-2">
        <li v-for="item in serviceReceipt.items" :key="item.id" class="flex items-center mb-2">
          <input
            type="checkbox"
            v-model="item.collected"
            class="mr-2"
          />
          <span>{{ item.name }} - Qty: {{ item.qty }}</span>
        </li>
      </ul>
      <button @click="collectItems" class="bg-green-500 text-white px-4 py-2 rounded mt-4">Collect Items</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      srNumber: '',
      serviceReceipt: null,
    };
  },
  methods: {
    async fetchServiceReceipt() {
      // Fetch service receipt from API using srNumber
      try {
        const response = await fetch(`api/service-receipts/${this.srNumber}`);
        if (!response.ok) throw new Error('Service receipt not found');
        this.serviceReceipt = await response.json();
      } catch (error) {
        alert(error.message);
      }
    },
    async collectItems() {
      // Collect items and update the service receipt
      const collectedItems = this.serviceReceipt.items.filter(item => item.collected);
      try {
        await fetch(`api/service-receipts/${this.srNumber}/collect`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ collectedItems }),
        });
        alert('Items collected successfully');
        this.serviceReceipt = null; // Reset after collection
      } catch (error) {
        alert('Error collecting items: ' + error.message);
      }
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
}
</style>