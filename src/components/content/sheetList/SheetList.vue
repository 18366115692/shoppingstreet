<template>
  <div class="my-list">
    <sheet-list-item v-for="item in showData" :data="item"/>
  </div>
</template>

<script>
import SheetListItem from './SheetListItem'

export default {
  name: 'SheetList',
  props: {
    showData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    SheetListItem
  }
}
</script>

<style scoped>
  
</style>