<template>
<form>
<section class="c-ItemList">
  <div class="c-ItemList__content u-FlexBox u-FlexBox--center u-FlexBox--middle">
    <table class="c-Table">
      <thead>
        <tr>
          <th>集計単位</th>
          <th class="u-TextRight">Imp</th>
          <th class="u-TextRight">クリック</th>
          <th class="u-TextRight">CTR</th>
          <th class="u-TextRight">CPC</th>
          <th class="u-TextRight">広告費</th>
          <th class="u-TextRight">注文回数</th>
          <th class="u-TextRight">経由売上</th>
          <th class="u-TextRight">ROSAS</th>
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
import ReportListItem from '@/components/ReportListItem.vue';

export default {
  components: {
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
