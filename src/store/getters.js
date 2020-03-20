export default {
  length(state) {
    return state.goodsList.length
  },
  list(state) {
    return state.goodsList
  },
  showCartNum(state) {
    let number = 0;
    state.goodsList.forEach(item => {
      number += item.count
    });
    return number;
  }
}