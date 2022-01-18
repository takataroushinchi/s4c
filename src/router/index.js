import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CampaignEdit from '../views/CampaignEdit.vue'
import CampaignDetail from '../views/CampaignDetail.vue'
import Report from '../views/Report.vue'
import CsvDownLoad from '../views/CsvDownLoad.vue'
import Login from '../views/Login.vue'
import PasswordSet from '../views/PasswordSet.vue'
import PasswordReset from '../views/PasswordReset.vue'
import AccountsSelect from '../views/AccountsSelect.vue'
import AccountsUnauthorized from '../views/AccountsUnauthorized.vue'

// @ is an alias to /src
import UI from '@/views/UI.vue'
import FeatureTest from '@/views/FeatureTest.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/archive',
    name: 'CampaignArchive',
    component: Home
  },
  {
    path: '/accounts/:supplier_id?/list',
    name: 'AccountsList',
    component: Home
  },
  {
    path: '/create',
    name: 'CreateCampaign',
    component: CampaignEdit
  },
  {
    path: '/edit',
    name: 'EditCampaign',
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
  {
    path: '/manager/accounts',
    name: 'ManagerAccounts',
    component: Home
  },
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
