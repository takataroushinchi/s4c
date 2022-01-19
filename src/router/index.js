import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CampaignEdit from '../views/CampaignEdit.vue'
import CampaignDetail from '../views/CampaignDetail.vue'
import Report from '../views/Report.vue'
import CsvDownLoad from '../views/CsvDownLoad.vue'
import NotFound from '@/views/NotFound.vue'
// config
import Login from '../views/Login.vue'
import PasswordSet from '../views/PasswordSet.vue'
import PasswordReset from '../views/PasswordReset.vue'
import AccountsSelect from '../views/AccountsSelect.vue'
import AccountsUnauthorized from '../views/AccountsUnauthorized.vue'
// manager
import ManagerAccounts from '../views/ManagerAccounts.vue'
import ManagerReport from '../views/ManagerReport.vue'
import ManagerUsers from '../views/ManagerUsers.vue'
import ManagerUsersCreate from '../views/ManagerUsersCreate.vue'
import ManagerUsersEdit from '../views/ManagerUsersEdit.vue'

// @ is an alias to /src
// Design
import UI from '@/views/UI.vue'
import FeatureTest from '@/views/FeatureTest.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/archive',
    name: 'UserHomeArchive',
    component: Home
  },
  {
    path: '/user/:supplier_id?',
    name: 'UserHome',
    component: Home
  },
  {
    path: '/create',
    name: 'CampaignCreate',
    component: CampaignEdit
  },
  {
    path: '/edit',
    name: 'CampaignEdit',
    component: CampaignEdit
  },
  {
    path: '/campaign-detail',
    name: 'CampaignDetail',
    component: CampaignDetail
  },
  {
    path: '/report',
    name: 'Report',
    component: Report
  },
  {
    path: '/report/:dimension',
    name: 'ReportDimension',
    component: Report
  },
  {
    path: '/csv-download',
    name: 'CsvDownLoad',
    component: CsvDownLoad
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
    path: '/accounts/select',
    name: 'AccountsSelect',
    component: AccountsSelect
  },
  {
    path: '/accounts/unauthorized',
    name: 'AccountsUnauthorized',
    component: AccountsUnauthorized
  },
  // manager
  {
    path: '/manager/accounts',
    name: 'ManagerAccounts',
    component: ManagerAccounts
  },
  {
    path: '/manager/users',
    name: 'ManagerUsers',
    component: ManagerUsers
  },
  {
    path: '/manager/users/create',
    name: 'ManagerUsersCreate',
    component: ManagerUsersCreate
  },
  {
    path: '/manager/users/:user_id?/edit',
    name: 'ManagerUsersEdit',
    component: ManagerUsersEdit
  },
  {
    path: '/manager/report',
    name: 'ManagerReport',
    component: ManagerReport
  },
  {
    path: '/manager/report/:dimension',
    name: 'ManagerReportDimension',
    component: ManagerReport
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

export default router
