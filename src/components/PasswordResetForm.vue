<template>
  <div class="c-Content _1by2">
    <div class="c-Content__inner">
      <div class="c-Content__unit">
        <div class="c-Input__group">
          <div class="c-Input__label">
            <label>
              メールアドレス
            </label>
            <input class="c-Input" type="text" name="email" value="" spellcheck="false" placeholder="メールアドレスを入力してください">
            <div class="c-Input__feedback">エラーです</div>
          </div><!-- /c-Input__label -->
        </div><!-- /c-Input__group -->
        <p class="c-Content__unitText">ご登録メールアドレス（ユーザーID）を入力してください。ご指定のメールアドレスにパスワード再設定の情報を送りします。</p>
      </div><!-- /c-Content__unit -->

      <div class="c-Content__footer u-FlexBox u-FlexBox--middle u-FlexBox--right">
        <button type="button" class="c-Button _element" @click="handleBack">キャンセル</button>
        <div class="u-FlexBox__spacer"></div>
        <router-link :to="{ name: 'Login'}" exact-active-class="is-selected" class="c-Button _primary">決定</router-link>
      </div><!-- /c-Content__footer -->
    </div><!-- /c-Content__inner -->
  </div><!-- /c-Content -->
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: 'PasswordResetForm',
  setup() {
    const router = useRouter()
    const handleBack = () => {
      router.back()
    }
    return {
      handleBack,
    }
  }
}
</script>
