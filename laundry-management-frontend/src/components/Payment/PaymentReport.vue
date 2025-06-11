<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Payment Report</h1>
    <div class="mb-4">
      <label for="dateRange" class="block text-sm font-medium text-gray-700">Select Date Range:</label>
      <input type="date" v-model="startDate" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
      <input type="date" v-model="endDate" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
      <button @click="fetchPayments" class="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Search</button>
    </div>
    <table class="min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
          <th class="py-2 px-4 border-b">SR No</th>
          <th class="py-2 px-4 border-b">Customer Name</th>
          <th class="py-2 px-4 border-b">Amount Paid</th>
          <th class="py-2 px-4 border-b">Outstanding Balance</th>
          <th class="py-2 px-4 border-b">Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="payment in payments" :key="payment.srNo">
          <td class="py-2 px-4 border-b">{{ payment.srNo }}</td>
          <td class="py-2 px-4 border-b">{{ payment.customerName }}</td>
          <td class="py-2 px-4 border-b">{{ payment.amountPaid }}</td>
          <td class="py-2 px-4 border-b">{{ payment.outstandingBalance }}</td>
          <td class="py-2 px-4 border-b">{{ payment.date }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startDate: '',
      endDate: '',
      payments: []
    };
  },
  methods: {
    fetchPayments() {
      // Fetch payment data from the API based on the selected date range
      const apiUrl = `your_api_endpoint/payments?start=${this.startDate}&end=${this.endDate}`;
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          this.payments = data;
        })
        .catch(error => {
          console.error('Error fetching payment data:', error);
        });
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>