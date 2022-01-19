<template>
  <ConfigHeader title="PRアイテム"/>
  <CommonTitle text="パスワード設定"/>
  <PasswordSetForm />
</template>

<script>
// @ is an alias to /src
import ConfigHeader from '@/components/config/Header.vue';
import CommonTitle from '@/components/CommonTitle.vue';
import PasswordSetForm from '@/components/config/PasswordSetForm.vue';

export default {
  name: 'PasswordSet',
  components: {
    ConfigHeader,
    CommonTitle,
    PasswordSetForm,
  },
}
</script>
