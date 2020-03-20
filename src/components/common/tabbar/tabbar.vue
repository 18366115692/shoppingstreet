<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Tabbar'
}
</script>

<style scoped>
.tabbar {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: .98rem;
  background-color: #f2f2f2;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.1)
}

</style>