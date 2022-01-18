<template>
<section class="c-Header">
  <div class="c-Header__items u-FlexBox u-FlexBox--middle u-FlexBox--justify">
    <div class="c-Header__item u-FlexBox__item--fill">
      <router-link to="/" exact-active-class="is-active" class="u-FlexBox u-FlexBox--middle">
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
            <Menu as="div" class="headlessui-Menu">
              <MenuButton class="headlessui-Menu__button">
                <span>testユーザー</span>
                <down theme="filled"/>
              </MenuButton>
              <MenuItems as="ul" class="headlessui-Menu__items">
                <MenuItem as="li" class="headlessui-Menu__item">
                  <router-link :to="{ name: 'PasswordReset'}" exact-active-class="is-active">パスワード再設定</router-link>
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
import { useRouter } from 'vue-router';

export default {
  name: 'HeaderUser',
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

    const handleClick = () => {
      // ログアウト時の処理
      router.push({ name: 'Login'})
    }

    return {
      handleClick,
    }
  }
}
</script>
