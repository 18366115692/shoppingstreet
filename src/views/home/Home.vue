<template>
  <div class="home-container">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      :titles="titles" 
      @changeItem="handleChangeItem" 
      ref="topFixed"
      v-show="isFixed"
      :class="{topFixed: isFixed}"
    />
    <scroll
      class="scroll-content" 
      ref="scroll" 
      :probe-type="3" 
      :pull-up-load="true"
      @scrollPosition="contentScroll"
      @pullUpLoad="loadMore"
    >
      <home-swiper :banners="banners" />
      <home-recommend :recommends="recommends"/>
      <tab-control
        :titles="titles" 
        @changeItem="handleChangeItem" 
        ref="tabContorl"
      />
      <home-goods :goods="homeGoods"/>
    </scroll>
    <back-top @click.native="handleBackTop" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/navbar';
import TabControl from 'components/content/tabControl/tabControl';
import HomeGoods from 'components/content/homeGoods/homeGoods';
import Scroll from 'components/common/scroll/Scroll';
// import BackTop from 'components/content/backTop/backTop';

import HomeSwiper from './homeComponents/homeSwiper';
import HomeRecommend from './homeComponents/homeRecommend';

import { getHomeMultiData, getHomeGoodsData } from 'network/home';
import { debounce } from 'common/tool';
import { backTopMixin } from 'common/mixin';

export default {
  name: 'Home',
  components: {
    NavBar,
    TabControl,
    HomeSwiper,
    HomeRecommend,
    HomeGoods,
    Scroll,
    // BackTop
  },
  mixins: [backTopMixin],
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ['流行', '新款', '精选'],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      defaultType: 'pop',
      // isShowBackTop: false,
      tabOffsetTop: 0,
      isFixed: false,
      saveY: 0
    }
  },
  created() {
    // 1. 请求多个数据
    this.getHomeMultiData();

    // 2. 请求商品数据
    this.getHomeGoodsData('pop');
    this.getHomeGoodsData('new');
    this.getHomeGoodsData('sell');
  },
  mounted() {
    // 1. 监听图片加载完成
    this.itemImageLoad()

    // 2. 监听滚动高度
    this.tabOffsetTop = this.$refs.tabContorl.$el.offsetTop
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 1);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.saveY = this.$refs.scroll.scroll.y;
  },
  methods: {
    /**
     * 网络请求相关的方法
     */
    getHomeMultiData() {
      getHomeMultiData().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoodsData(type) {
      const page = this.goods[type].page + 1
      getHomeGoodsData(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp()
      })
    },
    loadMore() {
      this.getHomeGoodsData(this.defaultType)
    },
    itemImageLoad() {
      const refresh = debounce(this.$refs.scroll.refresh, 200)
      this.$bus.$on('itemImageLoad', () => {
        refresh();
      })
    },

    /**
     * 事件监听相关的方法
     */
    handleChangeItem(index) {
      switch (index) {
        case 0:
          this.defaultType = 'pop'
          break
        case 1:
          this.defaultType = 'new'
          break
        case 2:
          this.defaultType = 'sell'
          break
      }
      this.$refs.topFixed.currentIndex = this.$refs.tabContorl.currentIndex = index
    },
    // handleBackTop() {
    //   this.$refs.scroll.scrollTo(0, 0)
    // },
    contentScroll(position) {
      // 1. 判断返回顶部按钮是否显示
      this.listenerShowBackTop(position)

      // 2. 判断tabControl是否吸顶
      this.isFixed = (-position.y) > this.tabOffsetTop
    },

  },
  computed: {
    homeGoods() {
      return this.goods[this.defaultType].list;
    }
  }
}
</script>

<style scoped>
.home-container {
  padding-bottom: 1rem;
  /* position: relative; */
}

.home-nav {
  background: var(--color-tint);
  color: #fff;
}

.topFixed {
  position: fixed;
  top: .88rem;
  left: 0;
  right: 0;
  z-index: 10;
}

.scroll-content {
  position: absolute;
  top: .88rem;
  bottom: 1rem;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>