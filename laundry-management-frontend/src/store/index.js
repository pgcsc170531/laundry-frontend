import { createStore } from 'vuex';

const store = createStore({
  state: {
    customers: [],
    services: [],
    payments: [],
    expenses: [],
    serviceReceipts: [],
  },
  mutations: {
    ADD_CUSTOMER(state, customer) {
      state.customers.push(customer);
    },
    ADD_SERVICE(state, service) {
      state.services.push(service);
    },
    ADD_PAYMENT(state, payment) {
      state.payments.push(payment);
    },
    ADD_EXPENSE(state, expense) {
      state.expenses.push(expense);
    },
    ADD_SERVICE_RECEIPT(state, receipt) {
      state.serviceReceipts.push(receipt);
    },
  },
  actions: {
    addCustomer({ commit }, customer) {
      commit('ADD_CUSTOMER', customer);
    },
    addService({ commit }, service) {
      commit('ADD_SERVICE', service);
    },
    addPayment({ commit }, payment) {
      commit('ADD_PAYMENT', payment);
    },
    addExpense({ commit }, expense) {
      commit('ADD_EXPENSE', expense);
    },
    addServiceReceipt({ commit }, receipt) {
      commit('ADD_SERVICE_RECEIPT', receipt);
    },
  },
  getters: {
    getCustomers: (state) => state.customers,
    getServices: (state) => state.services,
    getPayments: (state) => state.payments,
    getExpenses: (state) => state.expenses,
    getServiceReceipts: (state) => state.serviceReceipts,
  },
});

export default store;