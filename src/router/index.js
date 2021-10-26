import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CampaignEdit from '../views/CampaignEdit.vue'
import CampaignDetail from '../views/CampaignDetail.vue'
import Report from '../views/Report.vue'
import CsvDownLoad from '../views/CsvDownLoad.vue'

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
