<template>
<div class="u-FlexBox u-FlexBox--middle">
  <button :type="as" :class="classes" @click="onClick" :style="style" :disabled="disabled">
    <span class="u-TextNoWrap">{{ text }}</span>
    <down theme="filled"/>
  </button>
  <div class="c-Info" v-if="isCaution">
    <button type="button"><caution theme="filled"/></button>
    <div class="c-InfoBody _left">予算超過、期間超過</div>
  </div><!-- /c-Info -->
</div>
</template>

<script>
import { reactive, computed } from 'vue';
import { Down, Caution } from '@icon-park/vue-next';

export default {
  name: 'ssss-status',
  components: {
    Down,
    Caution,
  },
  props: {
    as: {
      type: String,
      default: "button",
      validator: function (value) {
        return ['button', 'a', 'submit'].indexOf(value) !== -1;
      },
    },
    variants: {
      type: String,
      validator: function (value) {
        return ['valid', 'invalid', 'archive'].indexOf(value) !== -1;
      },
    },
    text: {
      type: String,
      default: '有効'
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    isCaution: {
      type: Boolean,
      default: false,
    },
    backgroundColor: {
      type: String,
    },
  },

  emits: ['status-click'],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        'c-Button': true,
        '_status': true,
        [`_${props.variants || 'valid'}`]: true,
      })),
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
      })),
      onClick() {
        emit('status-click');
      }
    }
  },
};
</script>
