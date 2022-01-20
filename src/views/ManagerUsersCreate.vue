<template>
  <ManagerHeader title="PRアイテム"/>
  <CommonTitle text="ユーザー作成"/>
  <UsersCreate />
</template>

<script>
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
  }
}
</script>
