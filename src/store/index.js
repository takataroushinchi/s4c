import { createStore } from 'vuex'

export default createStore({
  state: {
    login_user: null,
    users:[
      {user_id:1, user_name:'広告ユーザー1（複数アカウント）', email: 'text@test.jp', password: '', role:1, supplier_id:[1,2,3]},
      {user_id:2, user_name:'広告ユーザー2（単数アカウント）', email: 'text@test.jp', password: '', role:1, supplier_id:[1]},
      {user_id:3, user_name:'広告ユーザー3（アカウント設定なし）', email: 'text@test.jp', password: '', role:1, supplier_id:[]},
      {user_id:4, user_name:'ECサイト権限ユーザー', email: 'text@test.jp', password: '', role:2, supplier_id:[1,2,3]},
    ],
    suppliers:[
      {id: 1, supplier_id: 'aa_bbbb', supplier_name: 'アイリスオオヤマ'},
      {id: 2, supplier_id: 'cc_dddd', supplier_name: 'アース製薬'},
      {id: 3, supplier_id: 'ee_ffff', supplier_name: 'スーパーシップ株式会社'},
    ]
  },
  mutations: {
    setLoginUser (state, user) {
      state.login_user = user
    },
    deleteLoginUser (state) {
      state.login_user = null
    },
  },
  actions: {
    login ({ commit }, user) {
      commit('setLoginUser', user)
    },
    logout ({ commit }) {
      commit('deleteLoginUser')
    },
  },
  modules: {
  },
  getters: {
    userName: state => state.login_user ? state.login_user.user_name : '',
    uid: state => state.login_user ? state.login_user.user_id : null,
    getUserById: state => id => {
      return state.users.find( user => user.user_id === id )
    },
    getSupplierById: state => id => {
      return state.suppliers.find( supplier => supplier.id === id )
    }
  }
})
