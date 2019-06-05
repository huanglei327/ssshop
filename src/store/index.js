import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';

let state = {
  userInfo: {},
  shopCart: [],
  searchValues: getSearchs()
}


Vue.use(Vuex)
const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
export default store;

function getSearchs () {
  let searchs = JSON.parse(localStorage.getItem('searchValues'))
  if (searchs) {
    return searchs
  }
  return []
}