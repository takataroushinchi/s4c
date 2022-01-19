<template>
  <router-view/>
</template>

<script>
import 'vue2-datepicker/index.css';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
	components: {
  },
  setup() {
    const router = useRouter();
    const store = useStore();

    if(store.getters.uid === 4){
      router.push({ name: 'ManagerAccounts'})
    } else if (store.getters.uid === 1){
      router.push({ name: 'AccountsSelect'})
    } else if (store.getters.uid === 2){
      router.push({ name: 'AccountsSelect'})
    } else if (store.getters.uid === 3){
      router.push({ name: 'AccountsUnauthorized'})
    } else {
      router.push({ name: 'Login'})
    }
  }
}
</script>

<style>
@import "./assets/css/common.css";
</style>
