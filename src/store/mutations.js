import {
  ADD_COUNTER,
  ADD_TO_CART,
  REDUCE_COUNTER,
  DELETE_ITEM,
  CHANGE_ACTIVE,
  CHANGE_ALL_ACTIVE
} from './mutation-types'

export default {
  [ADD_COUNTER](state, payload) {
    payload.count ++;
    localStorage.setItem('cart', JSON.stringify(state.goodsList))
  },
  [ADD_TO_CART](state, payload) {
    payload.isSelection = true;
    state.goodsList.push(payload);
    state.goodsList.isActive = true;
    localStorage.setItem('cart', JSON.stringify(state.goodsList))
  },
  [REDUCE_COUNTER](state, payload) {
    payload.count --;
    localStorage.setItem('cart', JSON.stringify(state.goodsList))
  },
  [DELETE_ITEM](state, index) {
    state.goodsList.splice(index, 1);
    state.goodsList.isActive = false;
    localStorage.setItem('cart', JSON.stringify(state.goodsList))
  },
  [CHANGE_ACTIVE](state, id) {
    let count = 0;
    state.goodsList.forEach(item => {
      if (item.id === id) {
        item.isSelection = !item.isSelection
      }
      if (item.isSelection) {
        count ++;
      } else {
        count --;
      }
    });
    if (count < state.goodsList.length) {
      state.goodsList.isActive = false
      localStorage.setItem('cart', JSON.stringify(state.goodsList))
    }
    if (count === state.goodsList.length) {
      state.goodsList.isActive = true
      localStorage.setItem('cart', JSON.stringify(state.goodsList))
    }
  },
  [CHANGE_ALL_ACTIVE](state) {
    let count = 0;
    state.goodsList.forEach(item => {
      if (item.isSelection) {
        count ++;
      }

      if (!item.isSelection) {
        count --;
      }
    })
    if (state.goodsList.length === count || state.goodsList.length === -count) {
      state.goodsList.forEach(item => {
        item.isSelection = !item.isSelection
        localStorage.setItem('cart', JSON.stringify(state.goodsList))
      })
    } else {
      state.goodsList.forEach(item => {
        item.isSelection = true
        localStorage.setItem('cart', JSON.stringify(state.goodsList))
      })
    }
    if (count < state.goodsList.length) {
      state.goodsList.isActive = true
      localStorage.setItem('cart', JSON.stringify(state.goodsList))
    }
    if (count === state.goodsList.length) {
      state.goodsList.isActive = false
      localStorage.setItem('cart', JSON.stringify(state.goodsList))
    }
  }
}