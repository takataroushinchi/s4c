<template>
  <section class="c-NotFound">
    <h2 class="c-NotFound__title u-FlexBox u-FlexBox--middle">
      <icon-park type="info" theme="filled"/>
      <div class="u-FlexBox__spacer"></div>
      <span>条件に一致する情報が見つかりませんでした。</span>
    </h2>
    <p class="c-NotFound__text">お探しの情報が見つからない場合、次のことをお試しください。</p>
    <ul class="c-NotFound__listItems">
      <li class="c-NotFound__listItem">キーワードで絞り込んでいる場合、類似語や、より一般的な言葉に置き換えて検索してみてください。</li>
      <li class="c-NotFound__listItem">絞り込み条件を選択している場合、条件を少なくして検索してみてください。</li>
    </ul>
  </section><!-- /c-NotFound -->
</template>

<script>
import { IconPark } from '@icon-park/vue-next/es/all';

export default {
  components: {
    IconPark,
  },
}
</script>
