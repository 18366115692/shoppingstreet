<template>
  <div class="toast-container" v-show="isShow">
    <div class="toast-content">{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data() {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show(message='加入购物车成功', duration=2000) {
      this.isShow = true;
      this.message = message

      setTimeout(() => {
        this.isShow = false;
        this.message = '';
      }, duration)
    }
  }
}
</script>

<style scoped>
  .toast-container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: .32rem .4rem;
    border-radius: .1rem;
    background-color: rgba(0, 0, 0, .7);
    z-index: 99;
    color: #fff;
    text-align: center;
  }
</style>