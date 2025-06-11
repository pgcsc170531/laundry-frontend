<template>
  <div class="container mx-auto mt-5">
    <h1 class="text-2xl font-bold mb-4">Customer List</h1>
    <div class="mb-4">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search by name or tag"
        class="border rounded p-2 w-full"
      />
    </div>
    <table class="min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
          <th class="border-b p-2">Tag</th>
          <th class="border-b p-2">Name</th>
          <th class="border-b p-2">Contact</th>
          <th class="border-b p-2">Address</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in filteredCustomers" :key="customer.id">
          <td class="border-b p-2">{{ customer.tag }}</td>
          <td class="border-b p-2">{{ customer.name }}</td>
          <td class="border-b p-2">{{ customer.contact }}</td>
          <td class="border-b p-2">{{ customer.address }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      customers: [
        // Sample data for demonstration
        { id: 1, tag: 'AA', name: 'John Doe', contact: '1234567890', address: '123 Main St' },
        { id: 2, tag: 'AB', name: 'Jane Smith', contact: '0987654321', address: '456 Elm St' },
        // Add more sample customers as needed
      ],
    };
  },
  computed: {
    filteredCustomers() {
      return this.customers.filter(customer => {
        return (
          customer.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          customer.tag.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      });
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>