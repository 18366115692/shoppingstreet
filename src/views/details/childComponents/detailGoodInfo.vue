<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="detail-good-info">
    <div class="info-title">
      <div class="start">
        <div></div>
      </div>
      <div class="desc">{{ detailInfo.desc }}</div>
      <div class="end"><div></div></div>
    </div>
    <div class="info-content" v-for="obj of detailInfo.detailImage" :key="obj.key">
      <div class="info-key">
        {{ obj.key }}
      </div>
      <div class="info-list" v-for="(item, index) in obj.list" :key="index">
        <img :src="item" @load="imgLoad">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGoodInfo',
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imgLoad() {
      this.$emit('imageLoad')
    }
  }
}
</script>

<style scoped>

  .detail-good-info {
    padding: .4rem 0;
    border-bottom: .1rem solid rgba(0, 0, 0, .1);
  }

  .info-title {
    width: 100%;
    position: relative;
    padding: 0 .2rem;
  }

  .start,
  .end {
    width: 2rem;
    border-bottom: .02rem solid rgba(0, 0, 0, .5);
  }

  .end {
    position: absolute;
    right: .2rem;
  }

  .start div {
    width: .1rem;
    height: .1rem;
    background-color: #000;  
  }

  .end div {
    width: .1rem;
    height: .1rem;
    background-color: #000;
    margin-left: 1.9rem;
  }

  .desc {
    padding: .4rem 0;
    font-size: .32rem;
  }

  .info-content {
    margin-top: .2rem;
  }

  .info-key {
    padding: .16rem;
    font-size: .4rem;
  }

  .info-list {
    margin-bottom: .08rem;
  }

  .info-list img {
    width: 100%;
    
  }
</style>