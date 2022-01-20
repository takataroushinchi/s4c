<template>
  <ManagerHeader title="PRアイテム"/>
  <UserListTitle text="ユーザー一覧"/>
  <Search text="ID、ユーザー名、ログインIDを入力" @search-click="searchMethod"/>
  <UserList :list="listRef"/>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
// @ is an alias to /src
import ManagerHeader from '@/components/manager/Header.vue';
import UserListTitle from '@/components/manager/UserListTitle.vue';
import Search from '@/components/manager/Search.vue';
import UserList from '@/components/manager/UserList.vue';

export default {
  name: 'ManagerUsers',
  components: {
    ManagerHeader,
    UserListTitle,
    Search,
    UserList,
  },
  setup() {
    const store = useStore();
    const listRef = ref([]);

    listRef.value = store.getters.generalUsers.reverse();

    const searchMethod = (keyword) => {
      // 検索時の処理
      console.log(keyword);
    }

    return {
      listRef,
      searchMethod,
    }
  }
}
</script>
