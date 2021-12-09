<template>
  <CommonTitle text="レポート"/>
  <ReportTool :dimension="dimensionRef"/>
  <Chart v-if="dimensionRef !== 'campaign'"/>
  <ReportListTitle />
  <ReportList :list="listRef"/>
</template>

<script>
import { ref } from 'vue'
import { useRoute, onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router';
// @ is an alias to /src
import CommonTitle from '@/components/CommonTitle.vue';
import Chart from '@/components/Chart.vue';
import ReportTool from '@/components/ReportTool.vue';
import ReportListTitle from '@/components/ReportListTitle.vue';
import ReportList from '@/components/ReportList.vue';

export default {
  name: 'Report',
  components: {
    CommonTitle,
    Chart,
    ReportTool,
    ReportListTitle,
    ReportList,
  },
  props: {
    dimension: {
      type: String,
      default: 'daily' // :dimension [ daily, monthly, campaign ]
    },
  },
  setup() {
    let listRef = ref([])
    let dimensionRef = ref('')
    const route = useRoute()
    const { dimension } = route.params
    // const path = route.path;
    const data = [[
      { id: 1111, unit: '2021/10/10' },
      { id: 2222, unit: '2021/10/09' },
      { id: 3333, unit: '2021/10/08' },
      { id: 4444, unit: '2021/10/07' },
      { id: 5555, unit: '2021/10/06' },
    ],
    [
      { id: 1111, unit: '2021/10' },
      { id: 2222, unit: '2021/09' },
      { id: 3333, unit: '2021/08' },
      { id: 4444, unit: '2021/07' },
    ],
    [
      { id: 1111, unit: 'キャンペーン名称001' },
      { id: 2222, unit: '壱弐参肆伍陸漆捌玖拾002' },
      { id: 3333, unit: '壱弐参肆伍陸漆捌玖拾壱弐参肆伍陸漆捌玖拾称003' },
      { id: 4444, unit: '壱弐参肆伍陸漆捌玖拾004' },
    ]]


    // :dimension [ daily, monthly, campaign ]
    // /Report の場合は、undefind なので、dailyを設定
    dimensionRef.value = dimension? dimension : "daily";
    // listRef.value = (path === '/report/campaign')? data[2] : (path === '/report/monthly')? data[1] : data[0];
    listRef.value = (dimension === 'campaign')? data[2] : (dimension === 'monthly')? data[1] : data[0];

    onBeforeRouteLeave((to) => {
      const p = to.path.split("/").filter(e => Boolean(e));
      const d = p[p.length - 1];
      dimensionRef.value = d === 'report'? 'daily' : d;
      listRef.value = (d === 'campaign')? data[2] : (d === 'monthly')? data[1] : data[0];
    })

    onBeforeRouteUpdate((to) => {
      const p = to.path.split("/").filter(e => Boolean(e));
      const d = p[p.length - 1];
      dimensionRef.value = d === 'report'? 'daily' : d;
      listRef.value = (d === 'campaign')? data[2] : (d === 'monthly')? data[1] : data[0];
    })

    return {
      listRef,
      dimensionRef,
    }
  }
}
</script>
