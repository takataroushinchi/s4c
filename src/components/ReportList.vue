<template>
<form>
<section class="c-ItemList">
  <div class="c-ItemList__content u-FlexBox u-FlexBox--center u-FlexBox--middle">
    <table class="c-Table">
      <thead class="_sticky">
        <tr>
          <th>集計単位</th>
          <th class="u-TextRight">Imp</th>
          <th class="u-TextRight">クリック</th>
          <th class="u-TextRight">CTR
            <div class="c-Info">
              <button><info theme="filled"/></button>
              <div class="c-InfoBody _left">クリック率（クリック回数/広告表示回数）です。</div>
            </div>
          </th>
          <th class="u-TextRight">CPC
            <div class="c-Info">
              <button><info theme="filled"/></button>
              <div class="c-InfoBody _left">平均クリック単価です。<br />入札額を変更した日以外は、入札金額とイコールです。</div>
            </div>
          </th>
          <th class="u-TextRight">広告費</th>
          <th class="u-TextRight">注文回数</th>
          <th class="u-TextRight">経由売上</th>
          <th class="u-TextRight">ROAS</th>
        </tr>
      </thead>
      <tbody>
        <ReportListItem v-for="item in list" :id="item.id" :unit="item.unit" :key="item.id"/>
      </tbody>
    </table>
  </div><!-- /c-ItemList__content -->
</section><!-- /c-ItemList -->
</form>
</template>

<script>
import { Info } from '@icon-park/vue-next';
import ReportListItem from '@/components/ReportListItem.vue';

export default {
  components: {
    Info,
    ReportListItem,
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
