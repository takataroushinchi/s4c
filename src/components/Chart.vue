<template>
  <div class="chartjs-Chart">
    <select class="c-Input" name="chartSelect" @change="handleChange">
      <option value="imp" selected>Imp</option>
      <option value="click">クリック</option>
      <option value="ctr">CTR</option>
      <option value="cpc">CPC</option>
      <option value="charge">広告費</option>
      <option value="order">注文回数</option>
      <option value="dist">経由売上</option>
      <option value="roas">ROAS</option>
    </select>

    <LineChart :chartData="lineData" :height="height"/>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Chart, registerables } from "chart.js";
import { LineChart } from "vue-chart-3";

Chart.register(...registerables);

const height = 240;
const chartData = {
  "labels": ["2021-10-01","2021-10-02","2021-10-03","2021-10-04","2021-10-05","2021-10-06","2021-10-07","2021-10-08","2021-10-09","2021-10-10","2021-10-11","2021-10-12","2021-10-13","2021-10-14","2021-10-15","2021-10-16","2021-10-17","2021-10-18","2021-10-19","2021-10-20","2021-10-21","2021-10-22","2021-10-23","2021-10-24","2021-10-25","2021-10-26","2021-10-27","2021-10-28","2021-10-29","2021-10-30"],
  "dataSet": {
    "imp": {
      "label": "Imp",
      "data": [0,10,8,0,2,3,2,1,0,9,16,0,0,0,10,20,15,5,2,3,4,5,10,9,2,0,10,10,5,10],
    },
    "click": {
      "label": "クリック",
      "data": [10,8,0,2,3,2,1,0,9,16,0,0,0,10,20,15,5,2,3,4,5,10,9,2,0,10,10,5,10,0],
    },
    "ctr": {
      "label": "CTR",
      "data": [8,0,2,3,2,1,0,9,16,0,0,0,10,20,15,5,2,3,4,5,10,9,2,0,10,10,5,10,0,10],
    },
    "cpc": {
      "label": "CPC",
      "data": [0,2,3,2,1,0,9,16,0,0,0,10,20,15,5,2,3,4,5,10,9,2,0,10,10,5,10,0,10,8],
    },
    "charge": {
      "label": "広告費",
      "data": [2,3,2,1,0,9,16,0,0,0,10,20,15,5,2,3,4,5,10,9,2,0,10,10,5,10,0,10,8,0],
    },
    "order": {
      "label": "注文回数",
      "data": [3,2,1,0,9,16,0,0,0,10,20,15,5,2,3,4,5,10,9,2,0,10,10,5,10,0,10,8,0,2],
    },
    "dist": {
      "label": "経由売上",
      "data": [2,1,0,9,16,0,0,0,10,20,15,5,2,3,4,5,10,9,2,0,10,10,5,10,0,10,8,0,2,3],
    },
    "roas": {
      "label": "ROAS",
      "data": [1,0,9,16,0,0,0,10,20,15,5,2,3,4,5,10,9,2,0,10,10,5,10,0,10,8,0,2,3,1],
    }
  }
}

const lineData = ref({
  labels: chartData.labels,
  datasets: [
    {
      label: chartData.dataSet.imp.label,
      backgroundColor: "#449D44",
      data: chartData.dataSet.imp.data,
      fill: false,
      borderColor: "#449D44",
      tension: 0.1,
      lineTension: 0,
      borderWidth: 1
    },
  ],
});

const handleChange = (e) => {
  lineData.value.datasets[0].label = chartData.dataSet[e.target.value].label;
  lineData.value.datasets[0].data = chartData.dataSet[e.target.value].data;
}
</script>
