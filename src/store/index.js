// 导入所需要的的文件，vue和vuex
import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations';
import actions from './actions';
import getters from './getters'

// 安装使用vuex
Vue.use(Vuex);

// 获取本地存储的购物车数据
let cart = JSON.parse(localStorage.getItem('cart') || '[]')

// 创建Vuex实例
const state = {
  goodsList: cart
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});

// 导出实例
export default store;