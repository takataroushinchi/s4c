<template>
  <div class="c-Content _w-m">
    <div class="c-Content__inner">
      <div class="c-Content__unit">
        <div class="c-Input__group">
          <div class="c-Input__label">
            <label>
              新しいパスワード
            </label>
            <input class="c-Input" :class="{'is-invalid': isInvalid1Ref}" type="password" v-model="password1Ref" spellcheck="false" placeholder="パスワードを入力してください">
            <div class="c-Input__feedback">パスワードを入力してください</div>
          </div><!-- /c-Input__label -->
        </div><!-- /c-Input__group -->
      </div><!-- /c-Content__unit -->

      <div class="c-Content__unit">
        <div class="c-Input__group">
          <div class="c-Input__label">
            <label>
              新しいパスワード再入力
            </label>
            <input class="c-Input" :class="{'is-invalid': isInvalid2Ref}" type="password" v-model="password2Ref" spellcheck="false" placeholder="パスワードを再入力してください">
            <div class="c-Input__feedback">入力文字が一致しません</div>
          </div><!-- /c-Input__label -->
        </div><!-- /c-Input__group -->
      </div><!-- /c-Content__unit -->

      <div class="c-Content__footer u-FlexBox u-FlexBox--middle u-FlexBox--right">
        <div class="u-FlexBox__spacer"></div>
        <button type="button" class="c-Button _primary" @click="handleClick">パスワード設定</button>
      </div><!-- /c-Content__footer -->
    </div><!-- /c-Content__inner -->
  </div><!-- /c-Content -->
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const password1Ref = ref('')
const password2Ref = ref('')
const isInvalid1Ref = ref(false)
const isInvalid2Ref = ref(false)

const handleClick = () => {
  // パスワード登録時の処理
  isInvalid1Ref.value = false;
  isInvalid2Ref.value = false;

  if(password1Ref.value === ''){
    isInvalid1Ref.value = true;
    return;
  }
  if(password2Ref.value === ''){
    isInvalid2Ref.value = true;
    return;
  }
  if(password1Ref.value !== password2Ref.value){
    isInvalid2Ref.value = true;
    return;
  }

  router.push({ name: 'Login'})
}
</script>
