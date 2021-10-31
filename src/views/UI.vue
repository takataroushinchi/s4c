<template>
  <CommonTitle :text="'UIカタログ : ' + idRef "/>
  <Loader :isShow="idRef === 'loader'"/>

  <aside class="c-Message c-Message--success" v-show="idRef === 'ui' || idRef === 'logout'">
    <div class="u-FlexBox u-FlexBox--withGutter">
      <div class="c-Message__icon u-FlexBox__item">
        <info theme="filled"/>
      </div>
      <p class="c-Message__text u-FlexBox__item u-FlexBox__item--fill">
        ログアウトしました。
      </p>
    </div>
  </aside><!-- /c-Message.c-Message--success" -->

  <aside class="c-Message" v-if="idRef === 'ui' || idRef === 'message'">
  <div class="u-FlexBox u-FlexBox--middle u-FlexBox--withGutter">
    <div class="c-Message__icon u-FlexBox__item">
      <info theme="filled"/>
    </div>
    <p class="c-Message__text u-FlexBox__item u-FlexBox__item--fill">
      情報：更新が完了しました。
    </p>
    <div class="u-FlexBox u-FlexBox--middle">
      <button @click="goHome" class="c-Button">ホームに戻る</button>
    </div>
  </div>
  </aside><!-- /c-Message -->

  <aside class="c-Message c-Message--loading" v-if="idRef === 'ui' || idRef === 'loading'">
    <div class="u-FlexBox u-FlexBox--withGutter">
      <div class="c-Message__icon u-FlexBox__item">
        <upload-one theme="filled"/>
      </div>
      <p class="c-Message__text u-FlexBox__item u-FlexBox__item--fill">
        一括入札準備中です
      </p>
    </div>
    <p class="c-Message__note">進行状況の確認には画面の更新をお願いいたします。<br>また、全商品反映後は商品一覧でご確認いただけます。</p>
  </aside><!-- /c-Message.c-Message--loading" -->

  <aside class="c-Message c-Message--loading" v-if="idRef === 'ui' || idRef === 'loading'">
  <div class="u-FlexBox u-FlexBox--withGutter">
    <div class="c-Message__icon u-FlexBox__item">
      <i aria-hidden="true" class="fa fa-cloud-upload"></i>
      <upload-one theme="filled"/>
    </div>
    <p class="c-Message__text u-FlexBox__item u-FlexBox__item--fill">
      一括入札が進行中です... 完了 3100件 / 合計 10519件（残り 7419件）
    </p>
  </div>
  <p class="c-Message__note">進行状況の確認には画面の更新をお願いいたします。<br>また、全商品反映後は商品一覧でご確認いただけます。</p>
  </aside><!-- /c-Message.c-Message--loading" -->

  <aside class="c-Message c-Message--success" v-if="idRef === 'ui' || idRef === 'success'">
  <div class="u-FlexBox u-FlexBox--withGutter">
    <div class="c-Message__icon u-FlexBox__item">
      <info theme="filled"/>
    </div>
    <p class="c-Message__text u-FlexBox__item u-FlexBox__item--fill">
      成功：登録が完了しました。
      詳しくは<router-link to="/" exact-active-class="is-active">こちら</router-link>
    </p>
  </div>
  </aside><!-- /c-Message.c-Message--success" -->

  <aside class="c-Message c-Message--danger" v-if="idRef === 'ui' || idRef === 'danger'">
  <div class="u-FlexBox u-FlexBox--withGutter">
    <div class="c-Message__icon u-FlexBox__item">
      <info theme="filled"/>
    </div>
    <p class="c-Message__text u-FlexBox__item u-FlexBox__item--fill">
      エラー・警告：入力項目にエラーがあります。内容を確認してください。
      詳しくは<router-link to="/" exact-active-class="is-active">こちら</router-link>
    </p>
  </div>
  </aside><!-- /c-Message.c-Message--danger" -->

  <aside class="c-Message c-Message--warning" v-if="idRef === 'ui' || idRef === 'warning'">
  <div class="u-FlexBox u-FlexBox--withGutter">
    <div class="c-Message__icon u-FlexBox__item">
      <info theme="filled"/>
    </div>
    <p class="c-Message__text u-FlexBox__item u-FlexBox__item--fill">
      予算が設定されていません。予算を設定してください。
    </p>
  </div>
  </aside><!-- /c-Message.c-Message--warning" -->

  <aside class="c-Message c-Message--info" v-if="idRef === 'ui' || idRef === 'info'">
  <div class="u-FlexBox u-FlexBox--withGutter">
    <div class="c-Message__icon u-FlexBox__item">
      <info theme="filled"/>
    </div>
    <p class="c-Message__text u-FlexBox__item u-FlexBox__item--fill">
      インフォメーション：ただいまメンテナンス中です、しばらくお待ちください。
      詳しくは<router-link to="/" exact-active-class="is-active">こちら</router-link>
    </p>
  </div>
  </aside><!-- /c-Message.c-Message--info" -->

</template>

<script>
import { ref } from 'vue'
import { Info, UploadOne } from '@icon-park/vue-next';
import { useRoute, onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router';
// @ is an alias to /src
import CommonTitle from '@/components/CommonTitle.vue';
import Loader from '@/components/Loader.vue';

export default {
  name: 'UI',
  components: {
    Info,
    UploadOne,
    CommonTitle,
    Loader,
  },
  props: {
    id: {
      type: String,
    },
  },
  setup() {
    let idRef = ref('')
    const route = useRoute()
    const { id } = route.params
    // const path = route.path;

    // :id [ ui-name ]
    // /ui の場合は、undefind なので、uiを設定
    idRef.value = id? id : "ui";

    onBeforeRouteLeave((to) => {
      const p = to.path.split("/").filter(e => Boolean(e));
      idRef.value = p[p.length - 1];
    })

    onBeforeRouteUpdate((to) => {
      const p = to.path.split("/").filter(e => Boolean(e));
      idRef.value = p[p.length - 1];
    })

    return {
      idRef,
    }
  }
}
</script>
