<template>
<section class="c-ItemList">
  <div class="c-ItemList__content u-FlexBox u-FlexBox--center u-FlexBox--middle">
    <table class="c-Table">
      <thead>
        <tr>
          <th>当月</th>
          <th>Imp</th>
          <th>クリック</th>
          <th>CTR
            <div class="c-Info">
              <button><info theme="filled"/></button>
              <div class="c-InfoBody _left">クリック率（クリック回数/広告表示回数）です。</div>
            </div>
          </th>
          <th>CPC
            <div class="c-Info">
              <button><info theme="filled"/></button>
              <div class="c-InfoBody _left">平均クリック単価です。<br />入札額を変更した日以外は、入札金額とイコールです。</div>
            </div>
          </th>
          <th>広告費</th>
          <th>注文回数</th>
          <th>経由売上</th>
          <th>ROAS</th>
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

<script setup>
import { Info } from '@icon-park/vue-next';
</script>
