<template>
  <div class="navbar-container">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
.navbar-container {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 0.88rem;
  line-height: .88rem;
  display: flex;
  text-align: center;
}

.left,
.right {
  width: 1.2rem;
}

.center {
  flex: 1;
  font-size: .32rem;
}
</style>