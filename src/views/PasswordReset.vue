<template>
  <UserHeader title="PRアイテム"/>
  <CommonTitle text="パスワード再設定"/>
  <PasswordResetForm />
</template>

<script>
// @ is an alias to /src
import UserHeader from '@/components/user/Header.vue';
import CommonTitle from '@/components/CommonTitle.vue';
import PasswordResetForm from '@/components/user/PasswordResetForm.vue';

export default {
  name: 'PasswordReset',
  components: {
    UserHeader,
    CommonTitle,
    PasswordResetForm,
  },
}
</script>
