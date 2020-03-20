<template>
  <div class="TabbarItem" :style="activeStyle" @click="handleClick">
    <slot name="item-logo"></slot>
    <slot name="item-icon"></slot>
    <slot name="item-text"></slot>
  </div>
</template>

<script>
export default {
  name: 'TabbarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: '#f40'
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    handleClick() {
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>
.TabbarItem {
  flex: 1;
  text-align: center;
  position: relative;
}

.iconfont {
  font-size: .4rem;
  display: inline-block;
  margin: .1rem 0;
}


</style>