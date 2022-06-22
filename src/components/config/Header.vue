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
          <span>{{ title }}</span>
        </h1><!-- /c-Header__title -->
      </router-link>
    </div><!-- /c-Header__item -->
    <div class="c-Header__item u-FlexBox__item--fill"></div><!-- /c-Header__item -->
    <div class="c-Header__item" v-if="login_user">
      <nav class="c-Nav">
        <ul class="c-Nav__items u-FlexBox u-FlexBox--middle">
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
                  <router-link :to="{name: 'PasswordReset'}" exact-active-class="is-active" :tabindex="$route.name === 'PasswordReset'? -1 : 0">パスワード再設定</router-link>
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
import {Popover, PopoverButton, PopoverPanel} from "@headlessui/vue";
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

const handleClick = () => {
  // ログアウト時の処理
  store.dispatch('logout')
  router.push({ name: 'Login'})
}
</script>
