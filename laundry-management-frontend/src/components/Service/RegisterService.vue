<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Register Service</h1>
    <form @submit.prevent="registerService">
      <div class="mb-4">
        <label for="customerTag" class="block text-sm font-medium text-gray-700">Customer Tag</label>
        <input
          type="text"
          id="customerTag"
          v-model="customerTag"
          @input="searchCustomer"
          class="mt-1 block w-full border border-gray-300 rounded-md p-2"
          placeholder="Enter customer tag or contact"
        />
      </div>

      <div v-if="customer" class="mb-4">
        <h2 class="text-lg font-semibold">Customer Details</h2>
        <p>Name: {{ customer.name }}</p>
        <p>Contact: {{ customer.contact }}</p>
        <p>Address: {{ customer.address }}</p>
      </div>

      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700">Service Items</label>
        <select v-model="selectedService" @change="addServiceItem" class="mt-1 block w-full border border-gray-300 rounded-md p-2">
          <option v-for="service in services" :key="service.id" :value="service">{{ service.name }}</option>
        </select>
      </div>

      <div class="mb-4">
        <h3 class="text-lg font-semibold">Items for Wash</h3>
        <ul>
          <li v-for="(item, index) in serviceItems" :key="index" class="flex justify-between">
            <span>{{ item.name }} ({{ item.qty }})</span>
            <span>${{ item.price * item.qty }}</span>
          </li>
        </ul>
      </div>

      <div class="mb-4">
        <p class="font-semibold">Total Charges: ${{ totalCharges }}</p>
      </div>

      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Register Service</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      customerTag: '',
      customer: null,
      services: [],
      selectedService: null,
      serviceItems: [],
    };
  },
  computed: {
    totalCharges() {
      return this.serviceItems.reduce((total, item) => total + item.price * item.qty, 0);
    },
  },
  methods: {
    searchCustomer() {
      // Logic to search customer by tag or contact
      // This should call the API to fetch customer details
    },
    addServiceItem() {
      if (this.selectedService) {
        const existingItem = this.serviceItems.find(item => item.id === this.selectedService.id);
        if (existingItem) {
          existingItem.qty++;
        } else {
          this.serviceItems.push({ ...this.selectedService, qty: 1 });
        }
        this.selectedService = null; // Reset selection
      }
    },
    registerService() {
      // Logic to register the service and generate receipt
      // This should call the API to save the service details
    },
  },
  mounted() {
    // Fetch available services from the API
    // This should populate the services array
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
}
</style>