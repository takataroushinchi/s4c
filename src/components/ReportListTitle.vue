<template>
<div class="c-Title u-FlexBox u-FlexBox--middle u-FlexBox--justify">
  <div class="c-InlineList u-FlexBox__item--fill">
    <ul class="c-InlineList__items u-FlexBox u-FlexBox--middle">
      <li class="c-InlineList__item" v-if="dimension === 'daily'"><span>集計単位：日別</span></li>
      <li class="c-InlineList__item" v-else-if="dimension === 'monthly'"><span>集計単位：月別</span></li>
      <li class="c-InlineList__item" v-else-if="dimension === 'campaign'"><span>集計単位：キャンペーン別</span></li>
      <li class="c-InlineList__item"><span>期間：2021/10/10 - 2021/11/10</span></li>
    </ul><!-- /c-InlineList__items  -->
  </div><!-- /c-InlineList  -->
  <div class="u-FlexBox__spacer"></div>
  <a class="c-Button" href="javascript:;" download><download theme="filled"/>CSVダウンロード</a>
</div><!-- /c-Title -->
</template>

<script>
import { Download } from '@icon-park/vue-next';

export default {
  name: 'ReportListTitle',
  components: {
    Download,
  },
  props: {
    dimension: {
      type: String,
    }
  },
}
</script>
