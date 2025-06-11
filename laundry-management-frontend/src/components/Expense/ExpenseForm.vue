<template>
  <div class="p-4">
    <h2 class="text-2xl font-bold mb-4">Register Expense</h2>
    <form @submit.prevent="submitExpense">
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700">Expense Name</label>
        <input type="text" v-model="expense.name" id="name" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50" />
      </div>
      <div class="mb-4">
        <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
        <textarea v-model="expense.description" id="description" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"></textarea>
      </div>
      <div class="mb-4">
        <label for="amount" class="block text-sm font-medium text-gray-700">Amount</label>
        <input type="number" v-model="expense.amount" id="amount" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50" />
      </div>
      <div class="mb-4">
        <label for="category" class="block text-sm font-medium text-gray-700">Category</label>
        <select v-model="expense.category" id="category" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50">
          <option value="" disabled>Select a category</option>
          <option v-for="cat in categories" :key="cat.id" :value="cat.id">{{ cat.name }}</option>
        </select>
      </div>
      <button type="submit" class="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      expense: {
        name: '',
        description: '',
        amount: null,
        category: ''
      },
      categories: [] // This will be populated with expense categories
    };
  },
  methods: {
    submitExpense() {
      // Logic to submit the expense to the backend API
      console.log('Expense submitted:', this.expense);
    },
    fetchCategories() {
      // Logic to fetch expense categories from the backend API
    }
  },
  mounted() {
    this.fetchCategories();
  }
};
</script>

<style scoped>
/* Add any specific styles for the ExpenseForm component here */
</style>