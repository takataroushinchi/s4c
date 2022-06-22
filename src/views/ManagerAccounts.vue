<template>
  <ManagerHeader title="PRアイテム"/>
  <CommonTitle text="アカウント一覧"/>
  <Search text="アカウント名、アカウントIDを入力" @search-click="searchMethod"/>
  <AccountList :list="listRef"/>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
// @ is an alias to /src
import ManagerHeader from '@/components/manager/Header.vue';
import CommonTitle from '@/components/CommonTitle.vue';
import Search from '@/components/manager/Search.vue';
import AccountList from '@/components/manager/AccountList.vue';

const store = useStore();
const router = useRouter();

// ECサイト権限以外はルートにリダイレクト
if(store.state.login_user?.role !== 2){
  router.push({name: 'Root'})
}

const listRef = ref([]);
listRef.value = store.state.suppliers;

const searchMethod = (keyword) => {
  // 検索時の処理
  console.log(keyword);
}
</script>
