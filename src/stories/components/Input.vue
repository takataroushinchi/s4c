<template>
  <div class="c-Input__group">
    <div class="c-Input__label">
      <label>
        ラベル（補足テキスト）
      </label>
      <input :type="as" :class="classes" :style="style" :disabled="disabled" name="" value="" placeholder="" />
      <div class="c-Input__feedback">エラーです</div>
    </div><!-- /c-Input__label -->
  </div><!-- /c-Input__group -->
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  name: 'ssss-input',
  props: {
    as: {
      type: String,
      default: "text",
      validator: function (value) {
        return ['text', 'number', 'search', 'date', 'time'].indexOf(value) !== -1;
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    invalid: {
      type: Boolean,
      default: false,
    },
    backgroundColor: {
      type: String,
    },
  },

  setup(props) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        'c-Input': true,
        'is-invalid': props.invalid,
      })),
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
      })),
    }
  },
};
</script>
