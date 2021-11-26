<template>
<div class="c-Tool u-FlexBox u-FlexBox--top u-FlexBox--justify">
  <button type="button" class="c-Button _primary" @click="DialogMethod">
    <span>編集内容を保存</span>
  </button>

  <div class="u-FlexBox__spacer"></div>

  <div class="u-FlexBox u-FlexBox--top">
    <div class="c-Input__group">
      <div class="c-Input__label">
        <label>
          絞り込み
        </label>
        <div class="c-Input__icon">
          <search size="16" theme="outline"/>
        </div><!-- /c-Input__icon -->
        <input class="c-Input _icon" type="search" name="search" value="" placeholder="商品名、商品IDを入力">
        <div class="c-Input__feedback">エラーです</div>
      </div><!-- /c-Input__label -->
    </div><!-- /c-Input__group -->

    <div class="u-FlexBox__spacer"></div>

    <div class="c-Radio__group">
      <div class="c-Radio__groupLavel">
        <span>入札状況</span>
      </div>
      <div class="c-Radio c-Radio--horizontal">
        <input class="c-Radio__radio" type="radio" id="dummyID-01-01" name="dummyID-01" checked>
        <label class="c-Radio__label" for="dummyID-01-01"><span>全て</span></label>
      </div><!--/c-Radio-->
      <div class="c-Radio c-Radio--horizontal">
        <input class="c-Radio__radio" type="radio" id="dummyID-01-02" name="dummyID-01">
        <label class="c-Radio__label" for="dummyID-01-02"><span>入札済み</span></label>
      </div><!--/c-Radio-->
      <div class="c-Radio c-Radio--horizontal">
        <input class="c-Radio__radio" type="radio" id="dummyID-01-03" name="dummyID-01">
        <label class="c-Radio__label" for="dummyID-01-03"><span>未入札</span></label>
      </div><!--/c-Radio-->
    </div><!-- /c-Radio__group -->

    <div class="u-FlexBox__spacer"></div>

    <div class="c-Tool__actions u-FlexBox u-FlexBox--middle">
      <button type="button" class="c-Button">
        <span>絞り込み</span>
      </button>
    </div><!-- /c-Tool__actions -->
  </div><!-- /u-FlexBox -->
</div><!-- /c-Tool -->
</template>

<script>
import { Search } from '@icon-park/vue-next';

export default {
  name: 'CampaignDetailTool',
  components: {
    Search,
  },
  setup(_, context) {
    const DialogMethod = () => {
      context.emit('custom-event', true);
    }

    return {
      DialogMethod,
    }
  }
}
</script>
