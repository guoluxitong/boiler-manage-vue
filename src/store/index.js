import Vue from 'vue'
import Vuex from 'vuex'
import permission from './modules/permission'
import user from './modules/user'
import app from './modules/app'

import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    permission,
    user,
    app
  },
  getters
})
export default store
