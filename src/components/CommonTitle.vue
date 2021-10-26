<template>
<div class="c-Title u-FlexBox u-FlexBox--middle u-FlexBox--justify">
  <h2 class="c-Title__text">{{ text }}</h2>
</div><!-- /c-Title -->
</template>

<script>
export default {
  name: 'CommonTitle',
  props: {
    text: String
  },
}
</script>
