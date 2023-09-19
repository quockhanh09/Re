import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegistrationView from '../views/RegistrationView.vue'
import RegistrationHomeView from '../views/RegistrationFolder/RegistrationHomeView.vue'
import CompanyView from '../views/RegistrationFolder/CompanyView.vue'
import HeadhuntView from '../views/RegistrationFolder/HeadhuntView.vue'
import LoginView from '../views/LoginFolder/LoginView.vue'
import LoginHomeView from '../views/LoginFolder/LoginHomeView.vue'
import ResetPassword from '../views/ResetPassword.vue'
import JobView from '../views/JobView.vue'
import ListCompanyView from '../views/ListCompanyView.vue'
import PayRollView from '../views/PayRollView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      layout: 'default'
    },
    component: HomeView,
    
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    meta: {
      layout: 'resetPassword'
    },
    component: ResetPassword
  },
  {
    path: '/registration',
    name: 'registration',
    meta: {
      layout: 'registration'
    },
    component: RegistrationView,
    children: [
      {
        path: '',
        name: 'registration_view',
        component: RegistrationHomeView
      },
      {
        path: 'company',
        name: 'company',
        component: CompanyView
      },
      {
        path: 'headhunt',
        name: 'headhunt',
        component: HeadhuntView
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      layout: 'login'
    },
    component: LoginView,
    children: [
      {
        path: '',
        name: 'login_view',
        component: LoginHomeView
      }
    ]
  },
  {
    path: '/job',
    name: 'job',
    component: JobView,
  },

  {
    path: '/company',
    name: 'company',
    component: ListCompanyView,
  },
  {
    path: '/payroll',
    name: 'payroll',
    component: PayRollView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
