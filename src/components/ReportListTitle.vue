<template>
<div class="c-Title u-FlexBox u-FlexBox--middle u-FlexBox--right">
  <a class="c-Button" href="javascript:;" download><download theme="filled"/>CSVダウンロード</a>
</div><!-- /c-Title -->
</template>

<script>
import { Download } from '@icon-park/vue-next';

export default {
  name: 'ReportListTitle',
  components: {
    Download,
  },
}
</script>
