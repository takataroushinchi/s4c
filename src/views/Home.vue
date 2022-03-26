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
import { useToast } from 'vue-toastification';
// @ is an alias to /src
import Header from '@/components/Header.vue';
import CommonTitle from '@/components/CommonTitle.vue';
import SummaryList from '@/components/SummaryList.vue';
import CampaignListTitle from '@/components/CampaignListTitle.vue';
import TabNavigation from '@/components/TabNavigation.vue';
import CampaignList from '@/components/CampaignList.vue';
import Chart from '@/components/Chart.vue';

import { createClient } from 'microcms-js-sdk';

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

    // Initialize Client SDK.
    const client = createClient({
      serviceDomain: process.env.VUE_APP_API_DOMAIN,
      apiKey: process.env.VUE_APP_X_API_KEY,
    });

    client
      .get({
        endpoint: 'announcements',
        queries: { limit: 20 },
      })
      .then((res) => {
        toast.clear();
        res.contents.forEach((item) => {
          if(item.category?.category){
            // console.log(item.body);
            // console.log(item.category.category); // Default, Info, Success, Error, Warning
            switch (item.category.category){
              case 'Default':
                toast(item.title);
                break;
              case 'Info':
                toast.info(item.title);
                break;
              case 'Success':
                toast.success(item.title);
                break;
              case 'Error':
                toast.error(item.title);
                break;
              case 'Warning':
                toast.warning(item.title);
                break;
            }
          }
        })
      })
      .catch((err) => console.log(err));

    const toastId = toast.info("Loading...", { timeout: false });
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
