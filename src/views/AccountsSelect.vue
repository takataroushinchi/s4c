<template>
  <UserHeader title="PRアイテム"/>
  <CommonTitle text="利用アカウント選択"/>
  <AccountsSelectForm />
</template>

<script>
// @ is an alias to /src
import UserHeader from '@/components/user/Header.vue';
import CommonTitle from '@/components/CommonTitle.vue';
import AccountsSelectForm from '@/components/user/AccountsSelectForm.vue';

export default {
  name: 'AccountsSelect',
  components: {
    UserHeader,
    CommonTitle,
    AccountsSelectForm,
  },
}
</script>
