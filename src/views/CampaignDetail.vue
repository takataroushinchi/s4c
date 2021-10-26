<template>
  <CampaignDetailTitle text="無題のキャンペーン001"/>
  <CampaignDetailSettingItem />
  <CampaignDetailTool @custom-event="setIsOpen" />

  <CommonTitle text="商品一覧"/>
  <CampaignDetailList :list="listRef"/>

  <Dialog :open="isOpenRef" @close="setIsOpen" class="headlessui-Dialog">
    <div class="headlessui-Dialog__content">
      <div class="headlessui-Dialog__inner u-FlexBox u-FlexBox--center u-FlexBox--middle">
      <div class="headlessui-Dialog__body">
        <DialogTitle class="headlessui-Dialog__title">
          <icon-park type="info" theme="filled"/>
          編集内容の保存
        </DialogTitle>
        <DialogDescription class="headlessui-Dialog__description">
          すべての編集内容が保存されていない可能性があります。<br>
          現在の編集内容を保存しますか？
        </DialogDescription>

        <div class="u-FlexBox u-FlexBox--middle u-FlexBox--right">
          <button class="c-Button _element" @click="setIsOpen(false)">キャンセル</button>
          <div class="u-FlexBox__spacer"></div>
          <button class="c-Button _primary" @click="handleMethod">保存</button>
        </div>
      </div><!-- /headlessui-Dialog__body -->

      <DialogOverlay class="headlessui-Dialog__overlay"/>
      </div><!-- /headlessui-Dialog__inner -->
    </div><!-- /headlessui-Dialog__content -->
  </Dialog>
</template>

<script>
import { ref } from "vue";
import {
  useRouter,
  useRoute,
  onBeforeRouteLeave,
  } from 'vue-router';
import { IconPark } from '@icon-park/vue-next/es/all';
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  DialogDescription,
} from "@headlessui/vue";
// @ is an alias to /src
import CommonTitle from '@/components/CommonTitle.vue';
import CampaignDetailTitle from '@/components/CampaignDetailTitle.vue';
import CampaignDetailSettingItem from '@/components/CampaignDetailSettingItem.vue';
import CampaignDetailTool from '@/components/CampaignDetailTool.vue';
import CampaignDetailList from '@/components/CampaignDetailList.vue';

export default {
  name: 'CampaignDetail',
  components: {
    IconPark,
    Dialog,
    DialogOverlay,
    DialogTitle,
    DialogDescription,
    CommonTitle,
    CampaignDetailTitle,
    CampaignDetailSettingItem,
    CampaignDetailTool,
    CampaignDetailList,
  },
  setup() {
    let listRef = ref([])
    const router = useRouter()
    const route = useRoute()
    const path = route.path
    let saved = false
    let toPath = '/campaign-detail'

    let isOpenRef = ref(false);

    const data = [[
      { id: 1111, checked: true },
      { id: 2222, checked: false },
      { id: 3333, checked: true },
      { id: 4444, checked: true },
      { id: 5555, checked: true },
    ],
    [
      { id: 1111, checked: true },
      { id: 2222, checked: false },
      { id: 3333, checked: true },
      { id: 4444, checked: true },
    ]]

    listRef.value = (path === '/campaign-detail')? data[0] : data[1];

    onBeforeRouteLeave((to) => {
      // 未保存の場合は保存ダイアログを出す
      if (!saved) {
        isOpenRef.value = true;
        toPath = to.path;
        // 保存済みフラグ
        saved = true;
        return false;
      }
      // listRef.value = (to.path === '/campaign-detail')? data[0] : data[1];
    })

    const handleMethod = () => {
      router.push(toPath)
    }

    return {
      listRef,
      isOpenRef,
      setIsOpen(value) {
        isOpenRef.value = value;
      },
      handleMethod,
    }
  }
}
</script>
