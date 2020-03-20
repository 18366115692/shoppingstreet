<template>
  <nav-bar>
    <div slot="left" class="iconfont" @click="clickBack">&#xe675;</div>
    <div slot="center" class="center">
      <span 
        v-for="(item, index) in titles" 
        :key="index" 
        :class="{active: index === currentIndex}"
        @click="changeItem(index)"
      >{{ item }}</span>
    </div>

  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/navbar'

export default {
  name: 'DetailNavBar',
  components: {
    NavBar
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    clickBack() {
      this.$router.go(-1)
    },
    changeItem(index) {
      this.currentIndex = index
      this.$emit('titleClick', index)
    }
  }
}
</script>

<style scoped>
  .center {
    display: flex;
  }
  .center span {
    flex: 1;
    font-size: .28rem;
  }

  .active {
    color: var(--color-tint)
  }
</style>
