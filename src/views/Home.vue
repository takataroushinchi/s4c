<template>
  <Header title="アカウント名称"/>
  <CommonTitle text="サマリー"/>
  <SummaryList/>
  <Chart/>
  <CampaignListTitle text="キャンペーン一覧"/>
  <tab-navigation/>
  <CampaignList :list="listRef"/>
</template>

<script setup>
import { ref, h } from 'vue';
import { useRoute, onBeforeRouteLeave } from 'vue-router';
import { useToast } from 'vue-toastification';
import { useStore } from 'vuex';
import { createClient } from 'microcms-js-sdk';
// @ is an alias to /src
import Header from '@/components/Header.vue';
import CommonTitle from '@/components/CommonTitle.vue';
import SummaryList from '@/components/SummaryList.vue';
import CampaignListTitle from '@/components/CampaignListTitle.vue';
import TabNavigation from '@/components/TabNavigation.vue';
import CampaignList from '@/components/CampaignList.vue';
import Chart from '@/components/Chart.vue';

const listRef = ref([]);
const route = useRoute();
const path = route.path;
const toast = useToast();
const store = useStore();

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
if(!store.state.announced){
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
      store.dispatch('setAnnounced')
      toast.clear();
      // toast.info(h('h1', { class: 'Vue-Toastification__toast-body u-TextEllipsis2line'}, h('strong', '告知')), { timeout: false });

      res.contents.forEach( item => {
        const vNodeJSX = h('div', [
          h('h1', { class: 'Vue-Toastification__toast-body u-TextEllipsis2line'}, h('strong', item.title)),
          h('div', { class: 'Vue-Toastification__toast-body u-TextEllipsis4line', innerHTML: item.body })
        ]);
        // console.log(item.category.category); // Draft, Default, Info, Success, Error, Warning
        switch (item.category.category){
          case 'Default':
            toast(vNodeJSX);
            break;
          case 'Info':
            toast.info(vNodeJSX, { timeout: false });
            break;
          case 'Success':
            toast.success(vNodeJSX);
            break;
          case 'Error':
            toast.error(vNodeJSX);
            break;
          case 'Warning':
            toast.warning(vNodeJSX, { timeout: false });
            break;
          }
      })
    })
    .catch((err) => console.log(err));
}

// const toastId = toast.info("Loading...", { timeout: false });
// const startTime = new Date();
// const intervalId = setInterval(() =>{
//   let _time = new Date() - startTime;
//   toast.update(toastId, { content: `... ${_time} Loaded!` });
//   if(_time > 5000){
//     clearInterval(intervalId);
//     toast.update(toastId, { content: `${_time} Finished!`, options: { timeout: 5000 } });
//   }}, 300);

onBeforeRouteLeave((to) => {
  listRef.value = (/archive$/.test(to.path))? data[1] : data[0];
})
</script>
