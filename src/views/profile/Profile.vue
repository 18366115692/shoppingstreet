<template>
  <div class="profile-container">
    <nav-bar class="profile-nav">
      <div slot="center">我的</div>
    </nav-bar>
    <login/>
    <my-info/>
    <sheet-list class="sheet-list" :showData="list"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/navbar';
import Login from './profileComponents/login';
import MyInfo from './profileComponents/MyInfo';

import SheetList from 'components/content/sheetList/SheetList'

export default {
  name: 'Profile',
  components: {
    NavBar,
    Login,
    MyInfo,
    SheetList
  },
  data() {
    return {
      list: [{
        logo: 'icon-xiaoxi',
        title: '我的消息'
      },{
        logo: 'icon-jifen',
        title: '积分商城'
      },{
        logo: 'icon-huiyuan',
        title: '会员卡'
      },]
    }
  }
}
</script>

<style scoped>
  .profile-nav {
    background: var(--color-tint);
    color: #fff;
  }

  .sheet-list {
    border-bottom: .2rem solid rgba(0, 0, 0, .1);
  }
</style>