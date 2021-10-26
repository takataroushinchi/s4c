<template>
  <Header title="メーカー名ダッシュボード"/>
  <router-view/>
</template>

<script>
import Header from '@/components/Header.vue';
import 'vue2-datepicker/index.css';

export default {
	components: {
    Header
  }

}
</script>

<style>
@import "./assets/css/common.css";
</style>
