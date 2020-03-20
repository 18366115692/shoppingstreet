<template>
  <div class="my-info">
    <div>
      <p><span>0.00</span>元</p>
      <p>我的余额</p>
    </div>
    <div>
      <p><span>0</span>个</p>
      <p>我的优惠</p>
    </div>
    <div>
      <p><span>0</span>分</p>
      <p>我的积分</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyInfo'
}
</script>

<style scoped>
  .my-info {
    display: flex;
    padding: .2rem;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    border-bottom: .2rem solid rgba(0, 0, 0, .1);
  }

  .my-info p {
    padding: .06rem 0;
  }

  .my-info span {
    color: #f40;
    font-size: .4rem;
    font-weight: bold;
  }
</style>