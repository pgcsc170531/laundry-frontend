<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 class="text-2xl font-bold mb-6">Register</h1>
    <form @submit.prevent="registerUser" class="bg-white p-6 rounded shadow-md w-80">
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
        <input type="text" v-model="name" id="name" required class="mt-1 block w-full border border-gray-300 rounded-md p-2" />
      </div>
      <div class="mb-4">
        <label for="contact" class="block text-sm font-medium text-gray-700">Contact</label>
        <input type="text" v-model="contact" id="contact" required class="mt-1 block w-full border border-gray-300 rounded-md p-2" />
      </div>
      <div class="mb-4">
        <label for="address" class="block text-sm font-medium text-gray-700">Address</label>
        <textarea v-model="address" id="address" required class="mt-1 block w-full border border-gray-300 rounded-md p-2"></textarea>
      </div>
      <button type="submit" class="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600">Register</button>
    </form>
    <p class="mt-4 text-sm text-gray-600">Already have an account? <router-link to="/login" class="text-blue-500">Login here</router-link>.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      contact: '',
      address: ''
    };
  },
  methods: {
    registerUser() {
      // Logic to register user goes here
      console.log('User registered:', {
        name: this.name,
        contact: this.contact,
        address: this.address
      });
      // Reset form fields
      this.name = '';
      this.contact = '';
      this.address = '';
    }
  }
};
</script>

<style scoped>
/* Add any additional styles here */
</style>