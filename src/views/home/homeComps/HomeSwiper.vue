<template>
  <div class="home-swiper clearfix">
    <el-carousel trigger="click" indicator-position="none" arrow="always" height="460px" ref="carousel">
      <el-carousel-item  v-for="item in swiperImages" :key="item.rotationID">
        <h3 class="small"><img :src="item.imageUrl" alt="轮播图"></h3>
      </el-carousel-item>
    </el-carousel>
    <ul class="swiper-indicator">
      <li v-for="(item,index) in swiperImages" :key="item.channelID" @click="indicatorClick(index)"
     :style="{opacity: currentIndex===index ? 1 : 0.48 }" >
        <div class="swiper-indicator-item">{{item.channelName}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "HomeSwiper",
    data(){
     return {
       currentIndex:0
     }
    },
    props: {
      swiperImages: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      indicatorClick(index) {
        this.$refs.carousel.setActiveItem(index)
        this.currentIndex = index
        console.log(this.currentIndex);
        console.log(index);
      }
    }
  }
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 20px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  .el-carousel__item img{
    width: 100%;
    height: 460px;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .home-swiper {
    position: relative;
  }
  .swiper-indicator {
    position: absolute;
    left: 50%;
    bottom: 0;
    background-color: rgb(0,0,0);
    opacity: 0.48;
    transform: translate(-50%,0);
    z-index: 9;
  }
  .swiper-indicator li {
    float: left;
    padding: 10px;
  }
  .swiper-indicator .swiper-indicator-item {
    color: white;
    padding: 10px;
    transition: opacity .3s;
    transform: translateZ(0);
    border-right: 2px solid #fff;
    cursor:pointer;
  }
  .swiper-indicator li:last-child .swiper-indicator-item{
    border-right: none;
  }
</style>