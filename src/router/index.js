import { createRouter, createWebHistory } from 'vue-router'
// store
import Store from '@/store/index.js'
// Views
import Home from '../views/Home.vue'
import CampaignEdit from '../views/CampaignEdit.vue'
import CampaignDetail from '../views/CampaignDetail.vue'
import Report from '../views/Report.vue'
import CsvDownLoad from '../views/CsvDownLoad.vue'
import NotFound from '@/views/NotFound.vue'
// manager
import ManagerAccounts from '../views/ManagerAccounts.vue'
import ManagerReport from '../views/ManagerReport.vue'
import ManagerUsers from '../views/ManagerUsers.vue'
import ManagerUsersCreate from '../views/ManagerUsersCreate.vue'
import ManagerUsersEdit from '../views/ManagerUsersEdit.vue'
// config
import Root from '../views/Root.vue'
import Login from '../views/Login.vue'
import PasswordSet from '../views/PasswordSet.vue'
import PasswordReset from '../views/PasswordReset.vue'
import SuppliersSelect from '../views/SuppliersSelect.vue'
import AccountsUnauthorized from '../views/AccountsUnauthorized.vue'

// @ is an alias to /src
// Design
import UI from '@/views/UI.vue'
import FeatureTest from '@/views/FeatureTest.vue'

const routes = [
  {
    path: '/',
    name: 'Root',
    component: Root,
    meta: { requiresAuth: true }
  },
  {
    path: '/user',
    name: 'SupplierHome',
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: '/user/archive',
    name: 'UserHomeArchive',
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: '/user/campaign/create',
    name: 'CampaignCreate',
    component: CampaignEdit,
    meta: { requiresAuth: true }
  },
  {
    path: '/user/campaign/:campaign_id?/edit',
    name: 'CampaignEdit',
    component: CampaignEdit,
    meta: { requiresAuth: true }
  },
  {
    path: '/user/campaign/:campaign_id?/detail',
    name: 'CampaignDetail',
    component: CampaignDetail,
    meta: { requiresAuth: true }
  },
  {
    path: '/user/report',
    name: 'Report',
    component: Report,
    meta: { requiresAuth: true }
  },
  {
    path: '/user/report/daily',
    name: 'ReportDimensionDaily',
    component: Report,
    meta: { requiresAuth: true }
  },
  {
    path: '/user/report/monthly',
    name: 'ReportDimensionMonthly',
    component: Report,
    meta: { requiresAuth: true }
  },
  {
    path: '/user/report/campaign',
    name: 'ReportDimensionCampaign',
    component: Report,
    meta: { requiresAuth: true }
  },
  {
    path: '/user/csv-download',
    name: 'CsvDownLoad',
    component: CsvDownLoad,
    meta: { requiresAuth: true }
  },
  // manager
  {
    path: '/manager/accounts',
    name: 'ManagerAccounts',
    component: ManagerAccounts,
    meta: { requiresAuth: true }
  },
  {
    path: '/manager/users',
    name: 'ManagerUsers',
    component: ManagerUsers,
    meta: { requiresAuth: true }
  },
  {
    path: '/manager/users/create',
    name: 'ManagerUsersCreate',
    component: ManagerUsersCreate,
    meta: { requiresAuth: true }
  },
  {
    path: '/manager/users/:user_id?/edit',
    name: 'ManagerUsersEdit',
    component: ManagerUsersEdit,
    meta: { requiresAuth: true }
  },
  {
    path: '/manager/report',
    name: 'ManagerReport',
    component: ManagerReport,
    meta: { requiresAuth: true }
  },
  {
    path: '/manager/report/daily',
    name: 'ManagerReportDimensionDaily',
    component: ManagerReport,
    meta: { requiresAuth: true }
  },
  {
    path: '/manager/report/monthly',
    name: 'ManagerReportDimensionMonthly',
    component: ManagerReport,
    meta: { requiresAuth: true }
  },
  {
    path: '/manager/report/account',
    name: 'ManagerReportDimensionAccount',
    component: ManagerReport,
    meta: { requiresAuth: true }
  },
  // config
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/password/:user_id?/set',
    name: 'PasswordSet',
    component: PasswordSet
  },
  {
    path: '/password/reset',
    name: 'PasswordReset',
    component: PasswordReset
  },
  {
    path: '/supplier/select',
    name: 'SuppliersSelect',
    component: SuppliersSelect,
    meta: { requiresAuth: true }
  },
  {
    path: '/accounts/unauthorized',
    name: 'AccountsUnauthorized',
    component: AccountsUnauthorized,
    meta: { requiresAuth: true }
  },
  // design
  {
    path: '/ui',
    name: 'UI',
    component: UI
  },
  {
    path: '/ui/:id',
    name: 'UIID',
    component: UI
  },
  {
    path: '/feature',
    name: 'FeatureTest',
    component: FeatureTest
  },
  {
    path: '/:pathMatch(.*)*',
    // redirect:'/',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !Store.state.userToken) {
    next({ name: 'Login'});
  } else {
    next();
  }
});

export default router
