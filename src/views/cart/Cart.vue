<template>
  <div>
    <!-- 导航栏 -->
    <nav-bar class="cart-top-bar">
      <div slot="center">购物车</div>
    </nav-bar>
    

    <!-- 数据展示栏 -->
    <scroll class="cart-scroll" ref="scroll">
      <cart-list :cartlist="list"/>
    </scroll>

    <div v-show="list.length === 0" class="empty">购物车已清空，再看看有什么宝贝</div>
    
    <empty-cart/>

    <toast></toast>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/navbar';
import CartList from './CartComponents/cartList';
import EmptyCart from './CartComponents/emptyCart';

import Scroll from 'components/common/scroll/Scroll';

// vuex提供的方法，目的是可以将js中的方法转化成vue中的计算属性
import { mapGetters } from 'vuex';

import Toast from 'components/common/toast/Toast';

export default {
  name: 'Cart',
  components: {
    NavBar,
    CartList,
    EmptyCart,
    Scroll,
    Toast
  },
  computed: {
    // 这里有两种语法 区别：数组方法是直接引用js中写的方法名，对象方法是可以修改js中写的方法名
    // 1. 数组方法
    // ...mapGetters(['length', 'list'])
    // 2. 对象方法
    ...mapGetters({
      length: 'length',
      list: 'list'
    })
  },
  activated() {
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
  .cart-top-bar {
    background: var(--color-tint);
    color: #fff;
  }

  .cart-scroll {
    position: absolute;
    top: .88rem;
    bottom: 1.6rem;
    left: 0;
    right: 0;
    overflow: hidden;
  }

  .empty {
    position: absolute;
    top: .88rem;
    bottom: 1.6rem;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
    line-height: 8rem;
    background-color: #eee;
  }
</style>