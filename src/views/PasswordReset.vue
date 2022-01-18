<template>
  <HeaderUser title="PRアイテム"/>
  <CommonTitle text="パスワード再設定"/>
  <PasswordResetForm />
</template>

<script>
// @ is an alias to /src
import HeaderUser from '@/components/HeaderUser.vue';
import CommonTitle from '@/components/CommonTitle.vue';
import PasswordResetForm from '@/components/PasswordResetForm.vue';

export default {
  name: 'PasswordReset',
  components: {
    HeaderUser,
    CommonTitle,
    PasswordResetForm,
  },
}
</script>
