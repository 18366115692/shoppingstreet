import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toast from 'components/common/toast'

import VueLazyLoad from 'vue-lazyload'

// 引入fastclick插件
import FastClick from 'fastclick'

// 引入字体图标
import './assets/css/iconfont.css'
// import { request } from './network/request'

FastClick.attach(document.body);

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

Vue.use(Toast)

Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  error: '',
  loading: require('./assets/image/loading.gif'),
  attempt: 1
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})

// request({
//   url: '/home/multidata',
// }).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err)
// })
