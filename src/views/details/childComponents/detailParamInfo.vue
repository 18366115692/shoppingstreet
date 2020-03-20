<template>
  <div class="detail-param-info" v-if="Object.keys(paramInfo).length !== 0">
    <table v-for="(table, index) in paramInfo.sizes" :key="index" class="info-size">
      <tr v-for="(tr, index) in table" :key="index">
        <td v-for="(td, index) in tr" :key="index">
          {{ td }}
        </td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(info, index) in paramInfo.infos" :key="index">
        <td class="key">{{ info.key }}</td>
        <td class="value">{{ info.value }}</td>
      </tr>
    </table>
    <div class="info-image" v-if="paramInfo.images.length !== 0">
      <img v-for="(item, index) in paramInfo.images" :key="index" :src="item">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailParamInfo',
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .detail-param-info {
    padding: .4rem .3rem;
    font-size: .28rem;
    border-bottom: .1rem solid #f2f5f8;
  }

  .detail-param-info table {
    width: 100%;
    border-collapse: collapse;
  }

  .detail-param-info table tr {
    height: .84rem;
  }

  .detail-param-info table tr td {
    border-bottom: .02rem solid rgba(100, 100, 100, .1);
  }

  .info-param {
    border-top: .02rem solid rgba(0, 0, 0, .1)
  }

  .key {
    /* 当value的数据量比较大的时候，会挤到key，所以给个固定宽度 */
    width: 1.9rem;
  }

  .value {
    color: #eb4868;
  }

  .info-image img {
    width: 100%;
  }
</style>