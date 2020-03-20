<template>
  <div class="sheet-list-item">
    <div class="logo iconfont" :class="data.logo"></div>
    <div class="title">{{ data.title }}</div>
  </div>
</template>

<script>
export default {
  name: 'SheetListItem',
  props: {
    data: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  @import url('//at.alicdn.com/t/font_1620960_a16ojlqcg6.css');

  .sheet-list-item {
    padding-left: .2rem;
    display: flex;
    align-items: center;
    line-height: .6rem;
  }

  .logo {
    color: var(--color-tint);
  }

  .title {
    flex: 1;
    margin-left: .2rem;
    padding: .1rem 0 .2rem;
    border-bottom: .02rem solid rgba(0, 0, 0, .1);
  }
</style>