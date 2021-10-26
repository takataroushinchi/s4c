<template>
  <div class="c-Loader" data-js-Loader v-show="isShow">
    <div class="c-Loader__inner">
      <i class="c-Loader__icon" aria-hidden="true"></i>
    </div>
  </div><!-- /c-Loader#js-Loader -->
</template>

<script>
export default {
name: 'Header',
  props: {
    isShow: Boolean,
  },
}
</script>
