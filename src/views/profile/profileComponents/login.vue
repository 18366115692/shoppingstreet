<template>
  <div class="login-container">
    <div class="logo" @click="logoClick">
      <img src="">
    </div>
    <div class="title">
      <p class="title-top" @click="loginClock">登录/注册</p>
      <p class="title-bottom" @click="bindClick"><i class="iconfont">&#xe60b;</i>暂无绑定手机号</p>
    </div>
    <div class="more iconfont" @click="checkClick">
      &#xe60d;
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  props: {
    info: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    logoClick() {
      this.$toast.show('正在打开查看头像操作', 2000)
    },
    loginClock() {
      this.$toast.show('正在打开登录注册操作', 2000)
    },
    bindClick() {
      this.$toast.show('正在打开绑定手机号操作', 2000)
    },
    checkClick() {
      this.$toast.show('正在打开查看更多操作', 2000)
    }
  }
}
</script>

<style scoped>
  .login-container {
    background: var(--color-tint);
    padding: .2rem .4rem;
    display: flex;
    align-items: center;
    color: #fff;
    position: relative;
  }

  .logo {
    width: 1rem;
    height: 1rem;
    background-color: #eee;
    border-radius: 50%;
    text-align: center;
    line-height: 1rem;
  }

  .logo::before {
    font-family: "iconfont";
    content: "\e612";
    display: block;
    width: 100%;
    height: 100%;
    font-size: .6rem;
    color: rgba(0, 0, 0, .6);
    font-weight: bold;
  }

  .title {
    margin-left: .4rem;
  }

  .title p {
    padding: .08rem 0;
  }

  .title-top {
    font-size: .32rem;
  }

  .title-bottom {
    font-size: .26rem;
  }

  .title-bottom i {
    font-size: .26rem;
  }

  .more {
    position: absolute;
    right: .4rem;
  }
</style>