import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import mutations from './mutations'
import gatters from './gatters'
import action from './action'

const state ={
  token: "",
  userName: ""
}

export default new Vuex.Store({
  state,
  mutations,
  gatters,
  action,
  module: {

  }
})
