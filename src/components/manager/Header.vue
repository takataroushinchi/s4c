<template>
<section class="c-Header">
  <div class="c-Header__items u-FlexBox u-FlexBox--middle u-FlexBox--justify">
    <div class="c-Header__item u-FlexBox__item--fill">
      <router-link :to="{name: 'Root'}" exact-active-class="is-active" class="u-FlexBox u-FlexBox--middle">
        <div class="c-Header__logo">
          <img alt="logo" src="@/assets/images/logo.png">
        </div><!-- /c-Header__logo -->
        <div class="u-FlexBox__spacer"></div>
        <h1 class="c-Header__title">
            <span>{{ title }}</span>
        </h1><!-- /c-Header__title -->
      </router-link>
    </div><!-- /c-Header__item -->
    <div class="c-Header__item">
      <nav class="c-Nav">
        <ul class="c-Nav__items u-FlexBox u-FlexBox--middle">
          <li class="c-Nav__item u-InlineFlex">
            <router-link :to="{name: 'ManagerAccounts'}" exact-active-class="is-active">アカウント</router-link>
          </li><!-- /c-Nav__item -->
          <li class="c-Nav__item u-InlineFlex">
            <router-link :to="{name: 'ManagerUsers'}" exact-active-class="is-active">ユーザー</router-link>
            <Menu as="div" class="headlessui-Menu">
              <MenuButton class="headlessui-Menu__button">
                <down theme="filled"/>
              </MenuButton>
              <MenuItems as="ul" class="headlessui-Menu__items">
                <MenuItem as="li" class="headlessui-Menu__item">
                  <router-link :to="{name: 'ManagerUsers'}" exact-active-class="is-active">ユーザー一覧</router-link>
                </MenuItem>
                <MenuItem as="li" class="headlessui-Menu__item">
                  <router-link :to="{name: 'ManagerUsersCreate'}" exact-active-class="is-active">ユーザー新規作成</router-link>
                </MenuItem>
              </MenuItems>
            </Menu>
          </li><!-- /c-Nav__item -->
          <li class="c-Nav__item _divider u-InlineFlex">
            <router-link :to="{name: 'ManagerReport'}" exact-active-class="is-active">全体レポート</router-link>
            <Menu as="div" class="headlessui-Menu">
              <MenuButton class="headlessui-Menu__button">
                <down theme="filled"/>
              </MenuButton>
              <MenuItems as="ul" class="headlessui-Menu__items">
                <MenuItem as="li" class="headlessui-Menu__item">
                  <router-link :to="{name: 'ManagerReportDimension', params: {dimension: 'daily'}}" exact-active-class="is-active">日別</router-link>
                </MenuItem>
                <MenuItem as="li" class="headlessui-Menu__item">
                  <router-link :to="{name: 'ManagerReportDimension', params: {dimension: 'monthly'}}" exact-active-class="is-active">月別</router-link>
                </MenuItem>
                <MenuItem as="li" class="headlessui-Menu__item">
                  <router-link :to="{name: 'ManagerReportDimension', params: {dimension: 'account'}}" exact-active-class="is-active">アカウント別</router-link>
                </MenuItem>
              </MenuItems>
            </Menu>
          </li><!-- /c-Nav__item -->
          <li class="c-Nav__item u-InlineFlex" v-if="login_user?.role===2">
            <router-link :to="{name: 'ManagerAccounts'}" exact-active-class="is-active">管理画面TOP</router-link>
          </li><!-- /c-Nav__item -->
          <li class="c-Nav__item u-InlineFlex" v-if="login_user?.supplier_id.length > 1">
            <router-link :to="{name: 'AccountsSelect'}" exact-active-class="is-active">アカウント切替</router-link>
          </li><!-- /c-Nav__item -->
          <li class="c-Nav__item u-InlineFlex">
            <Menu as="div" class="headlessui-Menu">
              <MenuButton class="headlessui-Menu__button">
                <span>{{ displayUserName }}</span>
                <down theme="filled"/>
              </MenuButton>
              <MenuItems as="ul" class="headlessui-Menu__items">
                <MenuItem as="li" class="headlessui-Menu__item">
                  <router-link :to="{name: 'PasswordReset'}" exact-active-class="is-active">パスワード再設定</router-link>
                </MenuItem>
                <MenuItem as="li" class="headlessui-Menu__item">
                  <button type="button" class="c-Button _menu-item" @click="handleClick">ログアウト</button>
                </MenuItem>
              </MenuItems>
            </Menu>
          </li><!-- /c-Nav__item -->
        </ul>
      </nav><!-- /c-Nav -->
    </div><!-- /c-Header__item -->
  </div><!-- /c-Header__items -->
</section><!-- /c-Header -->
</template>

<script>
import { Down } from '@icon-park/vue-next';
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
  name: 'ManagerHeader',
  props: {
    title: String
  },
  components: {
    Down,
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
  },
  setup() {
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

    return {
      login_user,
      displayUserName,
      handleClick,
    }
  }
}
</script>
