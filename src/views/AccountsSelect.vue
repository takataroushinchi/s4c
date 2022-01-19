<template>
  <ConfigHeader title="PRアイテム"/>
  <CommonTitle text="利用アカウント選択"/>
  <AccountsSelectForm />
</template>

<script>
// @ is an alias to /src
import ConfigHeader from '@/components/config/Header.vue';
import CommonTitle from '@/components/CommonTitle.vue';
import AccountsSelectForm from '@/components/config/AccountsSelectForm.vue';

export default {
  name: 'AccountsSelect',
  components: {
    ConfigHeader,
    CommonTitle,
    AccountsSelectForm,
  },
}
</script>
