<template>
  <ManagerHeader title="PRアイテム"/>
  <CommonTitle text="アカウント一覧"/>
  <Search text="アカウント名、アカウントIDを入力" @search-click="searchMethod"/>
  <AccountList :list="listRef"/>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
// @ is an alias to /src
import ManagerHeader from '@/components/manager/Header.vue';
import CommonTitle from '@/components/CommonTitle.vue';
import Search from '@/components/manager/Search.vue';
import AccountList from '@/components/manager/AccountList.vue';

export default {
  name: 'ManagerAccounts',
  components: {
    ManagerHeader,
    CommonTitle,
    Search,
    AccountList,
  },
  setup() {
    const store = useStore();
    const listRef = ref([]);

    listRef.value = store.state.suppliers;

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
