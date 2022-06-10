<template>
  <ConfigHeader title="PRアイテム"/>
  <CommonTitle text="ログイン"/>
  <LoginForm />
  <pre>
    <code>
    ユーザー名またはメールアドレス: user_name -> user1 とか manager とか
    パスワード: 空でOK

    1.単数サプライヤーのみ、サプライヤー選択が無し
      ユーザー名【 user1 】

    2.複数サプライヤー登録あり、サプライヤー選択があり（ログイン後表示、ヘッダーに切替あり）
      ユーザー名【 user 】

    3.ECサイト権限、ECサイト画面がルート、サプライヤー画面閲覧、ECサイト画面への動線あり
      ユーザー名【 manager 】

    4.開発環境、ECサイト権限、ECサイト画面がルート、サプライヤー画面閲覧、ECサイト画面への動線あり
      ユーザー名【 hoge@example.com 】パスワード【 1 】
    </code>
  </pre>
</template>

<script setup>
// @ is an alias to /src
import ConfigHeader from '@/components/config/Header.vue';
import CommonTitle from '@/components/CommonTitle.vue';
import LoginForm from '@/components/config/LoginForm.vue';
</script>
