<template>
  <ConfigHeader title="PRアイテム"/>
  <CommonTitle text="ログイン"/>
  <LoginForm />
</template>

<script>
// @ is an alias to /src
import ConfigHeader from '@/components/config/Header.vue';
import CommonTitle from '@/components/CommonTitle.vue';
import LoginForm from '@/components/config/LoginForm.vue';

export default {
  name: 'Login',
  components: {
    ConfigHeader,
    CommonTitle,
    LoginForm,
  },
}
</script>
