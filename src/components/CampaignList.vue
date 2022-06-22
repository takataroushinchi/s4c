<template>
<section class="c-ItemList">
  <div class="c-ItemList__content u-FlexBox u-FlexBox--center u-FlexBox--middle">
    <table class="c-Table">
      <thead>
        <tr class="c-Table__colspan">
          <th colspan="4"></th>
          <th class="u-TextCenter _underline" colspan="4">利用額</th>
          <th colspan="1"></th>
        </tr>
        <tr>
          <th>キャンペーン</th>
          <th>ステータス</th>
          <th>期間</th>
          <th class="u-TextRight">日予算</th>
          <th class="u-TextCenter">当日</th>
          <th class="u-TextCenter">前日</th>
          <th class="u-TextCenter">当月</th>
          <th class="u-TextCenter">前月</th>
          <th class="u-TextCenter">レポート</th>
        </tr>
      </thead>
      <tbody>
        <CampaignListItem v-for="item in list" :id="item.id" :status="item.status" :text="item.text" :key="item.id"/>
      </tbody>
    </table>
  </div><!-- /c-ItemList__content -->
</section><!-- /c-ItemList -->
</template>

<script setup>
import { defineProps } from 'vue'
import CampaignListItem from '@/components/CampaignListItem.vue';

defineProps({
  list: {
    type: Array,
  },
})
</script>
