<template>
<section class="c-Header">
  <div class="c-Header__items u-FlexBox u-FlexBox--middle u-FlexBox--justify">
    <div class="c-Header__item">
      <router-link :to="{name: 'Root'}" exact-active-class="is-active" :tabindex="$route.path === '/'? -1 : 0" class="u-FlexBox u-FlexBox--middle">
        <div class="c-Header__logo">
          <img alt="logo" src="@/assets/images/logo.png">
        </div><!-- /c-Header__logo -->
        <div class="u-FlexBox__spacer"></div>
        <h1 class="c-Header__title">
          <span>{{ displaySupplierName }}</span>
        </h1><!-- /c-Header__title -->
      </router-link>
    </div><!-- /c-Header__item -->
    <div class="c-Header__item u-FlexBox__item--fill"></div><!-- /c-Header__item -->
    <div class="c-Header__item">
      <nav class="c-Nav">
        <ul class="c-Nav__items u-FlexBox u-FlexBox--middle">
          <li class="c-Nav__item u-InlineFlex">
            <router-link :to="{name: 'SupplierHome'}" exact-active-class="is-active" :tabindex="$route.name === 'SupplierHome'? -1 : 0">キャンペーン</router-link>
            <Popover as="div" class="headlessui-Menu">
              <PopoverButton class="headlessui-Menu__button">
                <down theme="filled"/>
              </PopoverButton>
              <PopoverPanel as="ul" class="headlessui-Menu__items">
                <li class="headlessui-Menu__item">
                  <router-link :to="{name: 'SupplierHome'}" exact-active-class="is-active" :tabindex="$route.name === 'SupplierHome'? -1 : 0">キャンペーン一覧</router-link>
                </li>
                <li class="headlessui-Menu__item">
                  <router-link :to="{name: 'CampaignCreate'}" exact-active-class="is-active" :tabindex="$route.name === 'CampaignCreate'? -1 : 0">キャンペーン新規作成</router-link>
                </li>
              </PopoverPanel>
            </Popover>
          </li><!-- /c-Nav__item -->
          <li class="c-Nav__item u-InlineFlex">
            <router-link :to="{name: 'ReportDimensionDaily', params: {dimension: 'daily'}}" exact-active-class="is-active" :tabindex="$route.name === 'ReportDimensionDaily'? -1 : 0">レポート</router-link>
            <Popover as="div" class="headlessui-Menu">
              <PopoverButton class="headlessui-Menu__button">
                <down theme="filled"/>
              </PopoverButton>
              <PopoverPanel as="ul" class="headlessui-Menu__items">
                <li class="headlessui-Menu__item">
                  <router-link :to="{name: 'ReportDimensionDaily', params: {dimension: 'daily'}}" exact-active-class="is-active" :tabindex="$route.name === 'ReportDimensionDaily'? -1 : 0">日別</router-link>
                </li>
                <li class="headlessui-Menu__item">
                  <router-link :to="{name: 'ReportDimensionMonthly', params: {dimension: 'monthly'}}" exact-active-class="is-active" :tabindex="$route.name === 'ReportDimensionMonthly'? -1 : 0">月別</router-link>
                </li>
                <li class="headlessui-Menu__item">
                  <router-link :to="{name: 'ReportDimensionCampaign', params: {dimension: 'campaign'}}" exact-active-class="is-active" :tabindex="$route.name === 'ReportDimensionCampaign'? -1 : 0">キャンペーン別</router-link>
                </li>
              </PopoverPanel>
            </Popover>
          </li><!-- /c-Nav__item -->
          <li class="c-Nav__item _divider u-InlineFlex">
            <router-link :to="{name: 'CsvDownLoad'}" exact-active-class="is-active" :tabindex="$route.name === 'CsvDownLoad'? -1 : 0">詳細csv</router-link>
          </li><!-- /c-Nav__item -->
          <li class="c-Nav__item u-InlineFlex" v-if="login_user?.role===2">
            <router-link :to="{name: 'ManagerAccounts'}" exact-active-class="is-active">管理画面TOP</router-link>
          </li><!-- /c-Nav__item -->
          <li class="c-Nav__item u-InlineFlex" v-if="login_user?.supplier_id.length > 1">
            <router-link :to="{name: 'SuppliersSelect'}" exact-active-class="is-active">アカウント切替</router-link>
          </li><!-- /c-Nav__item -->
          <li class="c-Nav__item u-InlineFlex">
            <Popover as="div" class="headlessui-Menu">
              <PopoverButton class="headlessui-Menu__button">
                <span class="c-Nav__text u-FlexBox u-FlexBox--middle">
                  <user theme="outline"/>
                  <b>{{ displayUserName }}</b>
                  <down theme="filled"/>
                </span>
              </PopoverButton>
              <PopoverPanel as="ul" class="headlessui-Menu__items">
                <li class="headlessui-Menu__item">
                  <router-link :to="{name: 'PasswordReset'}" exact-active-class="is-active">パスワード再設定</router-link>
                </li>
                <li class="headlessui-Menu__item">
                  <button type="button" class="c-Button _menu-item" @click="handleClick">ログアウト</button>
                </li>
              </PopoverPanel>
            </Popover>
          </li><!-- /c-Nav__item -->
        </ul>
      </nav><!-- /c-Nav -->
    </div><!-- /c-Header__item -->
  </div><!-- /c-Header__items -->
</section><!-- /c-Header -->
</template>

<script setup>
import { Down, User } from '@icon-park/vue-next';
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { computed, defineProps } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

defineProps({
  title: String
})

const router = useRouter();
const store = useStore();

const login_user = computed(()=>{
  return store.state.login_user
})

const displayUserName = computed(()=>{
  return store.getters.userName
})

const displaySupplierName = computed(()=>{
  return store.getters.supplierName
})

const handleClick = () => {
  // ログアウト時の処理
  store.dispatch('logout')
  router.push({ name: 'Login'})
}
</script>
