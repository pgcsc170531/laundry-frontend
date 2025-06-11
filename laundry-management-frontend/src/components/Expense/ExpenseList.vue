<template>
  <div class="container mx-auto mt-5">
    <h1 class="text-2xl font-bold mb-4">Expense List</h1>
    <table class="min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
          <th class="py-2 px-4 border-b">ID</th>
          <th class="py-2 px-4 border-b">Category</th>
          <th class="py-2 px-4 border-b">Description</th>
          <th class="py-2 px-4 border-b">Amount</th>
          <th class="py-2 px-4 border-b">Date</th>
          <th class="py-2 px-4 border-b">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="expense in expenses" :key="expense.id">
          <td class="py-2 px-4 border-b">{{ expense.id }}</td>
          <td class="py-2 px-4 border-b">{{ expense.category }}</td>
          <td class="py-2 px-4 border-b">{{ expense.description }}</td>
          <td class="py-2 px-4 border-b">{{ expense.amount }}</td>
          <td class="py-2 px-4 border-b">{{ expense.date }}</td>
          <td class="py-2 px-4 border-b">
            <button @click="editExpense(expense.id)" class="text-blue-500">Edit</button>
            <button @click="deleteExpense(expense.id)" class="text-red-500">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      expenses: []
    };
  },
  methods: {
    fetchExpenses() {
      // Fetch expenses from the API
      // This is a placeholder for the actual API call
      this.expenses = [
        { id: 1, category: 'Utilities', description: 'Electricity Bill', amount: 100, date: '2023-01-01' },
        { id: 2, category: 'Supplies', description: 'Laundry Detergent', amount: 50, date: '2023-01-05' },
        // Add more sample data as needed
      ];
    },
    editExpense(id) {
      // Logic to edit the expense
      console.log(`Edit expense with ID: ${id}`);
    },
    deleteExpense(id) {
      // Logic to delete the expense
      console.log(`Delete expense with ID: ${id}`);
    }
  },
  mounted() {
    this.fetchExpenses();
  }
};
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>