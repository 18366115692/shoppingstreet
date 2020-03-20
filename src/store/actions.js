import {
  ADD_COUNTER,
  ADD_TO_CART,
  REDUCE_COUNTER,
  DELETE_ITEM,
  CHANGE_ACTIVE,
  CHANGE_ALL_ACTIVE
} from './mutation-types';

export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      let oldProduct = context.state.goodsList.find(item => item.id === payload.id)

      // 1. 判断vuex中是否已经存储了此元素
      if (oldProduct) {
        context.commit(ADD_COUNTER, oldProduct);
      } else {
        payload.count = 1;
        // state.goodsList.push(payload);
        context.commit(ADD_TO_CART, payload)
      }
      resolve('成功加入购物车')
    })
  },
  reduceCart(context, payload) {
    let oldProduct = context.state.goodsList.find(item => item.id === payload.id)

    // 1. 判断vuex中是否已经存储了此元素
    if (oldProduct) {
      context.commit(REDUCE_COUNTER, oldProduct);
    }
  },
  deleteCart(context, payload) {
    context.commit(DELETE_ITEM, payload);
  },
  changeActive(context, payload) {
    context.commit(CHANGE_ACTIVE, payload.id);
  },
  changeAllActive(context) {
    context.commit(CHANGE_ALL_ACTIVE)
  }
}