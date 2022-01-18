<template>
  <HeaderUser title="PRアイテム"/>
  <CommonTitle text="ログイン"/>
  <LoginForm />
</template>

<script>
// @ is an alias to /src
import HeaderUser from '@/components/user/HeaderUser.vue';
import CommonTitle from '@/components/CommonTitle.vue';
import LoginForm from '@/components/user/LoginForm.vue';

export default {
  name: 'Login',
  components: {
    HeaderUser,
    CommonTitle,
    LoginForm,
  },
}
</script>
