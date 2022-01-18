<template>
  <Header title="アカウント名称"/>
  <CommonTitle text="CSVダウンロード"/>
  <CsvDownLoadContent/>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import CommonTitle from '@/components/CommonTitle.vue';
import CsvDownLoadContent from '@/components/CsvDownLoadContent.vue';

export default {
  name: 'CsvDownLoad',
  components: {
    Header,
    CommonTitle,
    CsvDownLoadContent,
  },
}
</script>
