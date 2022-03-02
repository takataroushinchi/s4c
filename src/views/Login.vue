<template>
  <ConfigHeader title="PRアイテム"/>
  <CommonTitle text="ログイン"/>
  <LoginForm />
  <pre>
    <code>
    ユーザー名またはメールアドレス： user_name -> user1 とか manager とか
    パスワード：空でOK

    1.単数サプライヤーのみ、サプライヤー選択が無し
      ユーザー名【 user1 】

    2.複数サプライヤー登録あり、サプライヤー選択があり（ログイン後表示、ヘッダーに切替あり）
      ユーザー名【 user 】

    3.ECサイト権限、ECサイト画面がルート、サプライヤー画面閲覧、ECサイト画面への動線あり
      ユーザー名【 manager 】

    users:[
      {user_id:1, user_name:'user1', email:'multi@test.jp', password:'', role:1, login:true, supplier_id:[1,2,3,7]},
      {user_id:2, user_name:'user2', email:'single@test.jp', password:'', role:1, login:true, supplier_id:[3]},
      {user_id:3, user_name:'user3', email:'test@test.jp', password:'', role:1, login:true, supplier_id:[]},
      {user_id:4, user_name:'manager', email:'manager@test.jp', password:'', role:2, login:true, supplier_id:[1,2,3,4,5,6,7]},
      {user_id:5, user_name:'user4', email:'supership@test.jp', password:'', role:1, login:true, supplier_id:[3]},
      {user_id:6, user_name:'user', email:'hogehoge@hoge.co.jp', password:'', role:1, login:true, supplier_id:[1, 2, 3, 4, 5, 6, 7]},
      {user_id:7, user_name:'壱弐参肆伍陸漆捌玖拾壱弐参肆伍陸漆捌玖拾', email:'hogehoge@hoge.co.jp', password:'', role:1, login:true, supplier_id:[4,5]},
    ],
    suppliers:[
      {id:1, supplier_id:'aa_bbbb', supplier_name:'アイリスオオヤマ'},
      {id:2, supplier_id:'cc_dddd', supplier_name:'アース製薬'},
      {id:3, supplier_id:'ee_ffff', supplier_name:'スーパーシップ株式会社'},
      {id:4, supplier_id:'000-xxxxx', supplier_name:'大手企業の会社'},
      {id:5, supplier_id:'001-xxxxx', supplier_name:'中小企業の会社'},
      {id:6, supplier_id:'002-xxxxx', supplier_name:'個人経営の会社'},
      {id:7, supplier_id:'007-xxxxx', supplier_name:'セブンイレブン'},
    ]
    </code>
  </pre>
</template>

<script>
// @ is an alias to /src
import ConfigHeader from '@/components/config/Header.vue';
import CommonTitle from '@/components/CommonTitle.vue';
import LoginForm from '@/components/config/LoginForm.vue';

export default {
  name: 'Login',
  components: {
    ConfigHeader,
    CommonTitle,
    LoginForm,
  },
}
</script>
