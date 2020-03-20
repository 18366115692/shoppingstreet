import BackTop from 'components/content/backTop/backTop';

export const backTopMixin = {
  data() {
    return {
      isShowBackTop: false
    }
  },
  components: {
    BackTop
  },
  methods: {
    handleBackTop() {
      this.$refs.scroll.scrollTo(0, 0)
    },
    listenerShowBackTop (position) {
      this.isShowBackTop = (-position.y) > 1000
    }
  }
}