import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import * as actions from './actions';
import * as getters from './getters';
import state from './state';
import mutations from './mutations';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  strict: debug,
  // 开发环境vuex流程状态
  plugins: debug ? [createLogger()] : []
});
