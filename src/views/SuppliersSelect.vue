<template>
  <ConfigHeader title="PRアイテム"/>
  <CommonTitle text="利用アカウント選択"/>
  <SuppliersSelectForm />
</template>

<script>
// @ is an alias to /src
import ConfigHeader from '@/components/config/Header.vue';
import CommonTitle from '@/components/CommonTitle.vue';
import SuppliersSelectForm from '@/components/config/SuppliersSelectForm.vue';

export default {
  name: 'AccountsSelect',
  components: {
    ConfigHeader,
    CommonTitle,
    SuppliersSelectForm,
  },
}
</script>
