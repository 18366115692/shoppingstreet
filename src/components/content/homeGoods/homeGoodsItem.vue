<template>
  <router-link 
    :to="'detail/'+id" 
    tag="div" 
    class="home-goods-item"
  >
    <img v-lazy="showItem" @load="imageLoad"/>
    <div class="item-info">
      <p class="title">{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="likes iconfont">{{ goodsItem.cfav }}</span>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'HomeGoodsItem',
  props: {
    goodsItem: {
      type: Object,
      default: {}
    }
  },
  methods: {
    imageLoad() {
      this.$bus.$emit('itemImageLoad')
    }
  },
  computed: {
    id() {
      return this.goodsItem.iid || this.goodsItem.shop_id
    },
    showItem() {
      return this.goodsItem.image || this.goodsItem.show.img
    }
  }
}
</script>

<style scoped>
  .home-goods-item {
    position: relative;
    height: 0;
    padding-bottom: 5.34rem;
    width: 48%;
    overflow: hidden;
  }

  .home-goods-item img {
    width: 100%;
    border-radius: .1rem;
  }

  .item-info {
    position: absolute;
    left: .04rem;
    right: .04rem;
    bottom: .12rem;
    text-align: center;
  }

  .item-info span {
    padding: 0 .1rem;
  }

  .title {
    white-space:nowrap;
    overflow: hidden;
    text-overflow:ellipsis;
    font-size: .24rem;
  }

  .price {
    color: var(--color-tint);
  }

  .likes {
    font-size: .24rem;
  }

  .likes::before {
    content: "\e60a";
  }
</style>