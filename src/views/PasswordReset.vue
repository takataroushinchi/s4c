<template>
  <ConfigHeader title="PRアイテム"/>
  <CommonTitle text="パスワード再設定"/>
  <PasswordResetForm />
</template>

<script>
// @ is an alias to /src
import ConfigHeader from '@/components/config/Header.vue';
import CommonTitle from '@/components/CommonTitle.vue';
import PasswordResetForm from '@/components/config/PasswordResetForm.vue';

export default {
  name: 'PasswordReset',
  components: {
    ConfigHeader,
    CommonTitle,
    PasswordResetForm,
  },
}
</script>
