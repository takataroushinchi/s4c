import { createStore } from 'vuex'

export default createStore({
  state: {
    login_user: null,
    selected_supplier: null,
    users:[
      {user_id:1, user_name:'広告ユーザー1（複数アカウント）', email:'multi@test.jp', password:'', role:1, supplier_id:[1,2,3]},
      {user_id:2, user_name:'広告ユーザー2（単数アカウント）', email:'single@test.jp', password:'', role:1, supplier_id:[1]},
      {user_id:3, user_name:'広告ユーザー3（アカウント設定なし）', email:'test@test.jp', password:'', role:1, supplier_id:[]},
      {user_id:4, user_name:'ECサイト権限ユーザー', email:'manager@test.jp', password:'', role:2, supplier_id:[1,2,3]},
    ],
    suppliers:[
      {id:1, supplier_id:'aa_bbbb', supplier_name:'アイリスオオヤマ'},
      {id:2, supplier_id:'cc_dddd', supplier_name:'アース製薬'},
      {id:3, supplier_id:'ee_ffff', supplier_name:'スーパーシップ株式会社'},
      {id:4, supplier_id:'000-xxxxx', supplier_name:'大手企業の会社'},
      {id:5, supplier_id:'001-xxxxx', supplier_name:'中小企業の会社'},
      {id:6, supplier_id:'002-xxxxx', supplier_name:'個人経営の会社'},
    ]
  },
  mutations: {
    setLoginUser (state, user) {
      state.login_user = user
    },
    deleteLoginUser (state) {
      state.login_user = null
    },
    setSelectedSupplier (state, supplier) {
      state.selected_supplier = supplier
    },
    deleteSelectedSupplier (state) {
      state.selected_supplier = null
    },
  },
  actions: {
    login ({ commit }, user) {
      commit('setLoginUser', user)
    },
    logout ({ commit }) {
      commit('deleteLoginUser')
    },
    setSelectedSupplier ({ commit }, supplier) {
      commit('setSelectedSupplier', supplier)
    },
    deleteSelectedSupplier ({ commit }) {
      commit('deleteSelectedSupplier')
    },
  },
  modules: {
  },
  getters: {
    userName: state => state.login_user ? state.login_user.user_name : 'ユーザー名',
    uid: state => state.login_user ? state.login_user.user_id : null,
    getUserById: state => id => {
      return state.users.find( user => user.user_id === id )
    },
    supplierName: state => state.selected_supplier ? state.selected_supplier.supplier_name : 'アカウント名',
    getSupplierById: state => id => {
      return state.suppliers.find( supplier => supplier.id === id )
    }
  }
})
