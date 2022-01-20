<template>
<form>
  <div class="c-Content">
    <div class="c-Content__inner">
      <div class="c-Content__header u-FlexBox u-FlexBox--middle u-FlexBox--right">
        <button type="button" class="c-Button _element" @click="handleBack">キャンセル</button>
        <div class="u-FlexBox__spacer"></div>
        <router-link :to="{name: 'CampaignDetail', params: { campaign_id: campaign_id }}" exact-active-class="is-selected" class="c-Button _primary">{{ text }}</router-link>
      </div><!-- /c-Content__header -->

      <div class="c-Content__unit">
        <h3 class="c-Content__unitTitle">キャンペーン名称</h3>
        <div class="c-Input__group">
          <input class="c-Input" type="text" name="campaign_name" value="無題のキャンペーン001" spellcheck="false" placeholder="">
          <div class="c-Input__feedback">エラーです</div>
        </div><!-- /c-Input__group -->
      </div><!-- /c-Content__unit -->

      <div class="c-Content__unit" v-if="isEdit">
        <h3 class="c-Content__unitTitle">公開状態</h3>
        <div class="c-Radio c-Radio--horizontal">
            <input class="c-Radio__radio" type="radio" id="dummyID-01-01" name="dummyID-01" checked>
            <label class="c-Radio__label _valid" for="dummyID-01-01"><span>有効</span></label>
          </div><!--/c-Radio-->
          <div class="c-Radio c-Radio--horizontal">
            <input class="c-Radio__radio" type="radio" id="dummyID-01-02" name="dummyID-01">
            <label class="c-Radio__label _invalid" for="dummyID-01-02"><span>一時停止</span></label>
          </div><!--/c-Radio-->
          <div class="c-Radio c-Radio--horizontal">
            <input class="c-Radio__radio" type="radio" id="dummyID-01-03" name="dummyID-01">
            <label class="c-Radio__label _archive" for="dummyID-01-03"><span>アーカイブ</span></label>
          </div><!--/c-Radio-->
      </div><!-- /c-Content__unit -->

      <div class="c-Content__unit">
        <h3 class="c-Content__unitTitle">期間</h3>

        <div class="u-FlexBox u-FlexBox--top">
          <div class="c-Input__label">
            <label>
              開始日<i class="c-Input__required">※必須</i>
            </label>
            <date-picker
             v-model="date1"
             :lang="lang"
             type="date"
             placeholder="開始日を指定"
            ></date-picker>
            <div class="c-Input__feedback">エラーです</div>
          </div><!-- /c-Input__label -->
          <div class="c-Input__label">
            <label>
              開始時間
            </label>
            <!-- <select class="c-Input" id="startAtTime">
              <option value="0">00:00</option><option value="1">01:00</option><option value="2">02:00</option><option value="3">03:00</option><option value="4">04:00</option><option value="5">05:00</option><option value="6">06:00</option><option value="7">07:00</option><option value="8">08:00</option><option value="9">09:00</option><option value="10">10:00</option><option value="11">11:00</option><option value="12">12:00</option><option value="13">13:00</option><option value="14">14:00</option><option value="15">15:00</option><option value="16">16:00</option><option value="17">17:00</option><option value="18">18:00</option><option value="19">19:00</option><option value="20">20:00</option><option value="21">21:00</option><option value="22">22:00</option><option value="23">23:00</option>
            </select> -->
            <date-picker
             v-model="time1"
             :time-picker-options="{
              start: '00:00',
              step: '01:00',
              end: '23:00',
             }"
             format="HH:mm"
             type="time"
             placeholder="HH:mm"
            ></date-picker>
          </div><!-- /c-Input__label -->
        </div><!-- /u-FlexBox -->

        <div class="u-FlexBox__vSpacer _40"></div><!-- /u-FlexBox__vSpacer._40 -->

        <div class="u-FlexBox u-FlexBox--top">
          <div class="c-Input__label">
            <label>
              終了日
            </label>
            <date-picker
             v-model="date2"
             :lang="lang"
             type="date"
             placeholder="終了日を指定"
            ></date-picker>
            <div class="c-Input__feedback">エラーです</div>
          </div><!-- /c-Input__label -->
          <div class="c-Input__label">
            <label>
              終了時間
            </label>
            <!-- <select class="c-Input" id="endAtTime" disabled>
              <option value="0">-</option> <option value="{{n}}">01:59</option><option value="{{n}}">02:59</option><option value="{{n}}">03:59</option><option value="{{n}}">04:59</option><option value="{{n}}">05:59</option><option value="{{n}}">06:59</option><option value="{{n}}">07:59</option><option value="{{n}}">08:59</option><option value="{{n}}">09:59</option><option value="{{n}}">10:59</option><option value="{{n}}">11:59</option><option value="{{n}}">12:59</option><option value="{{n}}">13:59</option><option value="{{n}}">14:59</option><option value="{{n}}">15:59</option><option value="{{n}}">16:59</option><option value="{{n}}">17:59</option><option value="{{n}}">18:59</option><option value="{{n}}">19:59</option><option value="{{n}}">20:59</option><option value="{{n}}">21:59</option><option value="{{n}}">22:59</option><option value="{{n}}">23:59</option>
            </select> -->
            <date-picker
             v-model="time2"
             :time-picker-options="{
              start: '00:59',
              step: '01:00',
              end: '23:59',
             }"
             format="HH:mm"
             type="time"
             placeholder="HH:mm"
             :disabled="!date2"
            ></date-picker>
          </div><!-- /c-Input__label -->
        </div><!-- /u-FlexBox -->
      </div><!-- /c-Content__unit -->

      <div class="c-Content__unit">
        <h3 class="c-Content__unitTitle">入札設定</h3>

        <div class="u-FlexBox u-FlexBox--top">
          <div class="c-Input__group">
            <div class="c-Input__label">
              <label>
                日予算
              </label>
              <input class="c-Input" type="number" name="budget" value="0" placeholder="">
              <div class="c-Input__feedback">エラーです</div>
            </div><!-- /c-Input__label -->
          </div><!-- /c-Input__group -->
          <div class="c-Input__group">
            <div class="c-Input__label">
              <label>
                ベース入札金額
              </label>
              <input class="c-Input" type="number" name="base_amount" value="50" placeholder="">
              <div class="c-Input__feedback">エラーです</div>
            </div><!-- /c-Input__label -->
          </div><!-- /c-Input__group -->
        </div><!-- /u-FlexBox -->
      </div><!-- /c-Content__unit -->

      <div class="c-Content__unit">
        <h3 class="c-Content__unitTitle">追加検索キーワード</h3>
        <div class="c-Input__group">
          <div class="c-Input__label">
            <label>
              追加キーワード、1件最大23文字、改行入力で複数キーワードを5件まで登録可能。
            </label>
            <textarea class="c-Input" name="words" rows="6" cols="40" placeholder="追加するキーワードを入力（複数キーワードを改行を入れて入力）"></textarea>
            <div class="c-Input__feedback">入力制限を超えています</div>
          </div><!-- /c-Input__label -->
        </div><!-- /c-Input__group -->
      </div><!-- /c-Content__unit -->

      <div class="c-Content__unit">
        <h3 class="c-Content__unitTitle">除外検索キーワード</h3>
        <div class="c-Input__group">
          <div class="c-Input__label">
            <label>
              除外キーワード、1件最大23文字、改行入力で複数キーワードを5件まで登録可能。
            </label>
            <textarea class="c-Input is-invalid" name="ex_words" rows="6" cols="40" placeholder="除外するキーワードを入力（複数キーワードを改行を入れて入力）"></textarea>
            <div class="c-Input__feedback">入力制限を超えています</div>
          </div><!-- /c-Input__label -->
        </div><!-- /c-Input__group -->
      </div><!-- /c-Content__unit -->

    </div><!-- /c-Content__inner -->
  </div><!-- /c-Content -->
</form>
</template>

<script>
import { defineComponent, ref } from 'vue';
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/locale/ja';
// import 'vue2-datepicker/index.css';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  name: 'CampaignContent',
  components: {
    DatePicker,
  },
  props: {
    text: String,
    isEdit: Boolean,
  },
  setup() {
    const router = useRouter();
    const route = useRoute()
    const campaign_id = route.params.campaign_id;

    let date1 = ref(new Date())
    let date2 = ref(null)
    let time1 = ref(null)
    let time2 = ref(null)
    const lang = {
          formatLocale: {
            firstDayOfWeek: 1,
          },
          monthBeforeYear: false,
        }

    const handleBack = () => {
      router.back()
    }

    return {
      campaign_id,
      date1,
      date2,
      time1,
      time2,
      lang,
      handleBack,
    }
  },
})
</script>
