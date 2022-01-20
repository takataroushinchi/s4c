<template>
  <ManagerHeader title="PRアイテム"/>
  <UserListTitle text="ユーザー一覧"/>
  <Search text="ID、ユーザー名、ログインIDを入力"/>
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
    // const reversed = array1.reverse();
    listRef.value = store.state.users.reverse();

    return {
      listRef,
    }
  }
}
</script>
