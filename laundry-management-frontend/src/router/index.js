import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../pages/Dashboard.vue';
import Login from '../pages/Login.vue';
import Register from '../pages/Register.vue';
import NotFound from '../pages/NotFound.vue';
import CustomerForm from '../components/Customer/CustomerForm.vue';
import CustomerList from '../components/Customer/CustomerList.vue';
import RegisterService from '../components/Service/RegisterService.vue';
import ServiceReceipt from '../components/Service/ServiceReceipt.vue';
import PaymentForm from '../components/Payment/PaymentForm.vue';
import PaymentReport from '../components/Payment/PaymentReport.vue';
import ServiceCollection from '../components/Collection/ServiceCollection.vue';
import CustomerHistory from '../components/History/CustomerHistory.vue';
import ReportDashboard from '../components/Report/ReportDashboard.vue';
import ExpenseForm from '../components/Expense/ExpenseForm.vue';
import ExpenseList from '../components/Expense/ExpenseList.vue';

const routes = [
  { path: '/', component: Dashboard },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/customers/new', component: CustomerForm },
  { path: '/customers', component: CustomerList },
  { path: '/services/register', component: RegisterService },
  { path: '/services/receipt', component: ServiceReceipt },
  { path: '/payments/new', component: PaymentForm },
  { path: '/payments/report', component: PaymentReport },
  { path: '/collection', component: ServiceCollection },
  { path: '/history', component: CustomerHistory },
  { path: '/reports', component: ReportDashboard },
  { path: '/expenses/new', component: ExpenseForm },
  { path: '/expenses', component: ExpenseList },
  { path: '/:catchAll(.*)', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;