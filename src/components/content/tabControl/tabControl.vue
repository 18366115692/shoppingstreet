<template>
  <div class="tab-control">
    <div 
      class="control-item" 
      :class="{active: index === currentIndex}"
      v-for="(item, index) in titles" 
      :key="index" 
      @click="handleClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    handleClick(index) {
      this.currentIndex = index;
      this.$emit('changeItem', index)
    }
  }
}
</script>

<style scoped>
.tab-control {
  display: flex;
  background-color: #fff;
  height: .8rem;
  line-height: .8rem;
  text-align: center;
}

.control-item {
  flex: 1;
}

.control-item span {
  padding: .1rem;
}

.active {
  color: var(--color-high-text);
}

.active span {
  border-bottom: .06rem solid var(--color-high-text);
}
</style>