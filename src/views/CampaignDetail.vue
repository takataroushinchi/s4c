<template>
  <Header title="アカウント名称"/>
  <CampaignDetailTitle text="無題のキャンペーン001"/>
  <CampaignDetailSettingItem />
  <CampaignDetailTool />

  <CommonTitle text="商品一覧"/>
  <CampaignDetailList :list="listRef" @custom-event="setIsOpen"/>

  <Dialog :open="isOpenRef" @close="setIsOpen" class="headlessui-Dialog">
    <div class="headlessui-Dialog__content">
      <div class="headlessui-Dialog__inner u-FlexBox u-FlexBox--center u-FlexBox--middle">
      <div class="headlessui-Dialog__body">
        <DialogTitle class="headlessui-Dialog__title">
          <info theme="filled"/>
          編集内容の保存
        </DialogTitle>
        <DialogDescription class="headlessui-Dialog__description">
          保存すると、入札金額が反映され入札が開始されます。<br>
          入札情報をご確認の上、問題ない場合は保存を押してください。
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

<script setup>
import { ref } from "vue";
import {
  useRouter,
  useRoute,
  } from 'vue-router';
import { Info } from '@icon-park/vue-next';
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  DialogDescription,
} from "@headlessui/vue";
// @ is an alias to /src
import Header from '@/components/Header.vue';
import CommonTitle from '@/components/CommonTitle.vue';
import CampaignDetailTitle from '@/components/CampaignDetailTitle.vue';
import CampaignDetailSettingItem from '@/components/CampaignDetailSettingItem.vue';
import CampaignDetailTool from '@/components/CampaignDetailTool.vue';
import CampaignDetailList from '@/components/CampaignDetailList.vue';

let listRef = ref([])
const router = useRouter()
const route = useRoute()
const campaignId = route.params.campaignId;

let isOpenRef = ref(false);

const data = [[
  { id: 1111, checked: true },
  { id: 2222, checked: false },
  { id: 3333, checked: true },
  { id: 4444, checked: true },
  { id: 5555, checked: true },
]]

listRef.value = data[0];

const handleMethod = () => {
  router.push({ name: 'CampaignDetail', params: { campaignId } })
}

const setIsOpen = (value) => {
  isOpenRef.value = value;
}
</script>
