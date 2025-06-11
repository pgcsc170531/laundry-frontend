<template>
  <AuthLayout>
    <div class="max-w-md mx-auto mt-10">
      <h1 class="text-2xl font-bold mb-6">Register</h1>
      <form @submit.prevent="registerCustomer">
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" v-model="customer.name" id="name" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50" />
        </div>
        <div class="mb-4">
          <label for="contact" class="block text-sm font-medium text-gray-700">Contact</label>
          <input type="text" v-model="customer.contact" id="contact" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50" />
        </div>
        <div class="mb-4">
          <label for="address" class="block text-sm font-medium text-gray-700">Address</label>
          <textarea v-model="customer.address" id="address" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"></textarea>
        </div>
        <button type="submit" class="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700">Register</button>
      </form>
      <div v-if="message" class="mt-4 text-green-600">{{ message }}</div>
    </div>
  </AuthLayout>
</template>

<script>
export default {
  data() {
    return {
      customer: {
        name: '',
        contact: '',
        address: ''
      },
      message: ''
    };
  },
  methods: {
    async registerCustomer() {
      try {
        // Call the API to register the customer
        const response = await this.$http.post('/api/customers', this.customer);
        this.message = `Customer registered successfully! Tag: ${response.data.tag}`;
        this.resetForm();
      } catch (error) {
        console.error(error);
        this.message = 'Failed to register customer. Please try again.';
      }
    },
    resetForm() {
      this.customer.name = '';
      this.customer.contact = '';
      this.customer.address = '';
    }
  }
};
</script>

<style scoped>
/* Add any additional styles here */
</style>