<template>
  <div class="detail-container">
    <detail-nav-bar :titles="titles" @titleClick="titleClick" ref="nav"/>
    <scroll class="detail-scroll" ref="scroll" :probe-type="3" @scrollPosition="contentScroll">
      <detail-swiper ref="swiper" :topImages="topImages"/>
      <detail-top :goods="goodsInfo"/>
      <detail-shop-info :shop="shop"/>
      <detail-good-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
      <detail-param-info ref="param" :param-info="paramInfo"/>
      <detail-comment ref="comment" :comment-info="commentInfo"/>
      <home-goods ref="recommend" :goods="recommends"/>
    </scroll>
    <detail-bottom-bar @addCar="addToCar"/>
    <back-top @click.native="handleBackTop" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import { getDetailData, GoodsInfo, Shop, GoodsParam, getRecommend } from 'network/detail'
import { debounce } from 'common/tool';
import { backTopMixin } from 'common/mixin';
import { mapActions } from 'vuex';

import RefreshScroll from 'components/common/scroll/RefreshScroll'
import Scroll from 'components/common/scroll/Scroll'
import HomeGoods from 'components/content/homeGoods/homeGoods'

import DetailNavBar from './childComponents/detailNavBar'
import DetailSwiper from './childComponents/detailSwiper'
import DetailTop from './childComponents/detailTop'
import DetailShopInfo from './childComponents/detailShopInfo'
import DetailGoodInfo from './childComponents/detailGoodInfo'
import DetailParamInfo from './childComponents/detailParamInfo'
import DetailComment from './childComponents/detailComment'
import DetailBottomBar from './childComponents/detailBottomBar'

export default {
  name: 'Detail',
  mixins: [backTopMixin],
  data() {
    return {
      id: null,
      titles: ['商品', '参数', '评论', '推荐'],
      topImages: [],
      goodsInfo: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      getSubTop: null,
      Y: [],
      currentIndex: 0,
    }
  },
  components: {
    Scroll,
    HomeGoods,
    DetailNavBar,
    DetailSwiper,
    DetailShopInfo,
    DetailGoodInfo,
    DetailTop,
    DetailParamInfo,
    DetailComment,
    DetailBottomBar
  },
  mounted() {
    this.id = this.$route.params.id
    this.getData(this.id);
    this.getRecommend();

    this.getSubTop = debounce(() => {
      this.Y = [];
      this.Y.push(this.$refs.swiper.$el.offsetTop);
      this.Y.push(this.$refs.param.$el.offsetTop);
      this.Y.push(this.$refs.comment.$el.offsetTop);
      this.Y.push(this.$refs.recommend.$el.offsetTop);
      this.Y.push(Number.MAX_VALUE)
    }, 200)
  },
  methods: {
    ...mapActions(['addCart']),
    getData(id) {
      getDetailData(id).then(res => {
        // console.log(res)
        // 1. 获取详情页所有数据
        this.topImages = res.result.itemInfo.topImages;
        const data = res.result;
        // 2. 抽离商品信息数据
        this.goodsInfo = new GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services);
        // 3. 抽离商家信息数据
        this.shop = new Shop(data.shopInfo);
        // 4. 抽离详情信息
        this.detailInfo = data.detailInfo;
        // 5. 抽离尺寸信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);
        // 6. 获取用户评论信息
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0]
        }
      })
    },
    getRecommend() {
      getRecommend().then(res => {
        this.recommends = res.data.list;
      })
    },
    imageLoad() {
      this.$refs.scroll.refresh()

      this.getSubTop()
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.Y[index], 500);
    },
    contentScroll(position) {
      const length = this.Y.length;
      const y = -position.y;
      // 此处遍历不使用es6语法，原因是es6遍历出来的k值是字符串类型，导致我们后面计算需要转化
      for (let k = 0; k < length - 1; k++) {
        if (this.currentIndex !== k && (y >= this.Y[k] && y < this.Y[k+1])) {
          this.currentIndex = k
          this.$refs.nav.currentIndex = k
        }
      }

      if (y < -120) {
        this.refresh_page();
      }

      this.listenerShowBackTop(position)
    },
    refresh_page() {
      this.$router.go(0)
    },
    addToCar() {
      const product = {}
      product.image = this.topImages[0];
      product.title = this.goodsInfo.title;
      product.desc = this.goodsInfo.desc;
      product.price = this.goodsInfo.realPrice;
      product.id = this.id

      // console.log(this.goodsInfo)
      // console.log(product)

      // 这个是直接调用vuex中的mutations的方法
      // this.$store.commit('addCart', product)

      this.addCart(product).then(res => {
        this.$toast.show(res, 2000)
      })

      // 这个是直接调用vuex中actions的方法
      // this.$store.dispatch('addCart', product).then(res => {
      //   console.log(this.$toast)
      // })

    }
  }
}
</script>

<style scoped>
  .detail-scroll {
    position: absolute;
    top: .88rem;
    bottom: 1rem;
    left: 0;
    right: 0;
    overflow: hidden;
  }

</style>