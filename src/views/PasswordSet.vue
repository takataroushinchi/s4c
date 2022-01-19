<template>
  <UserHeader title="PRアイテム"/>
  <CommonTitle text="パスワード設定"/>
  <PasswordSetForm />
</template>

<script>
// @ is an alias to /src
import UserHeader from '@/components/user/Header.vue';
import CommonTitle from '@/components/CommonTitle.vue';
import PasswordSetForm from '@/components/user/PasswordSetForm.vue';

export default {
  name: 'PasswordSet',
  components: {
    UserHeader,
    CommonTitle,
    PasswordSetForm,
  },
}
</script>
