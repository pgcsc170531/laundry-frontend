<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const email = ref('');
const password = ref('');
const rememberMe = ref(false);

const handleLogin = async (e) => {
  e.preventDefault();
  // TODO: Implement login logic
  router.push('/');
};
</script>

<template>
  <form class="space-y-6" @submit="handleLogin">
    <div>
      <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
      <div class="mt-1">
        <input
          id="email"
          v-model="email"
          name="email"
          type="email"
          autocomplete="email"
          required
          class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>
    </div>

    <div>
      <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
      <div class="mt-1">
        <input
          id="password"
          v-model="password"
          name="password"
          type="password"
          autocomplete="current-password"
          required
          class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>
    </div>

    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <input
          id="remember-me"
          v-model="rememberMe"
          name="remember-me"
          type="checkbox"
          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
        />
        <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
      </div>

      <div class="text-sm">
        <router-link to="/auth/forgot-password" class="font-medium text-indigo-600 hover:text-indigo-500">
          Forgot your password?
        </router-link>
      </div>
    </div>

    <div>
      <button
        type="submit"
        class="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Sign in
      </button>
    </div>

    <div class="text-sm text-center">
      <router-link to="/auth/register" class="font-medium text-indigo-600 hover:text-indigo-500">
        Don't have an account? Sign up
      </router-link>
    </div>
  </form>
</template>
