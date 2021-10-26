<template>
<tr>
  <td class="u-TextBreakWord">{{ unit }}</td>
  <td class="u-TextRight u-TextNoWrap">999,999</td>
  <td class="u-TextRight u-TextNoWrap">999,999</td>
  <td class="u-TextRight u-TextNoWrap">99.99%</td>
  <td class="u-TextRight u-TextNoWrap">100.0</td>
  <td class="u-TextRight u-TextNoWrap">999,999</td>
  <td class="u-TextRight u-TextNoWrap">999,999</td>
  <td class="u-TextRight u-TextNoWrap">999%</td>
  <td class="u-TextRight u-TextNoWrap">999,999</td>
</tr>
</template>

<script>

export default {
  props: {
    id: {
      type: Number,
      default: 1
    },
    unit: {
      type: String,
    },
  },
}
</script>
