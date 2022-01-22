<template>
  <ManagerHeader title="PRアイテム"/>
  <CommonTitle text="ユーザー作成"/>
  <UsersCreate />
</template>

<script>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
// @ is an alias to /src
import ManagerHeader from '@/components/manager/Header.vue';
import CommonTitle from '@/components/CommonTitle.vue';
import UsersCreate from '@/components/manager/UsersCreateForm.vue';

export default {
  name: 'ManagerUsersCreate',
  components: {
    ManagerHeader,
    CommonTitle,
    UsersCreate,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    // ECサイト権限以外はルートにリダイレクト
    if(store.state.login_user?.role !== 2){
      router.push({name: 'Root'})
    }
  }
}
</script>
