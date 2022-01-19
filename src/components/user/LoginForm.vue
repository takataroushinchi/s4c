<template>
  <div class="c-Content _1by2">
    <div class="c-Content__inner">

      <div class="c-Content__unit">
        <div class="c-Input__group">
          <div class="c-Input__label">
            <label>
              ユーザー名またはメールアドレス
            </label>
            <input class="c-Input" type="text" name="user" v-model="userRef" placeholder="ユーザー名またはメールアドレスを入力してください">
            <div class="c-Input__feedback">エラーです</div>
          </div><!-- /c-Input__label -->
        </div><!-- /c-Input__group -->
      </div><!-- /c-Content__unit -->

      <div class="c-Content__unit">
        <div class="c-Input__group">
          <div class="c-Input__label">
            <label>
              パスワード
            </label>
            <input class="c-Input" type="password" v-model="passwordRef" placeholder="パスワードを入力してください">
            <div class="c-Input__feedback">エラーです</div>
          </div><!-- /c-Input__label -->
        </div><!-- /c-Input__group -->
      </div><!-- /c-Content__unit -->

      <div class="c-Content__footer u-FlexBox u-FlexBox--middle u-FlexBox--justify">
        <router-link :to="{ name: 'PasswordReset'}" exact-active-class="is-selected" class="c-Button _element">ログインできない方</router-link>
        <div class="u-FlexBox__spacer"></div>
        <button type="button" class="c-Button _primary" @click="handleClick">ログイン</button>
      </div><!-- /c-Content__footer -->
    </div><!-- /c-Content__inner -->
  </div><!-- /c-Content -->

</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { useStore } from 'vuex'

export default {
  name: 'LoginForm',
  setup() {
    const router = useRouter();
    const store = useStore();

    const userRef = ref('')
    const passwordRef = ref('')

    const handleClick = () => {
      // ログイン時の処理
      if(userRef.value === '') return;
      if(passwordRef.value === '') return;

      if(userRef.value === 'manager'){
        store.dispatch('login', store.state.users[3])
        router.push({ name: 'ManagerAccounts'})
      } else if (userRef.value === 'user1'){
        store.dispatch('login', store.state.users[0])
        router.push({ name: 'AccountsSelect'})
      } else if (userRef.value === 'user2'){
        store.dispatch('login', store.state.users[1])
        router.push({ name: 'AccountsSelect'})
      } else {
        store.dispatch('login', store.state.users[2])
        // router.push({ name: 'AccountsUnauthorized'})
        router.push({ name: 'AccountsSelect'})
      }
    }

    return {
      userRef,
      passwordRef,
      handleClick,
    }
  }
}
</script>
