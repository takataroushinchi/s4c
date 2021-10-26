<template>
  <CommonTitle :text="title"/>
  <CampaignContent :text="text" :isEdit="isEdit"/>
</template>

<script>
import { useRoute } from 'vue-router';
// @ is an alias to /src
import CommonTitle from '@/components/CommonTitle.vue';
import CampaignContent from '@/components/CampaignContent.vue';

export default {
  name: 'CampaignEdit',
  components: {
    CommonTitle,
    CampaignContent,
  },
  setup() {
    const route = useRoute()
    const path = route.path;

    const title = (path === '/create')? 'キャンペーン作成' : 'キャンペーン編集';
    const text = (path === '/create')? '作成' : '変更';
    const isEdit = (path === '/edit')? true : false;

    return {
      title,
      text,
      isEdit,
    }
  },
}
</script>
