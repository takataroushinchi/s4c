<template>
  <ConfigHeader title="PRアイテム"/>
</template>

<script>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

// @ is an alias to /src
import ConfigHeader from '@/components/config/Header.vue';

export default {
  name: 'Root',
  components: {
    ConfigHeader,
  },
  setup() {
    const router = useRouter();
    const store = useStore();

    if(store.state.login_user){
      if(store.state.login_user.role === 2){
        router.push({name: 'ManagerAccounts'})
      }else if(store.state.login_user.supplier_id.length === 1){
        router.push({name: 'SupplierHome'})
      }else if(store.state.login_user.supplier_id.length === 0){
        router.push({name: 'AccountsUnauthorized'})
      }else{
        router.push({name: 'SuppliersSelect'})
      }
    }else{
      router.push({name: 'Login'})
    }
  }
}
</script>
