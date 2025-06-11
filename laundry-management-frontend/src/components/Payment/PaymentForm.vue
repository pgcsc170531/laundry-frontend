<template>
  <div class="payment-form">
    <h2 class="text-xl font-bold mb-4">Payment Form</h2>
    <form @submit.prevent="submitPayment">
      <div class="mb-4">
        <label for="srNumber" class="block text-sm font-medium text-gray-700">Service Receipt Number (SR No):</label>
        <input
          type="text"
          id="srNumber"
          v-model="srNumber"
          required
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
        />
      </div>
      <div class="mb-4">
        <label for="amount" class="block text-sm font-medium text-gray-700">Amount:</label>
        <input
          type="number"
          id="amount"
          v-model="amount"
          required
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
        />
      </div>
      <div class="mb-4">
        <label for="paymentMethod" class="block text-sm font-medium text-gray-700">Payment Method:</label>
        <select
          id="paymentMethod"
          v-model="paymentMethod"
          required
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
        >
          <option value="" disabled>Select a method</option>
          <option value="cash">Cash</option>
          <option value="credit_card">Credit Card</option>
          <option value="mobile_payment">Mobile Payment</option>
        </select>
      </div>
      <button
        type="submit"
        class="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700"
      >
        Submit Payment
      </button>
    </form>
    <div v-if="message" class="mt-4 text-green-600">{{ message }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      srNumber: '',
      amount: '',
      paymentMethod: '',
      message: ''
    };
  },
  methods: {
    submitPayment() {
      // Logic to handle payment submission
      // This should include API call to the backend to process the payment
      this.message = `Payment of ${this.amount} for SR No: ${this.srNumber} has been submitted.`;
      // Reset form fields
      this.srNumber = '';
      this.amount = '';
      this.paymentMethod = '';
    }
  }
};
</script>

<style scoped>
.payment-form {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background-color: #ffffff;
}
</style>