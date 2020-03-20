<template>
  <div class="empty-cart">
    <div class="left">
      <div class="all" :class="{active: $store.state.goodsList.isActive}" @click="checkBox"></div>
      <div class="title">全选</div>
    </div>
    <div class="right">
      <div class="total-price">总计:{{ TotalPrice | Format(this.decimal) }}元</div>
      <div><button @click="pay">结算</button></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmptyCart',
  data() {
    return {
      decimal: 2
    }
  },
  methods: {
    checkBox() {
      this.$store.dispatch('changeAllActive')
    },
    pay(id) {
      let count = 0;
      this.$store.state.goodsList.forEach(item => {
        if (!item.isSelection) {
          count ++
        }
      })
      if (count === this.$store.state.goodsList.length) {
        this.$toast.show('请选择需要购买的商品')
      } else {
        this.$toast.show('支付成功')
        this.$store.state.goodsList.forEach((item, index) => {
          if (item.isSelection) {
            this.$store.dispatch('deleteCart', index)
          }
        })
      }
    }
  },
  computed: {
    TotalPrice() {
      let total = 0;
      this.$store.state.goodsList.forEach(item => {
        if (item.isSelection) {
          total += item.count * item.price
        }
      });
      return total;
    }
  },
  filters: {
    Format(val, decimal) {
      if(isNaN(val)){
          return 0;
      }
      var strnum = val+'';
      var arr = strnum.split('.');
      if(arr.length<2 || arr[1].length>2){
        return val.toFixed(decimal);
      }

      strnum = arr.join('');

      var strnum2 = strnum.slice(0,strnum.length)+'.'+strnum.slice(strnum.length);

      var result = Math.round(strnum2-0)+'';

      if(arr[1].length<decimal){
          result+='0'; //如果小数点的个数刚好等于要保留的小数点个数，要补0
      }

      return result.slice(0,-decimal)+'.'+result.slice(-decimal)
    }
  }
}
</script>

<style scoped>
.empty-cart {
  width: 100%;
  line-height: .6rem;
  background: #fff;
  position: absolute;
  bottom: 1rem;
  display: flex;
  justify-content: space-between;
  border-top: .02rem solid rgba(0, 0, 0, .1);
}

.left,
.right {
  display: flex;
  align-items: center;
  position: relative;
  font-size: .32rem;
}

.right {
  padding-right: 1.12rem;
}

.all {
  width: .4rem;
  height: .4rem;
  border-radius: 50%;
  border: .02rem solid rgba(0, 0, 0, .1);
  margin-left: .2rem;
}

.all.active {
  background-image: url(~assets/image/hook.png);
  background-size: 100%;
}

.title {
  margin-left: .2rem;
}

.total-price {
  color: var(--color-tint);
}

button {
  background-color: salmon;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 1rem;
}
</style>