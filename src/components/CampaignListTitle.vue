<template>
<div class="c-Title u-FlexBox u-FlexBox--middle u-FlexBox--justify">
  <h2 class="c-Title__text">{{ text }}</h2>
  <div class="c-Title__actions u-FlexBox u-FlexBox--middle u-FlexBox--justify u-FlexBox__item--fill">
    <router-link to="/create" exact-active-class="is-active" class="c-Button">新規作成<arrow-right theme="filled"/></router-link>
    <a class="c-Button" href="javascript:;" download><download theme="filled"/>登録商品CSVダウンロード</a>
  </div><!-- /c-Title__actions -->
</div><!-- /c-Title -->
</template>

<script>
import { ArrowRight, Download } from '@icon-park/vue-next';

export default {
  name: 'CampaignListTitle',
  props: {
    text: String
  },
  components: {
    ArrowRight, 
    Download,
  }
}
</script>
