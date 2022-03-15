<template>
  <div class="hornor clearfix">
    <div class="hornorHead">
      <img src="@/assets/images/home/tree.png" alt="">
      <span>西尔荣誉</span>
      <i class="iconfont icon-zhengfangxing"></i>
    </div>
    <div class="hornorSwiper clearfix">
      <el-carousel trigger="click" height="520px" :autoplay="false">
        <el-carousel-item v-for="(item,index) in swiperImg" :key="index">
          <h3 class="small"><img :src="item" alt=""></h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeHonor",
    data(){
      return {
        swiperImg:['https://www.cei.net.cn/static/home_zhengshu2.6c9d769f.jpg',
        'https://www.cei.net.cn/static/home_zhengshu1.6f426679.jpg',
        'https://www.cei.net.cn/static/home_zhengshu3.ae3cd6d3.jpg']
      }
    }
  }
</script>

<style scoped>
  .hornor {
    padding-top: 30px;
    background-color: #fff;
  }
.hornorHead {
  height: 40px;
  line-height: 40px;
  width: 400px;
  margin: 30px auto 10px;
}
  .hornorHead img {
    float: left;
    margin-right: 15px;
    vertical-align: bottom;
  }
.hornorHead span{
  float: left;
  font-size: 40px;
  color: #565656;
}
.icon-zhengfangxing {
  font-size: 10px;
  color: #4aa1f0;
  line-height: 70px;
  margin-left: 15px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {

}

.el-carousel__item:nth-child(2n+1) {

}
  .hornorSwiper {
   padding: 20px 30px;
    width: 1200px;
    background-color: #fff;
    margin: auto;
  }
  .hornorSwiper>>>img {
    width: 100%;
    margin: 20px 0;
    height: 500px;
  }
  .hornorSwiper{
    background-color: #fff;
  }
</style>