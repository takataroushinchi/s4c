<template>
  <div class="c-Content">
    <div class="c-Content__inner">
      <div class="c-Content__unit">
        <div class="u-FlexBox u-FlexBox--top">
          <div class="c-Input__group">
            <div class="c-Input__label">
              <label>
                CVレポート
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
          </div><!-- /c-Innput__group -->
          <div class="u-FlexBox__spacer"></div>
          <a class="c-Button _download" href="javascript:;" download>
            <span class="u-TextHiddenVisually">CVレポートCSVダウンロード</span>
            <icon-park type="download" theme="filled"/>
          </a>
        </div><!-- /u-FlexBox -->
      </div><!-- /c-Content__unit -->

      <div class="c-Content__unit">
        <div class="u-FlexBox u-FlexBox--top">
          <div class="c-Input__group">
            <div class="c-Input__label">
              <label>
                クエリレポート
              </label>
              <date-picker
               v-model="date2"
               :lang="lang"
               :shortcuts="shortcuts"
               range
               :disabled-date="disabledBefore90daysAndAfterToday"
               type="date"
               placeholder="最大90日分で期間を指定"
              ></date-picker>
              <div class="c-Input__feedback">エラーです</div>
            </div><!-- /c-Input__label -->
          </div><!-- /c-Innput__group -->
          <div class="u-FlexBox__spacer"></div>
          <a class="c-Button _download" href="javascript:;" download>
            <span class="u-TextHiddenVisually">クエリレポートCSVダウンロード</span>
            <icon-park type="download" theme="filled"/>
          </a>
        </div><!-- /u-FlexBox -->
      </div><!-- /c-Content__unit -->
    </div><!-- /c-Content__inner -->
  </div><!-- /c-Content -->
</template>

<script>
import { ref } from 'vue'
import { IconPark } from '@icon-park/vue-next/es/all';
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/locale/ja';
// import 'vue2-datepicker/index.css';

export default {
  name: 'CsvDownLoadContent',
  components: {
    IconPark,
    DatePicker,
  },
  setup() {
    let date1 = ref([new Date(new Date().getTime() - 30 * 24 * 3600 * 1000), new Date()])
    let date2 = ref([new Date(new Date().getTime() - 30 * 24 * 3600 * 1000), new Date()])
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

    return {
      date1,
      date2,
      lang,
      shortcuts,
      disabledBefore90daysAndAfterToday,
    }
  },
}
</script>
