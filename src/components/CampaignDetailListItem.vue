<template>
<tr>
  <td>
    <div class="c-Check">
      <input class="c-Check__input c-Check__input--item" type="checkbox" value="xxxx" :checked="checked">
      <span class="c-Check__icon">
        <check theme="filled"/>
      </span>
    </div>
  </td>
  <td class="u-TextNoWrap">￥999</td>
  <td class="u-TextNoWrap">{{ id }}</td>
  <td><a class="u-TextEllipsis1line u-TextMinWidth _20em" href="javascript:;" target="blank" rel="noopener noreferrer">商品名称商品名称商品名称商品名称商品名称商品名称商品名</a></td>
  <td class="u-TextNoWrap">999,999</td>
  <td class="u-TextCenter">
    <router-link :to="{name: 'Report', query: { filter: 'item_id' }}" exact-active-class="is-active"><chart-line theme="filled"/></router-link>
  </td>
</tr>
</template>

<script setup>
import { defineProps } from 'vue';
import { Check, ChartLine } from '@icon-park/vue-next';

defineProps({
  id: {
    type: Number,
    default: 1
  },
  checked: {
    type: Boolean,
  },
})
</script>
