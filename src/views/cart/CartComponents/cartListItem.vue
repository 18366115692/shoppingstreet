<template>
  <div class="cart-container">
    <!-- {{cartlist}} -->
    <div class="key" :class="{active: this.item.isSelection}" @click="checkbox"></div>
    <div class="logo">
      <img :src="item.image">
    </div>
    <div class="detail">
      <p class="title">{{ item.title }}</p>
      <p class="describe">{{ item.desc }}</p>
      <div class="bottom">
        <div><span class="price">¥{{ item.price }}</span></div>
        <div class="count">
          <button @click="reduce">-</button>
          <button>{{ item.count }}</button>
          <button @click="add">+</button>
        </div>
        <div class="iconfont" @click="deleteData">&#xe705;</div>
      </div>
    </div> 
  </div>
</template>

<script>
export default {
  name: 'CartListItem',
  props: {
    item: {
      type: Object,
      default() {
        return {}
      }
    },
    index: {
      type: Number,
      default() {
        return Number
      }
    }
  },
  data() {
    return {
      isActive: this.item.isSelection
    }
  },
  methods: {
    checkbox() {
      this.$store.dispatch('changeActive', this.item)
    },
    reduce() {
      if (this.item.count > 1) {
        this.$store.dispatch('reduceCart', this.item)
      }
    },
    add() {
      this.$store.dispatch('addCart', this.item)
    },
    deleteData() {
      this.$store.dispatch('deleteCart', this.index)
    }
  }
}
</script>

<style scoped>
  .cart-container {
    width: 100%;
    height: 2rem;
    padding: .2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: .02rem solid rgba(100, 100, 100, .1);
  }

  .key {
    flex-shrink: 0;
    width: .4rem;
    height: .4rem;
    border-radius: 50%;
    border: .02rem solid rgba(0, 0, 0, .1);
  }

  .key.active {
    background-image: url(~assets/image/hook.png);
    background-size: 100%;
  }

  .logo {
    flex-shrink: 0;
    margin-left: .2rem;
    width: 1.2rem;
    height: 1.6rem;
    overflow: hidden;
    border-radius: .1rem;
  }

  .logo img {
    width: 100%;
  }

  .detail {
    margin-left: .2rem;
    height: 1.6rem;
    flex: 1;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .detail p {
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .title {
    font-size: .36rem;
  }

  .describe {
    font-size: .26rem;
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    position: relative;
    line-height: .4rem;
  }

  .price {
    color: #f40;
    font-size: .36rem;
  }

  .count {
    width: 1.6rem;
    text-align: center;
    line-height: .36rem;
    display: flex;
    box-sizing: border-box;
    border-radius: .12rem;
    overflow: hidden;
    border: .02rem solid skyblue; 
    position: absolute;
    right: .4rem;
  }

  .count button {
    line-height: .36rem;
    background-color: skyblue;
  }

  .count button:first-child,
  .count button:last-child {
    width: .5rem;
  }

  .count button:nth-child(2) {
    flex: 1;
    background-color: #fff;
  }
</style>