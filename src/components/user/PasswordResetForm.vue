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
        <button type="button" class="c-Button _primary" @click="handleClick">決定</button>
      </div><!-- /c-Content__footer -->
    </div><!-- /c-Content__inner -->
  </div><!-- /c-Content -->
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: 'PasswordResetForm',
  setup() {
    const router = useRouter();

    const handleBack = () => {
      router.back()
    }

    const handleClick = () => {
      // パスワードリセット時の処理
      router.push({ name: 'Login'})
    }

    return {
      handleBack,
      handleClick,
    }
  }
}
</script>
