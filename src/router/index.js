import Vue from 'vue';
import VueRouter from 'vue-router';

// 安装VueRouter
Vue.use(VueRouter);

const Home = () => import('views/home/Home.vue')
const Category = () => import('views/category/Category.vue')
const Cart = () => import('views/cart/Cart.vue')
const Profile = () => import('views/profile/Profile.vue')
const Detail = () => import('views/details/Detail.vue')

// 创建路由对象
const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail/:id',
    component: Detail
  }
];
const router = new VueRouter({
  routes,
  mode: 'history'
})

// 导出router
export default router