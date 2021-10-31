<template>
<form>
<section class="c-ItemList">
  <div class="c-ItemList__header _sticky u-FlexBox u-FlexBox--top u-FlexBox--justify">
    <div class="u-FlexBox u-FlexBox--middle">
      <p>入札</p>
      <div class="u-FlexBox__spacer"></div>
      <input class="c-Input" type="number" name="amount" :value="base_amount" placeholder="">
      <div class="u-FlexBox__spacer"></div>
      <button type="button" class="c-Button">
        <span>このページ内のチェック商品 250 件を一括入札</span>
      </button>
    </div><!-- /u-FlexBox -->
    <div class="u-FlexBox u-FlexBox--middle">
      <p>1 - 1000 / 4,999 件</p>
      <div class="u-FlexBox__spacer"></div>
      <button type="button" class="c-Button">
        <span class="u-TextHiddenVisually">前へ</span>
        <arrow-left theme="filled"/>
      </button>
      <div class="u-FlexBox__spacer"></div>
      <button type="button" class="c-Button">
        <span class="u-TextHiddenVisually">次へ</span>
        <arrow-right theme="filled"/>
      </button>
    </div><!-- /u-FlexBox -->
  </div><!-- /c-ItemList__header -->
  <div class="c-ItemList__content u-FlexBox u-FlexBox--center u-FlexBox--middle">
    <table class="c-Table">
      <thead>
        <tr>
          <th>
            <div class="c-Check">
              <input class="c-Check__input c-Check__input--item" type="checkbox" value="xxxx">
              <span class="c-Check__icon">
                <check theme="filled"/>
              </span>
              <label class="c-Check__label">選択</label>
            </div>
          </th>
          <th>入札</th>
          <th>商品ID</th>
          <th>商品名</th>
          <th>価格</th>
          <th class="u-TextCenter">レポート</th>
        </tr>
      </thead>
      <tbody>
        <CampaignDetailListItem v-for="item in list" :id="item.id" :checked="item.checked" :key="item.id"/>
      </tbody>
    </table>
  </div><!-- /c-ItemList__content -->
</section><!-- /c-ItemList -->
</form>
</template>

<script>
import { ArrowLeft, ArrowRight, Check } from '@icon-park/vue-next';
import CampaignDetailListItem from '@/components/CampaignDetailListItem.vue';

export default {
  components: {
    ArrowLeft,
    ArrowRight,
    Check,
    CampaignDetailListItem,
  },
  props: {
    list: {
      type: Array,
    },
  },
  setup() {
    const base_amount = 50;

    return {
      base_amount,
    }
  },
}
</script>
