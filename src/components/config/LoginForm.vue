<template>
  <div class="c-Content _1by2">
    <div class="c-Content__inner">

      <div class="c-Content__unit">
        <div class="c-Input__group">
          <div class="c-Input__label">
            <label>
              ユーザー名またはメールアドレス
            </label>
            <input class="c-Input" :class="{'is-invalid': isInvalidUserRef}" type="text" name="user" v-model="userRef" spellcheck="false" placeholder="ユーザー名またはメールアドレスを入力してください">
            <div class="c-Input__feedback">登録されたユーザー名またはメールアドレスを入力してください</div>
          </div><!-- /c-Input__label -->
        </div><!-- /c-Input__group -->
      </div><!-- /c-Content__unit -->

      <div class="c-Content__unit">
        <div class="c-Input__group">
          <div class="c-Input__label">
            <label>
              パスワード
            </label>
            <input class="c-Input" :class="{'is-invalid': isInvalidPasswordRef}" type="password" v-model="passwordRef" spellcheck="false" placeholder="パスワードを入力してください">
            <div class="c-Input__feedback">パスワードが一致しません</div>
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
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
  name: 'LoginForm',
  setup() {
    const router = useRouter();
    const store = useStore();

    const userRef = ref('')
    const passwordRef = ref('')
    const isInvalidUserRef = ref(false)
    const isInvalidPasswordRef = ref(false)

    const handleClick = () => {
      // ログイン時の処理
      isInvalidUserRef.value = false;
      isInvalidPasswordRef.value = false;
      if(userRef.value === ''){
        isInvalidUserRef.value = true;
        return;
      }
      if(passwordRef.value === ''){
        isInvalidPasswordRef.value = true;
        return;
      }

      if(userRef.value === 'manager'){
        store.dispatch('login', store.state.users[3])
        router.push({name: 'ManagerAccounts'})
      } else if (userRef.value === 'user1'){
        store.dispatch('login', store.state.users[0])
        router.push({name: 'AccountsSelect'})
      } else if (userRef.value === 'user2'){
        store.dispatch('login', store.state.users[1])
        const user = store.getters.getUserById( Number(store.getters.uid ));
        const sid = Number(user.supplier_id[0]);
        store.dispatch('setSelectedSupplier', store.getters.getSupplierById(sid))
        router.push({name: 'UserHome'})
      } else if (userRef.value === 'user3'){
        store.dispatch('login', store.state.users[2])
        router.push({ name: 'AccountsUnauthorized'})
      } else {
        store.dispatch('login', store.state.users[6])
        router.push({name: 'AccountsSelect'})
      }
    }

    return {
      userRef,
      passwordRef,
      isInvalidUserRef,
      isInvalidPasswordRef,
      handleClick,
    }
  }
}
</script>
