<template>
<section class="c-ItemList">
  <div class="c-ItemList__content u-FlexBox u-FlexBox--center u-FlexBox--middle">
    <table class="c-Table">
      <thead>
        <tr>
          <th>ID</th>
          <th>ユーザー名</th>
          <th>ログインID</th>
          <th>最終ログイン</th>
          <th>作成日時</th>
        </tr>
      </thead>
      <tbody>
        <UserListItem v-for="item in list" :id="item.user_id" :name="item.user_name" :email="item.email" :key="item.user_id"/>
      </tbody>
    </table>
  </div><!-- /c-ItemList__content -->
</section><!-- /c-ItemList -->
</template>

<script setup>
import { defineProps } from 'vue'
import UserListItem from '@/components/manager/UserListItem.vue';

defineProps({
  list: {
    type: Array,
  },
})
</script>
