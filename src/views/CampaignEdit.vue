<template>
  <Header title="アカウント名称"/>
  <CommonTitle :text="title"/>
  <CampaignContent :text="text" :isEdit="isEdit"/>
</template>

<script setup>
import { useRoute } from 'vue-router';
// @ is an alias to /src
import Header from '@/components/Header.vue';
import CommonTitle from '@/components/CommonTitle.vue';
import CampaignContent from '@/components/CampaignContent.vue';

const route = useRoute()
const path = route.path;

const title = (/create$/.test(path))? 'キャンペーン作成' : 'キャンペーン編集';
const text = (/create$/.test(path))? '作成' : '変更';
const isEdit = (/edit$/.test(path))? true : false;
</script>
