<template>
  <div class="c-Content _1by2">
    <div class="c-Content__inner">
      <div class="c-Content__unit">
        <div class="c-Input__group">
          <div class="c-Input__label">
            <label>
              新しいパスワード
            </label>
            <input class="c-Input" type="password" name="password_1" value="" spellcheck="false" placeholder="パスワードを入力してください">
            <div class="c-Input__feedback">エラーです</div>
          </div><!-- /c-Input__label -->
        </div><!-- /c-Input__group -->
      </div><!-- /c-Content__unit -->

      <div class="c-Content__unit">
        <div class="c-Input__group">
          <div class="c-Input__label">
            <label>
              新しいパスワード再入力
            </label>
            <input class="c-Input" type="password" name="password_2" value="" spellcheck="false" placeholder="パスワードを再入力してください">
            <div class="c-Input__feedback">エラーです</div>
          </div><!-- /c-Input__label -->
        </div><!-- /c-Input__group -->
      </div><!-- /c-Content__unit -->

      <div class="c-Content__footer u-FlexBox u-FlexBox--middle u-FlexBox--right">
        <div class="u-FlexBox__spacer"></div>
        <router-link :to="{ name: 'Login'}" exact-active-class="is-selected" class="c-Button _primary">パスワード設定</router-link>
      </div><!-- /c-Content__footer -->
    </div><!-- /c-Content__inner -->
  </div><!-- /c-Content -->
</template>

<script>
// import { useRouter } from 'vue-router';

export default {
  name: 'PasswordSetForm',
  // setup() {
  //   const router = useRouter()
  //   const handleBack = () => {
  //     router.back()
  //   }
  //   return {
  //     handleBack,
  //   }
  // }
}
</script>
