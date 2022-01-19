<template>
<div class="c-Tool u-FlexBox u-FlexBox--top u-FlexBox--justify">
  <div class="c-Input__label">
    <label>
      集計単位
    </label>
    <select class="c-Input" name="reportSelect01" @change="handleChange">
      <option value="daily" :selected="dimension === 'daily'">日別</option>
      <option value="monthly" :selected="dimension === 'monthly'">月別</option>
      <option value="campaign" :selected="dimension === 'campaign'" v-if="role!=='manager'">キャンペーン別</option>
      <option value="account" :selected="dimension === 'account'" v-if="role==='manager'">アカウント別</option>
    </select>
  </div><!-- /c-Input__label -->

  <div class="u-FlexBox__spacer"></div>

  <div class="u-FlexBox u-FlexBox--top u-FlexBox--right u-FlexBox__item--fill">
    <div class="u-FlexBox__divider"></div>
    <div class="u-FlexBox__spacer"></div>

    <div class="c-Input__label">
      <label>
        期間
      </label>
      <date-picker
      v-model="date1"
      :lang="lang"
      :shortcuts="shortcuts"
      range
      :disabled-date="disabledBefore90daysAndAfterToday"
      type="date"
      placeholder="最大90日分で期間を指定"
      ></date-picker>
      <div class="c-Input__feedback">エラーです</div>
    </div><!-- /c-Input__label -->

    <div class="u-FlexBox__spacer"></div>

    <div class="c-Input__label" v-if="role!=='manager'">
      <label>
        キャンペーン
      </label>
      <select class="c-Input" name="reportSelect02">
        <option value="">-</option>
        <option value="campaign1" :selected="filter === 'cpn'">キャンペーン001</option>
        <option value="campaign2">キャンペーン002</option>
        <option value="campaign3">キャンペーン003</option>
        <option value="campaign4">キャンペーン004</option>
      </select>
    </div><!-- /c-Input__label -->

    <div class="c-Input__label" v-if="role=='manager'">
      <label>
        アカウント
      </label>
      <select class="c-Input" name="reportSelect02">
        <option value="">-</option>
        <option value="account1" :selected="filter === 'account'">アカウント001</option>
        <option value="account2">アカウント002</option>
        <option value="account3">アカウント003</option>
        <option value="account4">アカウント004</option>
      </select>
    </div><!-- /c-Input__label -->

    <div class="u-FlexBox__spacer" v-if="role!=='manager'"></div>

    <div class="c-Input__label" v-if="role!=='manager'">
      <label>
        商品ID
      </label>
      <input class="c-Input" type="text" name="id" :value="item_id" placeholder="商品IDを入力">
      <div class="c-Input__feedback">エラーです</div>
    </div><!-- /c-Input__label -->

    <div class="u-FlexBox__spacer"></div>

    <div class="c-Tool__actions u-FlexBox u-FlexBox--middle">
      <router-link to="/report" exact-active-class="is-active" class="c-Button _element">クリア</router-link>
      <div class="u-FlexBox__spacer"></div>
      <button type="button" class="c-Button _primary">
        <span>変更</span>
      </button>
    </div><!-- /c-Tool__actions -->
  </div><!-- /u-FlexBox -->
</div><!-- /c-Tool -->
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/locale/ja';
// import 'vue2-datepicker/index.css';

export default {
  name: 'ReportTool',
  props: {
    dimension: {
      type: String,
    },
    filter: {
      type: String,
    },
    role: {
      type: String,
    }
  },
  components: {
    DatePicker,
  },
  setup(props) {
    const router = useRouter()
    let date1 = ref([new Date(new Date().getTime() - 30 * 24 * 3600 * 1000), new Date()])
    const lang = {
          formatLocale: {
            firstDayOfWeek: 1,
          },
          monthBeforeYear: false,
        }

    const shortcuts = [
        {
          text: '今月',
          onClick() {
            const start = new Date();
            const end = new Date();
            start.setTime(new Date(start.getFullYear(), start.getMonth(), 1));
            const date = [start, end];
            return date;
          },
        },
        {
          text: '先月',
          onClick() {
            const start = new Date();
            const end = new Date();
            start.setTime(new Date(start.getFullYear(), start.getMonth()-1, 1));
            end.setTime(new Date(start.getFullYear(), start.getMonth()+1, 0));
            const date = [start, end];
            return date;
          },
        },
        {
          text: '過去90日間',
          onClick() {
            const start = new Date();
            const end = new Date();
            start.setTime(start.getTime() - 90 * 24 * 3600 * 1000);
            const date = [start, end];
            return date;
          },
        },
      ]

    const disabledBefore90daysAndAfterToday = (date) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      return date > today || date < new Date(today.getTime() - 90 * 24 * 3600 * 1000);
    }

    const handleChange = (e) => {
      const dimension = e.target.value; // daily, monthly, campaign or account
      if(props.role === 'manager'){
        router.push({ name: 'ManagerReportDimension', params: { dimension } })
      }else{
        router.push({ name: 'ReportDimension', params: { dimension } })
      }
    }

    // /report?filter=item_id
    const item_id = props.filter === 'item_id'? '12345' : ''

    return {
      date1,
      lang,
      shortcuts,
      disabledBefore90daysAndAfterToday,
      handleChange,
      item_id,
    }
  }
}
</script>
