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

    if(store.state.login_user?.user_id === 4){
      router.push({name: 'ManagerAccounts'})
    }else if(store.state.login_user?.user_id === 1){
      router.push({name: 'AccountsSelect'})
    }else if(store.state.login_user?.user_id === 2){
      router.push({name: 'UserHome'})
    }else if(store.state.login_user?.user_id === 3){
      router.push({name: 'AccountsUnauthorized'})
    }else{
      router.push({name: 'Login'})
    }
  }
}
</script>
