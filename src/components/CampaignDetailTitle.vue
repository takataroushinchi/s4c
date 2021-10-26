<template>
<div class="c-Title u-FlexBox u-FlexBox--middle u-FlexBox--justify">
  <h2 class="c-Title__text">{{ text }}</h2>
  <div class="c-Title__actions u-FlexBox u-FlexBox--middle u-FlexBox--justify u-FlexBox__item--fill">
    <router-link to="/edit" exact-active-class="is-active" class="c-Button">編集<icon-park type="arrow-right" theme="filled"/></router-link>
    <router-link to="/report" exact-active-class="is-active" class="c-Button">キャンペーンレポート<icon-park type="chart-line" theme="filled"/></router-link>
  </div><!-- /c-Title__actions -->
</div><!-- /c-Title -->
</template>

<script>
import { IconPark } from '@icon-park/vue-next/es/all';

export default {
  name: 'CampaignDetailTitle',
  props: {
    text: String
  },
  components: {
    IconPark,
  }
}
</script>
