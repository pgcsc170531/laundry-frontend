<template>
  <div class="dashboard">
    <h1 class="text-2xl font-bold mb-4">Laundry Management Dashboard</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="bg-white shadow-md rounded-lg p-4">
        <h2 class="text-xl font-semibold">Total Customers</h2>
        <p class="text-3xl">{{ totalCustomers }}</p>
      </div>
      <div class="bg-white shadow-md rounded-lg p-4">
        <h2 class="text-xl font-semibold">Total Services</h2>
        <p class="text-3xl">{{ totalServices }}</p>
      </div>
      <div class="bg-white shadow-md rounded-lg p-4">
        <h2 class="text-xl font-semibold">Total Payments</h2>
        <p class="text-3xl">{{ totalPayments }}</p>
      </div>
    </div>
    <div class="mt-6">
      <h2 class="text-xl font-semibold">Recent Activities</h2>
      <ul class="list-disc pl-5">
        <li v-for="activity in recentActivities" :key="activity.id">
          {{ activity.description }} - {{ activity.date }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalCustomers: 0,
      totalServices: 0,
      totalPayments: 0,
      recentActivities: []
    };
  },
  created() {
    this.fetchDashboardData();
  },
  methods: {
    fetchDashboardData() {
      // Fetch data from the API and update the dashboard statistics
      // This is a placeholder for the actual API call
      this.totalCustomers = 100; // Example data
      this.totalServices = 50; // Example data
      this.totalPayments = 2000; // Example data
      this.recentActivities = [
        { id: 1, description: 'Customer registered', date: '2023-10-01' },
        { id: 2, description: 'Service completed', date: '2023-10-02' },
        { id: 3, description: 'Payment received', date: '2023-10-03' }
      ]; // Example data
    }
  }
};
</script>

<style scoped>
.dashboard {
  padding: 20px;
}
</style>