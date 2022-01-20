<template>
  <div class="c-Content _1by2">
    <div class="c-Content__inner">
      <div class="c-Content__unit">
        <div class="c-Input__group">
          <div class="c-Input__label">
            <label>
              PRアイテム利用アカウントを選択してください
            </label>
            <select class="c-Input" name="accounts" @change="handleChange">
              <option v-for="item in accountsData" :value="item.id" :key="item.id">{{ item.supplier_name }}</option>
            </select>
          </div><!-- /c-Input__label -->
        </div><!-- /c-Input__group -->
      </div><!-- /c-Content__unit -->

      <div class="c-Content__footer u-FlexBox u-FlexBox--middle u-FlexBox--right">
        <div class="u-FlexBox__spacer"></div>
        <button type="button" class="c-Button _primary" @click="handleClick">決定</button>
      </div><!-- /c-Content__footer -->
    </div><!-- /c-Content__inner -->
  </div><!-- /c-Content -->
</template>

<script>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
  name: 'AccountsSelectForm',
  setup() {
    const router = useRouter();
    const store = useStore();

    const accountsData = store.state.suppliers;

    let supplier_id = accountsData[0].id;

    const handleChange = (e) => {
      supplier_id = Number(e.target.value);
    }

    const handleClick = () => {
      store.dispatch('setSelectedSupplier', store.getters.getSupplierById(supplier_id))
      router.push({ name: 'UserHome' })
    }
    return {
      handleChange,
      handleClick,
      accountsData,
    }
  }
}
</script>
