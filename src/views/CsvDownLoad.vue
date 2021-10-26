<template>
  <CommonTitle text="CSVダウンロード"/>
  <CsvDownLoadContent/>
</template>

<script>
import CommonTitle from '@/components/CommonTitle.vue';
import CsvDownLoadContent from '@/components/CsvDownLoadContent.vue';

export default {
  name: 'CsvDownLoad',
  components: {
    CommonTitle,
    CsvDownLoadContent,
  },
}
</script>
