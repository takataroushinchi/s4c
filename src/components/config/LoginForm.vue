<template>
  <div class="c-Content _w-m">
    <div class="c-Content__inner">

      <div class="c-Content__unit">
        <div class="c-Input__group">
          <div class="c-Input__label">
            <label>
              ユーザー名またはメールアドレス
            </label>
            <input class="c-Input" :class="{'is-invalid': isInvalidUserRef}" type="text" name="user" v-model="userRef" spellcheck="false" inputmode="email" placeholder="ユーザー名またはメールアドレスを入力してください">
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

      const registeredUser = store.getters.getUserByName(userRef.value);

      if(registeredUser){
        const login_params = {
          registeredUser,
          userToken: 'dummy token',
        }
        store.dispatch('login', login_params)
        // 初期選択アカウント設定
        const user = store.getters.getUserById( Number(store.getters.uid ));
        const sid = Number(user.supplier_id[0]);
        store.dispatch('setSelectedSupplier', store.getters.getSupplierById(sid))

        if(registeredUser.role === 2){
          router.push({name: 'ManagerAccounts'})
        }else if(registeredUser.supplier_id.length === 1){
          router.push({name: 'UserHome'})
        }else if(registeredUser.supplier_id.length === 0){
          router.push({name: 'AccountsUnauthorized'})
        }else{
          router.push({ name: 'SuppliersSelect'})
        }
      }else{
        // 確認用にユーザーデータがない場合適当なユーザー情報で通過させる
        // const login_params = {
        //   registeredUser: store.state.users[6],
        //   userToken: 'dummy token',
        // }
        // store.dispatch('login', login_params)
        // router.push({name: 'AccountsSelect'})

        // 登録ユーザー名でない場合はエラー表示
        isInvalidUserRef.value = true;
        return;
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
