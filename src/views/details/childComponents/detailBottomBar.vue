<template>
  <div class="bottom-bar">
    <div class="bottom-bar-left">
      <div class="service">
        <p><i class="iconfont">&#xe650;</i></p>
        <span>客服</span>
      </div>
      <div class="shop">
        <p><i class="iconfont">&#xe604;</i></p>
        <span>店铺</span>
      </div>
      <div class="collect">
        <p><i class="iconfont">&#xe60a;</i></p>
        <span>收藏</span>
      </div>
    </div>
    <div class="bottom-bar-right">
      <div class="cart" @click="addToCar">加入购物车</div>
      <div class="pay">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBottomBar',
  methods: {
    addToCar() {
      this.$emit('addCar')
    }
  }
}
</script>

<style scoped>
  .bottom-bar {
    width: 100%;
    height: 1rem;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    background: #eee;
    display: flex;

    border-top: .02rem solid rgba(100, 100,  100, .1);
  }

  .bottom-bar-left {
    width: 48%;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    background: #fff;
    padding-top: .06rem; 
  }

  .bottom-bar-left div {
    width: 33.3%;
    line-height: .4rem;
  }

  .bottom-bar-left i {
    font-size: .4rem;
  }

  .service i {
    color: var(--color-tint)
  }

  .bottom-bar-right {
    flex: 1;
    display: flex;
  }

  .bottom-bar-right div {
    flex: 1;
    line-height: 1rem;
    text-align: center;
  }

  .cart {
    background: #FFEB1C;
  }

  .pay {
    background: #FF699E;
    color: #fff;
  }
</style>