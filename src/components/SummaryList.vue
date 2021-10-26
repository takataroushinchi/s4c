<template>
<section class="c-ItemList">
  <div class="c-ItemList__content u-FlexBox u-FlexBox--center u-FlexBox--middle">
    <table class="c-Table">
      <thead>
        <tr>
          <th>当月</th>
          <th>Imp</th>
          <th>クリック</th>
          <th>CTR</th>
          <th>CPC</th>
          <th>広告費</th>
          <th>注文回数</th>
          <th>経由売上</th>
          <th>
            ROAS
            <div class="c-Info">
              <button><icon-park type="info" theme="filled"/></button>
              <div class="c-InfoBody _left">ROASとはホゲホゲです。</div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="u-TextBreakWord">2021/10</td>
          <td class="u-TextNoWrap">999,999</td>
          <td class="u-TextNoWrap">999,999</td>
          <td class="u-TextNoWrap">99.99%</td>
          <td class="u-TextNoWrap">100.0</td>
          <td class="u-TextNoWrap">999,999</td>
          <td class="u-TextNoWrap">999,999</td>
          <td class="u-TextNoWrap">999,999</td>
          <td class="u-TextNoWrap">999%</td>
        </tr>
      </tbody>
    </table>
  </div><!-- /c-ItemList__content -->
</section><!-- /c-ItemList -->
</template>

<script>
import { IconPark } from '@icon-park/vue-next/es/all';

export default {
  components: {
    IconPark,
  }
}
</script>
