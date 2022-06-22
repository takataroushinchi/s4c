<template>
  <ManagerHeader title="PRアイテム"/>
  <UserListTitle text="ユーザー一覧"/>
  <Search text="ID、ユーザー名、ログインIDを入力" @search-click="searchMethod"/>
  <UserList :list="listRef"/>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
// @ is an alias to /src
import ManagerHeader from '@/components/manager/Header.vue';
import UserListTitle from '@/components/manager/UserListTitle.vue';
import Search from '@/components/manager/Search.vue';
import UserList from '@/components/manager/UserList.vue';

const store = useStore();
const router = useRouter();

// ECサイト権限以外はルートにリダイレクト
if(store.state.login_user?.role !== 2){
  router.push({name: 'Root'})
}

const listRef = ref([]);
listRef.value = store.getters.generalUsers.reverse();

const searchMethod = (keyword) => {
  // 検索時の処理
  console.log(keyword);
}
</script>
