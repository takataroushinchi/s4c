<template>
  <div class="c-Content _1by2">
    <div class="c-Content__inner">

      <div class="c-Content__unit">
        <div class="c-Input__group">
          <div class="c-Input__label">
            <label>
              ユーザー名またはメールアドレス
            </label>
            <input class="c-Input" type="text" name="user" value="" spellcheck="false" placeholder="ユーザー名またはメールアドレスを入力してください">
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
            <input class="c-Input" type="password" name="password" value="" spellcheck="false" placeholder="パスワードを入力してください">
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
import { useRouter } from 'vue-router';

export default {
  name: 'LoginForm',
  setup() {
    const router = useRouter();

    const handleClick = () => {
      // ログイン時の処理
      router.push({ name: 'AccountsSelect'})
    }

    return {
      handleClick,
    }
  }
}
</script>
