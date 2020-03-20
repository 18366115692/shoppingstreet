<template>
  <tabbar>
    <tabbar-item path="/home" activeColor="#FF507B">
      <i slot="item-icon" class="iconfont">&#xe6ce;</i>
      <div slot="item-text">首页</div>
    </tabbar-item>
    <tabbar-item path="/category" activeColor="#FF507B">
      <i slot="item-icon" class="iconfont">&#xe7f8;</i>
      <div slot="item-text">分类</div>
    </tabbar-item>
    <tabbar-item path="/cart" activeColor="#FF507B">
      <i slot="item-icon" class="iconfont">&#xe600;</i>
      <span slot="item-logo" class="count-logo">{{ $store.getters.showCartNum }}</span>
      <div slot="item-text">购物车</div>
    </tabbar-item>
    <tabbar-item path="/profile" activeColor="#FF507B">
      <i slot="item-icon" class="iconfont">&#xe699;</i>
      <div slot="item-text">我的</div>
    </tabbar-item>
  </tabbar>
</template>

<script>
import Tabbar from 'components/common/tabbar/tabbar'
import TabbarItem from 'components/common/tabbar/tabberItem'
export default {
  name: 'MainTabbar',
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>

<style scoped>
.count-logo {
  position: absolute;
  left: 50%;
  display: inline-block;
  width: .4rem;
  height: .32rem;
  background-color: rgba(255, 0, 0, .8);
  border-radius: .16rem;
  color: #fff;
  line-height: .32rem;
}
</style>