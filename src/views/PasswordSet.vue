<template>
  <HeaderUser title="PRアイテム"/>
  <CommonTitle text="パスワード設定"/>
  <PasswordSetForm />
</template>

<script>
// @ is an alias to /src
import HeaderUser from '@/components/user/HeaderUser.vue';
import CommonTitle from '@/components/CommonTitle.vue';
import PasswordSetForm from '@/components/user/PasswordSetForm.vue';

export default {
  name: 'PasswordSet',
  components: {
    HeaderUser,
    CommonTitle,
    PasswordSetForm,
  },
}
</script>
