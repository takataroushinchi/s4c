<template>
  <div class="c-Content _1by2">
    <div class="c-Content__inner">
      <div class="c-Content__header u-FlexBox u-FlexBox--middle u-FlexBox--right">
        <button type="button" class="c-Button _element" @click="handleBack">キャンセル</button>
        <div class="u-FlexBox__spacer"></div>
        <button type="button" class="c-Button _primary" @click="handleClick">作成</button>
      </div><!-- /c-Content__header -->

      <div class="c-Content__unit">
        <div class="c-Input__group">
          <div class="c-Input__label">
            <label>
              ユーザー名（最大20文字）<i class="c-Input__required">※必須</i>
            </label>
            <input class="c-Input" :class="{'is-invalid': isInvalidNameRef}" type="text" v-model="nameRef" spellcheck="false" placeholder="最大20文字">
            <div class="c-Input__feedback">最大20文字で入力してください</div>
          </div><!-- /c-Input__label -->
        </div><!-- /c-Input__group -->
      </div><!-- /c-Content__unit -->

      <div class="c-Content__unit">
        <div class="c-Input__group">
          <div class="c-Input__label">
            <label>
              ログインID（メールアドレス）<i class="c-Input__required">※必須</i>
            </label>
            <input class="c-Input" :class="{'is-invalid': isInvalidEmailRef}" type="text" v-model="emailRef" spellcheck="false" placeholder="メールアドレスを入力してください">
            <div class="c-Input__feedback">メールアドレスを入力してください</div>
          </div><!-- /c-Input__label -->
        </div><!-- /c-Input__group -->
      </div><!-- /c-Content__unit -->

      <div class="c-Content__unit">
        <div class="c-Input__group">
          <div class="c-Input__label">
            <label>
              アカウント権限
            </label>
            <select class="c-Input" name="accounts" @change="handleChange">
              <option value="">-</option>
              <option v-for="item in accountsData" :value="item.id" :key="item.id">{{ item.supplier_name }}</option>
            </select>
          </div><!-- /c-Input__label -->
        </div><!-- /c-Input__group -->
        <p class="c-Content__unitText">作成後に、ログイン情報が記載されたメールがユーザーへ送信されます。</p>
      </div><!-- /c-Content__unit -->


    </div><!-- /c-Content__inner -->
  </div><!-- /c-Content -->
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
  name: 'UsersCreateForm',
  setup() {
    const router = useRouter();
    const store = useStore();
    const nameRef = ref('')
    const emailRef = ref('')
    const isInvalidNameRef = ref(false)
    const isInvalidEmailRef = ref(false)
    let selectedAccont;
    let setAccountArray = [];

    const accountsData = store.state.suppliers;

    const validEmail = (email) => {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }

    const handleChange = (e) => {
      selectedAccont = e.target.value;
      setAccountArray = (selectedAccont) ? [ Number(selectedAccont) ] : []
    }

    const handleBack = () => {
      router.back()
    }

    const handleClick = () => {
      // パスワード登録時の処理
      isInvalidNameRef.value = false;
      isInvalidEmailRef.value = false;

      if(nameRef.value === '' || nameRef.value.length > 20){
        isInvalidNameRef.value = true;
        return;
      }
      if( !validEmail(emailRef.value) ){
        isInvalidEmailRef.value = true;
        return;
      }

      const setUserId = Number(store.state.users.length) +1;

      const newUser = {
          user_id: setUserId,
          user_name: nameRef.value,
          email: emailRef.value,
          password: '',
          role: 1,
          login: true,
          supplier_id: setAccountArray
        }
      store.dispatch('pushRegisterUser', newUser)
      router.push({ name: 'ManagerUsers' })
    }


    return {
      handleChange,
      handleBack,
      handleClick,
      nameRef,
      emailRef,
      isInvalidNameRef,
      isInvalidEmailRef,
      accountsData,
    }
  }
}
</script>
