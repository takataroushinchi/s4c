import { createStore } from 'vuex'

export default createStore({
  state: {
    login_user: null,
    userToken: null,
    selected_supplier: null,
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
  },
  mutations: {
    setLoginUser(state, {registeredUser, userToken}) {
      state.login_user = registeredUser
      state.userToken = userToken
    },
    deleteLoginUser (state) {
      state.login_user = null
      state.userToken = null
    },
    pushRegisterUser (state, user) {
      state.users.push(user)
    },
    editRegisterUser (state, user) {
      const id = user.user_id;
      const index = state.users.findIndex((u) => u.id === id);
      state.users.splice(index, 1, user);
    },
    setSelectedSupplier (state, supplier) {
      state.selected_supplier = supplier
    },
    deleteSelectedSupplier (state) {
      state.selected_supplier = null
    },
  },
  actions: {
    login ({ commit }, params) {
      commit('setLoginUser', params)
    },
    logout ({ commit }) {
      commit('deleteLoginUser')
    },
    pushRegisterUser ({ commit }, user) {
      commit('pushRegisterUser', user)
    },
    editRegisterUser ({ commit }, user) {
      commit('editRegisterUser', user)
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
    getUserByName: state => name => {
      return state.users.find( user => user.user_name === name )
    },
    // generalUsers( state ){
    //   return state.users.filter( user => user.role === 1)
    // }
    generalUsers: state => state.users.filter( user => user.role === 1),
    supplierName: state => state.selected_supplier ? state.selected_supplier.supplier_name : 'アカウント名',
    getSupplierById: state => id => {
      return state.suppliers.find( supplier => supplier.id === id )
    }
  }
})
