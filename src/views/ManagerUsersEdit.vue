<template>
  <ManagerHeader title="PRアイテム"/>
  <CommonTitle text="ユーザー編集"/>
  <UsersEdit />
</template>

<script setup>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
// @ is an alias to /src
import ManagerHeader from '@/components/manager/Header.vue';
import CommonTitle from '@/components/CommonTitle.vue';
import UsersEdit from '@/components/manager/UsersEditForm.vue';

const store = useStore();
const router = useRouter();

// ECサイト権限以外はルートにリダイレクト
if(store.state.login_user?.role !== 2){
  router.push({name: 'Root'})
}
</script>
