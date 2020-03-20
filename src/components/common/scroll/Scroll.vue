<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
  name: 'Scroll',
  data() {
    return {
      scroll: null
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.BScroll();
    this.scrollPosition();
  },
  methods: {
    BScroll() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType
      });
      this.scroll.on('scroll', position => {
        this.$emit('scrollPosition', position)
      });
      this.scroll.on('pullingUp', () => {
        this.$emit('pullUpLoad')
      })
    },
    scrollPosition() {
      this.scroll.on('scroll', position => {
        this.$emit('scrollPosition', position);
      })
    },
    scrollTo(x, y, time=300) {
      // 容错处理，先判断是否有this.scroll
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    }
  }
}
</script>