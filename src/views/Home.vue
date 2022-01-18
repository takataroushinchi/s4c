<template>
  <Header title="アカウント名称"/>
  <CommonTitle text="サマリー"/>
  <SummaryList/>
  <Chart/>
  <CampaignListTitle text="キャンペーン一覧"/>
  <tab-navigation/>
  <CampaignList :list="listRef"/>
</template>

<script>
import { ref } from 'vue'
import { useRoute, onBeforeRouteLeave } from 'vue-router';
// @ is an alias to /src
import Header from '@/components/Header.vue';
import CommonTitle from '@/components/CommonTitle.vue';
import SummaryList from '@/components/SummaryList.vue';
import CampaignListTitle from '@/components/CampaignListTitle.vue';
import TabNavigation from '@/components/TabNavigation.vue';
import CampaignList from '@/components/CampaignList.vue';
import Chart from '@/components/Chart.vue';

export default {
  name: 'Home',
  components: {
    Header,
    CommonTitle,
    SummaryList,
    CampaignListTitle,
    TabNavigation,
    CampaignList,
    Chart,
  },
  setup() {
    let listRef = ref([])
    const route = useRoute()
    const path = route.path;
    const data = [[
      { id: 1, status: 'valid', text: '有効' },
      { id: 2, status: 'invalid', text: '一時停止' },
      { id: 3, status: 'valid', text: '有効' },
      { id: 4, status: 'valid', text: '有効' },
    ],
    [
      { id: 1, status: 'archive', text: 'アーカイブ' },
      { id: 2, status: 'archive', text: 'アーカイブ' },
      { id: 3, status: 'archive', text: 'アーカイブ' }
    ]]

    listRef.value = (path === '/archive')? data[1] : data[0];

    onBeforeRouteLeave((to) => {
      listRef.value = (to.path === '/archive')? data[1] : data[0];
    })

    return {
      listRef,
    }
  },
}
</script>
