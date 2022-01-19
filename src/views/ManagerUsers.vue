<template>
  <ManagerHeader title="PRアイテム"/>
  <CommonTitle text="ユーザー一覧"/>
</template>

<script>
// @ is an alias to /src
import ManagerHeader from '@/components/manager/Header.vue';
import CommonTitle from '@/components/CommonTitle.vue';

export default {
  name: 'ManagerUsers',
  components: {
    ManagerHeader,
    CommonTitle,
  },
  setup() {
  }
}
</script>
