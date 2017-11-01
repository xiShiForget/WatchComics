/**
 * Created by 178063117 on 2017/10/17.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import Topics from './modules/Topics'
import today from './modules/today'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
   modules:{
    Topics,
     today
   }
})
