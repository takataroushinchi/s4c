<template>
  <UserHeader title="PRアイテム"/>
  <CommonTitle text="ログイン"/>
  <LoginForm />
</template>

<script>
// @ is an alias to /src
import UserHeader from '@/components/user/Header.vue';
import CommonTitle from '@/components/CommonTitle.vue';
import LoginForm from '@/components/user/LoginForm.vue';

export default {
  name: 'Login',
  components: {
    UserHeader,
    CommonTitle,
    LoginForm,
  },
}
</script>
