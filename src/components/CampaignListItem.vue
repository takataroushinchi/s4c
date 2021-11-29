<template>
<tr>
  <td class="u-TextNoWrap">999999</td>
  <td>
    <div class="u-FlexBox u-FlexBox--middle">
      <router-link to="/campaign-detail" exact-active-class="is-active" class="u-TextEllipsis1line">キャンペーン名称キャンペーン名称キャンペーン名称</router-link>
      <div class="u-FlexBox__spacer"></div>
      <span class="c-Table__badge">99</span>
    </div>
  </td>
  <td>
    <div class="u-FlexBox u-FlexBox--middle">
    <Popover class="headlessui-Popover">
      <PopoverButton class="c-Button _status" :class="'_'+status">
        <span class="u-TextNoWrap">{{ text }}</span>
        <down theme="filled"/>
      </PopoverButton>
      <PopoverPanel class="headlessui-Popover__panel" v-slot="{ close }">
        <div class="headlessui-Popover__header">
          <p>公開状態</p>
        </div><!-- /headlessui-Popover__header -->
        <div class="headlessui-Popover__body">
          <div class="c-Radio c-Radio--horizontal">
            <input class="c-Radio__radio" type="radio" :id="'dummyID-'+id+'-01'" :name="'dummyID-'+id" checked>
            <label class="c-Radio__label" :for="'dummyID-'+id+'-01'"><span>有効</span></label>
          </div><!--/c-Radio-->
          <div class="c-Radio c-Radio--horizontal">
            <input class="c-Radio__radio" type="radio" :id="'dummyID-'+id+'-02'" :name="'dummyID-'+id">
            <label class="c-Radio__label" :for="'dummyID-'+id+'-02'"><span>一時停止</span></label>
          </div><!--/c-Radio-->
          <div class="c-Radio c-Radio--horizontal">
            <input class="c-Radio__radio" type="radio" :id="'dummyID-'+id+'-03'" :name="'dummyID-'+id">
            <label class="c-Radio__label" :for="'dummyID-'+id+'-03'"><span>アーカイブ</span></label>
          </div><!--/c-Radio-->
        </div><!-- /headlessui-Popover__body -->
        <div class="headlessui-Popover__footer u-FlexBox u-FlexBox--middle u-FlexBox--right">
          <button type="button" class="c-Button _element" @click="cancel(close)">
            <span>キャンセル</span>
          </button>
          <div class="u-FlexBox__spacer"></div>
          <button type="button" class="c-Button _primary" @click="accept(close)">
            <span>変更</span>
          </button>
        </div><!-- /headlessui-Popover__footer -->
      </PopoverPanel>
    </Popover>
    <div class="c-Info">
      <button type="button"><caution theme="filled"/></button>
      <div class="c-InfoBody _left">予算超過、期間超過</div>
    </div><!-- /c-Info -->
    </div>
  </td>
  <td class="u-TextBreakWord">2021/10/10〜2021/11/10</td>
  <td class="u-TextRight u-TextNoWrap">999,999</td>
  <td class="u-TextRight u-TextNoWrap">1,000</td>
  <td class="u-TextRight u-TextNoWrap">1,999</td>
  <td class="u-TextRight u-TextNoWrap">999,999</td>
  <td class="u-TextRight u-TextNoWrap">999,999</td>
  <td class="u-TextCenter">
    <router-link to="/report" exact-active-class="is-active" class="c-Button _element"><chart-line theme="filled"/></router-link>
  </td>
</tr>
</template>

<script>
import { Down, Caution, ChartLine } from '@icon-park/vue-next';
import {
  Popover,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/vue';

export default {
  components: {
    Down,
    Caution,
    ChartLine,
    Popover,
    PopoverButton,
    PopoverPanel,
  },
  props: {
    id: {
      type: Number,
      default: 1
    },
    status: {
      type: String,
      default: 'valid'
    },
    text: {
      type: String,
      default: '有効'
    },
  },
  setup() {
    return {
      accept: async (close) => {
        // await fetch('/accept-terms', { method: 'POST' })
        close()
      },
      cancel: async (close) => {
        close()
      },
    }
  },
}
</script>
