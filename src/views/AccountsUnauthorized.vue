<template>
  <UserHeader title="PRアイテム"/>
  <CommonTitle text="利用アカウント選択"/>

  <section class="c-NotFound">
    <h2 class="c-NotFound__title u-FlexBox u-FlexBox--middle">
      <info theme="filled"/>
      <div class="u-FlexBox__spacer"></div>
      <span>選択できるPRアイテム利用アカウントがありません。</span>
    </h2>
    <p class="c-NotFound__text">サイト管理者に設定についてお問い合わせください。</p>
  </section><!-- /c-NotFound -->
</template>

<script>
import { Info } from '@icon-park/vue-next';
// @ is an alias to /src
import UserHeader from '@/components/user/Header.vue';
import CommonTitle from '@/components/CommonTitle.vue';

export default {
  name: 'AccountsUnauthorized',
  components: {
    Info,
    UserHeader,
    CommonTitle,
  },
}
</script>
