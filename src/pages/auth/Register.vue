<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');

const handleRegister = async (e) => {
  e.preventDefault();
  // TODO: Implement registration logic
  router.push('/auth/login');
};
</script>

<template>
  <form class="space-y-6" @submit="handleRegister">
    <div>
      <label for="name" class="block text-sm font-medium text-gray-700">Full name</label>
      <div class="mt-1">
        <input
          id="name"
          v-model="name"
          name="name"
          type="text"
          required
          class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>
    </div>

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
          required
          class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>
    </div>

    <div>
      <label for="confirm-password" class="block text-sm font-medium text-gray-700">Confirm password</label>
      <div class="mt-1">
        <input
          id="confirm-password"
          v-model="confirmPassword"
          name="confirm-password"
          type="password"
          required
          class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>
    </div>

    <div>
      <button
        type="submit"
        class="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Sign up
      </button>
    </div>

    <div class="text-sm text-center">
      <router-link to="/auth/login" class="font-medium text-indigo-600 hover:text-indigo-500">
        Already have an account? Sign in
      </router-link>
    </div>
  </form>
</template>
