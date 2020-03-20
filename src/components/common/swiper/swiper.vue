<template>
  <div class="swiperContainer">
    <!-- 封装轮播图的移动事件，移动端需要针对touchStart、touchMove、touchEnd三个状态进行封装 -->
    <div class="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <slot></slot>
    </div>
    <slot name="indicator"></slot>
    <!-- 添加显示点 -->
    <div class="indicator">
      <!-- 通过条件判断是否显示此内容 -->
      <slot name="indicator" v-if="showIndicator && slideCount > 1">
        <div 
          v-for="(item, index) in slideCount" 
          :key="index" 
          class="list-item" 
          :class="{active: index === currentIndex - 1}"></div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Swiper',
  props: {
    interval: {  // 动画移动间隔时间
      type: Number,
      default: 3000
    },
    animDuration: {  // 动画延迟执行时间
      type: Number,
      default: 300
    }, 
    moveRatio: {  // 移动图标的比例，超过25%，就可以直接进入下一张动画，否则返回当前页
      type: Number,
      default: 0.25
    },
    showIndicator: {  // 是否显示轮播图下方的小点点
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      slideCount: 0, // 轮播列表的个数
      totalWidth: 0, // 轮播图的宽度
      swiperStyle: {}, // 轮播图的样式
      currentIndex: 1, // 轮播图当前的下标，因为后面需要创建元素，防止最后一张和第一张交换比较突兀，所以下标从1开始展示
      scrolling: false // 是否正在滚动
    }
  },
  mounted() {
    setTimeout(() => {
      // 1. 操作 DOM 后，在前后添加slide
      this.handleDom();

      // 2. 开启定时器
      this.startTimer();
    }, 200)
  },
  methods: {
    /**
     * 定时器操作
     */
    startTimer() {
      this.playTimer = window.setInterval(() => {
        this.currentIndex ++; // 增加下标值
        this.scrollContent(-this.currentIndex * this.totalWidth); // 移动图片位置
      }, this.interval)
    },
    stopTimer() {
      window.clearInterval(this.playTimer);
    },
    /**
     * 滚动的位置
     */
    scrollContent(currentPosition) {
      // 1. 设置正在滚动
      this.scrolling = true;
      // 2. 开始滚动动画
      this.swiperStyle.transition = 'transform ' + this.animDuration + 'ms';
      this.setTransform(currentPosition)
      // 3. 判断滚动的位置
      this.checkPosition();
      // 4. 滚动完成
      this.scrolling = false;
    },
    /**
     * 轮播图移动距离
     */
    checkPosition() {
      window.setTimeout(() => {
        // 1. 校验正确的位置
        this.swiperStyle.transition = '0ms';
        if (this.currentIndex >= this.slideCount + 1) { // 当下标大于等于数据个数+1时，将下标重置为1
          this.currentIndex = 1;
          this.setTransform(-this.currentIndex * this.totalWidth);
        } else if (this.currentIndex <= 0) {  // 当下标小于等于0时，将下标重置为数据个数
          this.currentIndex = this.slideCount;
          this.setTransform(-this.currentIndex * this.totalWidth);
        }
        // 2. 结束后回调
        this.$emit('transitionEnd', this.currentIndex - 1);
      }, this.animDuration)
    },
    /**
     * 设置滚动的位置
     */
    setTransform(position) {
      // 设置3d动画
      this.swiperStyle.transform = `translate3d(${ position }px, 0, 0)`;
      this.swiperStyle['-webkit-transform'] = `translate3d(${ position }px, 0, 0)`;
      this.swiperStyle['-ms-transform'] = `translate3d(${ position }px, 0, 0)`;
    },
    /**
     * 操作DOM，在DOM前后添加slide
     */
    handleDom() {
      // 1. 获取需要操作的元素
      let swiperEl = document.getElementsByClassName('swiper')[0];
      let slideEls = swiperEl.getElementsByClassName('slide');
      // 2. 保存个数
      this.slideCount = slideEls.length;
      // 3. 如果大于1个，那么在前后分别添加一个slide
      if (this.slideCount >1) {
        let cloneFirst = slideEls[0].cloneNode(true); // 克隆第一张轮播图
        let cloneLast = slideEls[this.slideCount - 1].cloneNode(true); // 克隆最后一张轮播图
        swiperEl.insertBefore(cloneLast, slideEls[0]);  // 在第一张前面加上克隆的第一张轮播图
        swiperEl.appendChild(cloneFirst); // 在最后一张后面加上克隆的最后一张轮播图
        this.totalWidth = swiperEl.offsetWidth; // 将每个轮播图的宽度赋值给全局的totalWidth
        this.swiperStyle = swiperEl.style;  // 取出swiperEl身上所有的style属性
      }
      // 4. 让swiper元素，显示第一个（目前是显示前面添加的最后一个元素）
      this.setTransform(-this.totalWidth);
    },
    /**
     * 拖动事件的处理
     */
    touchStart(e) {
      // 1. 如果正在滚动，不可以拖动
      if (this.scrolling) return;
      // 2. 清除定时器
      this.stopTimer();
      // 3. 保存开始滚动的位置
      this.startX = e.touches[0].pageX;
    },
    touchMove(e) {
      // 1. 计算用户拖动的距离
      this.currentX = e.touches[0].pageX;
      this.distance = this.currentX - this.startX;
      let currentPosition = -this.currentIndex * this.totalWidth;
      let moveDistance = this.distance + currentPosition;
      // 2. 设置当前位置
      this.setTransform(moveDistance);
    },
    touchEnd(e) {
      // 1. 获取移动的距离，取绝对值
      let currentMove = Math.abs(this.distance);
      // 2. 判断最终距离
      if (this.distance == 0) {
        return
      } else if (this.distance > 0 && currentMove > this.totalWidth * this.moveRatio) {
        this.currentIndex --;
      } else if (this.distance < 0 && currentMove > this.totalWidth * this.moveRatio) {
        this.currentIndex ++;
      }
      // 3. 移动到正确的位置
      this.scrollContent(-this.currentIndex * this.totalWidth);
      // 4. 移动完成之后重启定时器
      this.startTimer();
    },
    /**
     * 控制左右按钮
     */
    previous() {
      this.changeItem(-1);
    },
    next() {
      this.changeItem(1);
    },
    changeItem(num) {
      // 1. 移除定时器
      this.stopTimer();
      // 2. 修改index和位置
      this.currentIndex += num;
      this.scrollContent(-this.currentIndex * this.totalWidth);
      // 3. 添加定时器
      this.startTimer();
    }
  }
}
</script>

<style scoped>
  .swiperContainer {
    overflow: hidden;
    position: relative;
  }
  .swiper {
    display: flex;
  }
  .indicator {
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    bottom: .16rem;
  }
  .list-item {
    box-sizing: border-box;
    width: .16rem;
    height: .16rem;
    border-radius: .08rem;
    background-color: #fff;
    line-height: .16rem;
    text-align: center;
    font-size: .24rem;
    margin: 0 .1rem;
  }
  .list-item.active {
    background-color: rgba(212, 62, 46, 1)
  }
</style>