<template>
  <div class="max-w-md mx-auto mt-10">
    <h2 class="text-2xl font-bold mb-4">Register Customer</h2>
    <form @submit.prevent="submitForm">
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          v-model="customer.name"
          required
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
        />
      </div>
      <div class="mb-4">
        <label for="contact" class="block text-sm font-medium text-gray-700">Contact</label>
        <input
          type="text"
          id="contact"
          v-model="customer.contact"
          required
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
        />
      </div>
      <div class="mb-4">
        <label for="address" class="block text-sm font-medium text-gray-700">Address</label>
        <textarea
          id="address"
          v-model="customer.address"
          required
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
        ></textarea>
      </div>
      <button
        type="submit"
        class="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700"
      >
        Register Customer
      </button>
    </form>
    <div v-if="tag" class="mt-4">
      <p class="text-green-600 font-semibold">Generated Tag: <span class="font-bold">{{ tag }}</span></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      customer: {
        name: '',
        contact: '',
        address: '',
      },
      tag: '',
    };
  },
  methods: {
    submitForm() {
      // Generate a unique tag for the customer
      this.tag = this.generateTag();
      // Here you would typically send the customer data to the backend API
      console.log('Customer registered:', this.customer);
    },
    generateTag() {
      // Simple tag generation logic (AA, AB, AK, etc.)
      const tags = ['AA', 'AB', 'AK']; // This should be replaced with a more robust logic
      return tags[Math.floor(Math.random() * tags.length)];
    },
  },
};
</script>

<style scoped>
/* Add any specific styles for the CustomerForm component here */
</style>