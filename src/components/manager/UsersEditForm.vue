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
            <input class="c-Input" :class="{'is-invalid': isInvalidIdRef}" type="text" v-model="idRef" spellcheck="false" placeholder="メールアドレスを入力してください">
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
          <input class="c-Checkbox" type="checkbox" id="permission" name="permission" checked>
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
              <select class="c-Input" name="accounts">
                <option value="">-</option>
                <option v-for="item in accountsData" :value="item.id" :key="item.id">{{ item.supplier_name }}</option>
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
              <button type="button" class="c-Button _delete">権限削除</button>
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

    const nameRef = ref(store.getters.getUserById(userId).user_name)
    const idRef = ref(store.getters.getUserById(userId).email)
    const isInvalidNameRef = ref(false)
    const isInvalidIdRef = ref(false)

    // サプライヤー全て
    const accountsData = store.state.suppliers;

    // ユーザーに紐付いたサプライヤー抽出
    let authorityAccountsData = [];
    const authoritySupplierIds = store.getters.getUserById(userId).supplier_id;
    authoritySupplierIds.forEach(id => {
      authorityAccountsData.push(store.getters.getSupplierById(id));
    });

    const validEmail = (email) => {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }

    const handleBack = () => {
      router.back()
    }

    const handleClick = () => {
      // パスワード登録時の処理
      isInvalidNameRef.value = false;
      isInvalidIdRef.value = false;

      if(nameRef.value === '' || nameRef.value.length > 20){
        isInvalidNameRef.value = true;
        return;
      }
      if( !validEmail(idRef.value) ){
        isInvalidIdRef.value = true;
        return;
      }

      router.push({ name: 'ManagerAccounts' })
    }

    const addAuthority = () => {
      // 権限付与時の処理
      console.log('Add Authority');
    }

    return {
      handleBack,
      handleClick,
      addAuthority,
      nameRef,
      idRef,
      isInvalidNameRef,
      isInvalidIdRef,
      accountsData,
      authorityAccountsData,
    }
  }
}
</script>
