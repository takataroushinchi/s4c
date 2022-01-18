<template>
  <HeaderUser title="PRアイテム"/>
  <CommonTitle text="ログイン"/>
  <LoginForm />
</template>

<script>
// @ is an alias to /src
import HeaderUser from '@/components/HeaderUser.vue';
import CommonTitle from '@/components/CommonTitle.vue';
import LoginForm from '@/components/LoginForm.vue';

export default {
  name: 'Login',
  components: {
    HeaderUser,
    CommonTitle,
    LoginForm,
  },
}
</script>
