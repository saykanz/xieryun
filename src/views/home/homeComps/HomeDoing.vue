<template>
  <div class="home-doing w clearfix">
    <div class="do-head"><i class="left"></i>正在进行
      <div class="more">更多<i class="el-icon-arrow-right"></i></div>
    </div>
    <div class="carbon" v-if="Object.keys(itemDo).length!==0">
      <img :src="itemDo[0].previewImgUrl" alt="">
      <div class="title">{{itemDo[0].productName}}</div>
      <div class="buy"><i class="iconfont icon-huo"></i>{{itemDo[0].buyCount}}人已购买</div>
      <div>
        <span class="teacher">主讲人：西尔</span>
        <span class="price">￥{{itemDo[0].basicPrice}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeDoing",
    props:{
      itemDo:{
        type:Array,
        default(){
          return []
        }
      }
    },
  }
</script>

<style scoped>
  .home-doing {
    padding: 15px 0 30px;
    background-color: #fff;
    margin-top: 20px;
  }
.do-head {
 font-size: 20px;
  color: black;
}
.do-head .left {
   display: inline-block;
   margin-right: 20px;
    width: 10px;
    height: 10px;
    background-color: #4aa1f0;
  }
  .more {
    float: right;
  }
  .carbon {
    width: 208px;
    padding-left: 20px;
  
  }
  .carbon img {
    margin-top: 20px;
    width: 200px;
    height: 120px;
    border-radius: 10px;
  }
  .title {
    font-size: 14px;
    color: black;
    margin-bottom: 20px;
  }
  .buy,.teacher{
    padding: 20px 0 10px;
    font-size: 8px;
    color: #595959;
  }
  .buy i{
    color: #ff6253;
  }
  .teacher{
    font-size: 10px;
  }
  .price {
    color: #ff4400;
    font-size: 20px;
    float: right;
  }
  
</style>