<template>
<div class="c-Title u-FlexBox u-FlexBox--middle u-FlexBox--justify">
  <h2 class="c-Title__text">{{ text }}</h2>
  <div class="c-Title__actions u-FlexBox u-FlexBox--middle u-FlexBox--justify u-FlexBox__item--fill">
    <router-link :to="{name: 'CampaignEdit', params: { campaignId }}" exact-active-class="is-active" class="c-Button">編集<arrow-right theme="filled"/></router-link>
    <router-link :to="{name: 'Report', query: { filter: 'cpn' }}" exact-active-class="is-active" class="c-Button">キャンペーンレポート<chart-line theme="filled"/></router-link>
  </div><!-- /c-Title__actions -->
</div><!-- /c-Title -->
</template>

<script>
import { ArrowRight, ChartLine } from '@icon-park/vue-next';
import { useRoute } from 'vue-router';

export default {
  name: 'CampaignDetailTitle',
  props: {
    text: String
  },
  components: {
    ArrowRight,
    ChartLine,
  },
  setup() {
    const route = useRoute()
    const campaignId = route.params.campaignId;

    return {
      campaignId,
    }
  }
}
</script>
