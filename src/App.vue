<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <home></home>
    
  </div>
</template>

<script>

import Home from '@/views/home/Home'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
@import "assets/css/base.css";
@import "assets/css/iconfont.css";

</style>
