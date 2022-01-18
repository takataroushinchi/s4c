<template>
  <HeaderUser title="PRアイテム"/>
  <CommonTitle text="利用アカウント選択"/>
  <AccountsSelectForm />
</template>

<script>
// @ is an alias to /src
import HeaderUser from '@/components/user/HeaderUser.vue';
import CommonTitle from '@/components/CommonTitle.vue';
import AccountsSelectForm from '@/components/user/AccountsSelectForm.vue';

export default {
  name: 'AccountsSelect',
  components: {
    HeaderUser,
    CommonTitle,
    AccountsSelectForm,
  },
}
</script>
