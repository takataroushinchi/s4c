<template>
<section class="c-ItemList">
  <div class="c-ItemList__content u-FlexBox u-FlexBox--center u-FlexBox--middle">
    <table class="c-Table">
      <thead>
        <tr class="c-Table__colspan">
          <th colspan="2"></th>
          <th class="u-TextCenter _underline" colspan="2">キャンペーン数</th>
          <th colspan="3"></th>
        </tr>
        <tr>
          <th>アカウントID</th>
          <th>名称</th>
          <th class="u-TextCenter">公開</th>
          <th class="u-TextCenter">停止</th>
          <th class="u-TextCenter">レポート</th>
          <th class="u-TextCenter">ユーザー</th>
          <th>作成日時</th>
        </tr>
      </thead>
      <tbody>
        <AccountListItem v-for="item in list" :id="item.id" :sid="item.supplier_id" :name="item.supplier_name" :key="item.id"/>
      </tbody>
    </table>
  </div><!-- /c-ItemList__content -->
</section><!-- /c-ItemList -->
</template>

<script setup>
import { defineProps } from 'vue'
import AccountListItem from '@/components/manager/AccountListItem.vue';

defineProps({
  list: {
    type: Array,
  },
})
</script>
