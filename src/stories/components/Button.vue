<template>
  <button :type="as" :class="classes" @click="onClick" :style="style" :disabled="disabled" v-if="as === 'button' || as === 'submit'">
    <slot>Button</slot>
  </button>
  <a :href="hrefURL" :class="classes" @click="onClick" :style="style" v-else-if="as === 'a'">
    <slot>Button</slot>
  </a>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  name: 'ssss-button',
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
        return ['primary', 'secondary', 'element', 'download', 'delete', 'tab', 'status', 'valid', 'invalid', 'archive'].indexOf(value) !== -1;
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    backgroundColor: {
      type: String,
    },
    hrefURL: {
      type: String,
      default: "javascript:;",
    },
  },

  emits: ['button-click'],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        'c-Button': true,
        '_status': props.variants === 'valid' || props.variants === 'invalid' || props.variants === 'archive',
        [`_${props.variants || 'secondary'}`]: true,
      })),
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
      })),
      onClick() {
        emit('button-click');
      }
    }
  },
};
</script>
