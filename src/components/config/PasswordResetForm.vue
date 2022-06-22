<template>
  <div class="c-Content _w-m">
    <div class="c-Content__inner">
      <div class="c-Content__unit">
        <div class="c-Input__group">
          <div class="c-Input__label">
            <label>
              メールアドレス
            </label>
            <input class="c-Input" :class="{'is-invalid': isInvalidRef}" type="text" v-model="emailRef" spellcheck="false" inputmode="email" placeholder="ご登録メールアドレをを入力してください">
            <div class="c-Input__feedback">登録されたメールアドレスを入力してください</div>
          </div><!-- /c-Input__label -->
        </div><!-- /c-Input__group -->
        <p class="c-Content__unitText">ご登録メールアドレスを入力してください。ご指定のメールアドレスにパスワード再設定の情報を送りします。</p>
      </div><!-- /c-Content__unit -->

      <div class="c-Content__footer u-FlexBox u-FlexBox--middle u-FlexBox--right">
        <button type="button" class="c-Button _element" @click="handleBack">キャンセル</button>
        <div class="u-FlexBox__spacer"></div>
        <button type="button" class="c-Button _primary" @click="handleClick">決定</button>
      </div><!-- /c-Content__footer -->
    </div><!-- /c-Content__inner -->
  </div><!-- /c-Content -->
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const router = useRouter();
const store = useStore();

const emailRef = ref('');
const isInvalidRef = ref(false)

const handleBack = () => {
  router.back()
}

const handleClick = () => {
  // パスワードリセット時の処理
  // メール送信、ログアウト後、ログインページへ遷移
  isInvalidRef.value = false;
  if(emailRef.value === ''){
    isInvalidRef.value = true;
    return;
  }

  store.dispatch('logout')
  router.push({ name: 'Login'})
}
</script>
