import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

import mutations from './mutations'
import gatters from './gatters'
import action from './action'

const state ={

}

const store = new Vuex.store({
  state,
  mutations,
  gatters,
  action,
  module: {

  }
})
