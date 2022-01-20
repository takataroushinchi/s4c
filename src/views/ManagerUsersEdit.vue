<template>
  <ManagerHeader title="PRアイテム"/>
  <CommonTitle text="ユーザー編集"/>
  <UsersEdit />
</template>

<script>
// @ is an alias to /src
import ManagerHeader from '@/components/manager/Header.vue';
import CommonTitle from '@/components/CommonTitle.vue';
import UsersEdit from '@/components/manager/UsersEditForm.vue';

export default {
  name: 'ManagerUsersEdit',
  components: {
    ManagerHeader,
    CommonTitle,
    UsersEdit,
  },
  setup() {
  }
}
</script>
