<template>
  <div>
    <cart-list-item v-for="(item, index) in cartlist" :key="item.id" :item="item" :index="index"/>
  </div>
</template>

<script>
import CartListItem from './cartListItem'

export default {
  name: 'CartList',
  props: {
    cartlist: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    CartListItem
  }
}
</script>

<style scoped>

</style>