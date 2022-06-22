<template>
<div class="c-Tool">
  <div class="u-FlexBox u-FlexBox--top">

    <div class="c-Input__group">
      <div class="c-Input__label">
        <label>
          絞り込み
        </label>
        <div class="c-Input__icon">
          <search size="16" theme="outline"/>
        </div><!-- /c-Input__icon -->
        <input class="c-Input _icon" type="search" v-model="keywordRef" :placeholder="text" spellcheck="false">
      </div><!-- /c-Input__label -->
    </div><!-- /c-Input__group -->

    <div class="u-FlexBox__spacer"></div>

    <div class="c-Tool__actions u-FlexBox u-FlexBox--middle">
      <button type="button" class="c-Button _primary" @click="handleClick">
        <span>検索</span>
      </button>
    </div><!-- /c-Tool__actions -->
  </div><!-- /u-FlexBox -->
</div><!-- /c-Tool -->
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';
import { Search } from '@icon-park/vue-next';

defineProps({
  text: {
    type: String,
  },
})

const keywordRef = ref('')

const emits = defineEmits(
  ['search-click']
)

const handleClick = () => {
  emits('search-click', keywordRef.value);
}
</script>
