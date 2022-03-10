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
import { ref } from 'vue';
import { useRoute, onBeforeRouteLeave } from 'vue-router';
// @ is an alias to /src
import Header from '@/components/Header.vue';
import CommonTitle from '@/components/CommonTitle.vue';
import SummaryList from '@/components/SummaryList.vue';
import CampaignListTitle from '@/components/CampaignListTitle.vue';
import TabNavigation from '@/components/TabNavigation.vue';
import CampaignList from '@/components/CampaignList.vue';
import Chart from '@/components/Chart.vue';
import { useToast } from 'vue-toastification';

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
    const listRef = ref([]);
    const route = useRoute();
    const path = route.path;
    const toast = useToast();

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

    listRef.value = (/archive$/.test(path))? data[1] : data[0];

    const toastId = toast("Loading...", { timeout: false });
    const startTime = new Date();
    const intervalId = setInterval(() =>{
      let _time = new Date() - startTime;
      toast.update(toastId, { content: `... ${_time} Loaded!` });
      if(_time > 5000){
        clearInterval(intervalId);
        toast.update(toastId, { content: `${_time} Finished!`, options: { timeout: 5000 } });
      }}, 300);

    onBeforeRouteLeave((to) => {
      listRef.value = (/archive$/.test(to.path))? data[1] : data[0];
    })

    return {
      listRef,
    }
  },
}
</script>
