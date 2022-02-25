<template>
  <div class="c-Content _1by2">
    <div class="c-Content__inner">
      <div class="c-Content__header u-FlexBox u-FlexBox--middle u-FlexBox--right">
        <button type="button" class="c-Button _element" @click="handleBack">キャンセル</button>
        <div class="u-FlexBox__spacer"></div>
        <button type="button" class="c-Button _primary" @click="handleClick">保存</button>
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
            <input class="c-Input" :class="{'is-invalid': isInvalidEmailRef}" type="text" v-model="emailRef" spellcheck="false" inputmode="email" placeholder="メールアドレスを入力してください">
            <div class="c-Input__feedback">メールアドレスを入力してください</div>
          </div><!-- /c-Input__label -->
        </div><!-- /c-Input__group -->
      </div><!-- /c-Content__unit -->

      <div class="c-Content__unit">
        <div class="u-FlexBox u-FlexBox--middle">
          <dl>
            <dt>作成日</dt>
            <dd>2022/04/04 00:00</dd>
          </dl>
          <div class="u-FlexBox__spacer"></div>
          <div class="u-FlexBox__spacer"></div>
          <dl>
            <dt>最終ログイン日</dt>
            <dd>2022/04/04 00:00</dd>
          </dl>
        </div>
      </div><!-- /c-Content__unit -->

      <div class="c-Content__unit">
        <div class="u-FlexBox u-FlexBox--middle">
          <input class="c-Checkbox" type="checkbox" id="permission" name="permission" v-model="loginRef">
          <div class="u-FlexBox__spacer"></div>
          <label for="permission">ログイン有効</label>
        </div>
      </div><!-- /c-Content__unit -->
    </div><!-- /c-Content__inner -->
  </div><!-- /c-Content -->

  <CommonTitle text="アカウント権限"/>

  <div class="c-Content _1by2">
    <div class="c-Content__inner">
      <div class="c-Content__unit">
        <div class="u-FlexBox u-FlexBox--top">
          <div class="c-Input__group">
            <div class="c-Input__label">
              <select class="c-Input" name="accounts" @change="handleChange">
                <option value="">-</option>
                <option v-for="item in unauthorityAccountsData" :value="item.id" :key="item.id">{{ item.supplier_name }}</option>
              </select>
            </div><!-- /c-Input__label -->
          </div><!-- /c-Input__group -->

          <div class="u-FlexBox__spacer"></div>

          <div class="u-FlexBox u-FlexBox--middle">
            <button type="button" class="c-Button _primary" @click="addAuthority">
              <span>権限付与</span>
            </button>
          </div>
        </div><!-- /u-FlexBox -->
      </div><!-- /c-Content__unit -->
    </div><!-- /c-Content__inner -->
  </div><!-- /c-Content -->

  <section class="c-ItemList _1by2">
    <div class="c-ItemList__content u-FlexBox u-FlexBox--center u-FlexBox--middle">
      <table class="c-Table">
        <thead>
          <tr>
            <th>アカウントID</th>
            <th>アカウント名</th>
            <th class="u-TextCenter">操作</th>
            <th>権限付与日時</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in authorityAccountsData" :key="item.id">
            <td>{{ item.id }}</td>
            <td>
              <div class="u-FlexBox u-FlexBox--middle">
                <span class="u-TextEllipsis1line u-TextMinWidth _20em">{{ item.supplier_name }}</span>
              </div>
            </td>
            <td class="u-TextCenter">
              <button type="button" class="c-Button _delete" @click="deleteAuthority(item.id)">権限削除</button>
            </td>
            <td class="u-TextBreakWord">2021/10/10 00:00</td>
          </tr>
        </tbody>
      </table>
    </div><!-- /c-ItemList__content -->
  </section><!-- /c-ItemList -->
</template>

<script>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import CommonTitle from '@/components/CommonTitle.vue';

export default {
  name: 'UsersEditForm',
  components: {
    CommonTitle,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const store = useStore();

    const userId = Number(route.params.user_id);
    const getUser = store.getters.getUserById(userId);

    const nameRef = ref(getUser?.user_name)
    const emailRef = ref(getUser?.email)
    const loginPermission = getUser ? getUser.login : true;
    const loginRef = ref(loginPermission)
    const isInvalidNameRef = ref(false)
    const isInvalidEmailRef = ref(false)
    let selectedAccount;

    let authoritySupplierIds = getUser ? getUser.supplier_id : [];
    // サプライヤー全て取得
    const accountsData = store.state.suppliers;
    const accountAllIds = accountsData.map(item => item.id);

    // ユーザーに紐づいていないサプライヤー
    const unauthorityAccountsData = ref([])
    function setUnauthorityAccounts(){
      const unauthorityAccountIds = accountAllIds.filter(i => authoritySupplierIds.indexOf(i) === -1)
      let unauthorityAccountArray = [];
      unauthorityAccountIds.forEach(id => {
        unauthorityAccountArray.push(store.getters.getSupplierById(id));
      });
      unauthorityAccountsData.value = unauthorityAccountArray;
    }
    setUnauthorityAccounts();

    // ユーザーに紐付いたサプライヤー抽出
    const authorityAccountsData = ref([]);
    function setAuthorityAccounts(){
      authorityAccountsData.value = [];
      authoritySupplierIds.forEach(id => {
        authorityAccountsData.value.push(store.getters.getSupplierById(id));
      });
    }
    setAuthorityAccounts();

    const validEmail = (email) => {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }

    const handleChange = (e) => {
      selectedAccount = e.target.value;
    }

    const handleBack = () => {
      router.back()
    }

    const handleClick = () => {
      // パスワード登録時の処理
      isInvalidNameRef.value = false;
      isInvalidEmailRef.value = false;

      if(nameRef.value === '' || nameRef.value?.length > 20){
        isInvalidNameRef.value = true;
        return;
      }
      if( !validEmail(emailRef.value) ){
        isInvalidEmailRef.value = true;
        return;
      }

      const registeredUser = store.getters.getUserById(userId);
      if(registeredUser){
        const editUser = {
          user_id: userId,
          user_name: nameRef.value,
          email: emailRef.value,
          password: '',
          role: 1,
          login: loginRef.value,
          supplier_id: authoritySupplierIds
        }
        store.dispatch('editRegisterUser', editUser)
      }

      router.push({ name: 'ManagerUsers' })
    }

    const addAuthority = () => {
      // 権限付与時の処理
      if(selectedAccount) authoritySupplierIds.push( Number(selectedAccount));
      authoritySupplierIds.sort((a,b) => (a < b ? -1 : 1));
      selectedAccount = null;

      setUnauthorityAccounts();
      setAuthorityAccounts();
    }

    const deleteAuthority = (id) => {
      // 権限削除時の処理
      const oldData = [...authorityAccountsData.value];
      authorityAccountsData.value = oldData.filter( account => account.id !== id);

      authoritySupplierIds = authoritySupplierIds.filter(item => item !== id);
      setUnauthorityAccounts();
    }

    return {
      handleChange,
      handleBack,
      handleClick,
      addAuthority,
      deleteAuthority,
      nameRef,
      emailRef,
      loginRef,
      isInvalidNameRef,
      isInvalidEmailRef,
      accountsData,
      unauthorityAccountsData,
      authorityAccountsData,
    }
  }
}
</script>
