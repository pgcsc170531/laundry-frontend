<template>
  <AuthLayout>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 class="text-2xl font-bold mb-4">Login</h1>
      <form @submit.prevent="handleLogin" class="bg-white p-6 rounded shadow-md w-80">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            required
            class="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            class="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          class="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
        <p class="mt-4 text-sm text-center">
          Don't have an account? 
          <router-link to="/register" class="text-blue-500 hover:underline">Register</router-link>
        </p>
      </form>
    </div>
  </AuthLayout>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    handleLogin() {
      // Implement login logic here
      console.log('Logging in with:', this.email, this.password);
    }
  }
};
</script>

<style scoped>
/* Add any specific styles for the Login component here */
</style>