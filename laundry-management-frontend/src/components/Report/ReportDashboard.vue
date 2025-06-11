<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Report Dashboard</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="bg-white shadow-md rounded-lg p-4">
        <h2 class="text-xl font-semibold">Payments Report</h2>
        <p>Total Payments: {{ totalPayments }}</p>
        <p>Outstanding Payments: {{ outstandingPayments }}</p>
      </div>
      <div class="bg-white shadow-md rounded-lg p-4">
        <h2 class="text-xl font-semibold">Services Registered</h2>
        <p>Total Services: {{ totalServices }}</p>
      </div>
      <div class="bg-white shadow-md rounded-lg p-4">
        <h2 class="text-xl font-semibold">Services Completed</h2>
        <p>Total Completed: {{ totalCompletedServices }}</p>
      </div>
    </div>
    <div class="mt-6">
      <h2 class="text-xl font-semibold">Detailed Reports</h2>
      <table class="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th class="border px-4 py-2">SR No</th>
            <th class="border px-4 py-2">Customer Name</th>
            <th class="border px-4 py-2">Total Amount</th>
            <th class="border px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="report in reports" :key="report.srNo">
            <td class="border px-4 py-2">{{ report.srNo }}</td>
            <td class="border px-4 py-2">{{ report.customerName }}</td>
            <td class="border px-4 py-2">{{ report.totalAmount }}</td>
            <td class="border px-4 py-2">{{ report.status }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalPayments: 0,
      outstandingPayments: 0,
      totalServices: 0,
      totalCompletedServices: 0,
      reports: []
    };
  },
  methods: {
    fetchReports() {
      // Fetch report data from the API
      // This is a placeholder for the actual API call
      this.reports = [
        { srNo: '30021', customerName: 'John Doe', totalAmount: 50, status: 'Paid' },
        { srNo: '30022', customerName: 'Jane Smith', totalAmount: 75, status: 'Pending' },
      ];
      this.totalPayments = this.reports.reduce((sum, report) => sum + report.totalAmount, 0);
      this.outstandingPayments = this.reports.filter(report => report.status === 'Pending').length;
      this.totalServices = this.reports.length;
      this.totalCompletedServices = this.reports.filter(report => report.status === 'Paid').length;
    }
  },
  mounted() {
    this.fetchReports();
  }
};
</script>

<style scoped>
/* Add any specific styles for the ReportDashboard component here */
</style>