<template>
  <div class="c-Tab">
    <ul class="c-Tab__items u-FlexBox u-FlexBox--middle">
      <li class="c-Tab__item">
        <router-link :to="{name: 'UserHome'}" exact-active-class="is-selected" :tabindex="$route.name === 'UserHome'? -1 : 0" class="c-Button _tab">有効と一時停止</router-link>
      </li><!-- /c-Tab__item -->
      <li class="c-Tab__item">
        <router-link :to="{name: 'UserHomeArchive'}" exact-active-class="is-selected" :tabindex="$route.name === 'UserHomeArchive'? -1 : 0" class="c-Button _tab">アーカイブのみ</router-link>
      </li><!-- /c-Tab__item -->
    </ul><!-- /c-Tab__items -->
  </div><!-- /c-Tab -->
</template>
