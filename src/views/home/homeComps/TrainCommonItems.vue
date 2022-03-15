<template>
  <div>
    <div class="reco-online">
      <div :class="[{online:i.objectType===-1},{remote :i.objectType !==-1 } ]"
           v-for="(i,index) in
      product" :key="index">
          <div class="content">
            <div :class="[{onlineImg:i.objectType===-1 },{remoteImg:i.objectType !==-1}]">
              <img :src="i.thumbnailUrl" alt="">
            </div>
            <div class="productName">{{i.productName}}</div>
            <div class="buy">
              <i class="iconfont icon-huo"></i>
              <span>{{i.buyCount}}人已购买</span>
            </div>
            <div class="teacher">
              <span>主讲人{{i.teacherName}}</span>
              <span class="price">￥{{i.basicPrice}}</span>
            </div>
            <div class="productType">
              {{i.objectType === -1 ? '在线' : (i.objectType===2 ? '面授' : '远程')}}
            </div>
          </div>
          </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TrainCommonItems",
    data(){
      return {
        productOther:this.product
    }
    },
    props:{
      product:{
        type:Array,
        default() {
          return []
        }
      }
    },
    methods:{
    
    }
  }
</script>

<style scoped>
  .reco-online{
    padding-left: 30px;
    padding-right: 30px;
    width: 586px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    background-color: #fff;
  }
  .reco-online .content {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  .online{
    width: 28%;
    height: 230px;
    margin: 22px 0;
  }
  .online,.remote {
    position: relative;
    font-size: 12px;
    color: #595959;
  }
  .onlineImg {
  }
  .onlineImg img{
    width: 110%;
    height: 100%;
    border-radius: 10px;
  }
  .productName {
    height: 40px;
    margin: 5px 0;
    line-height: 20px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp:2;
    text-overflow: ellipsis;
    
    display: -moz-box;
    -moz-line-clamp:2;
    -moz-box-orient: vertical;
    
    overflow-wrap: break-word;
    white-space: normal;
    overflow: hidden;
    color: black;
    font-size: 14px;
  }
  .buy {
    margin: 8px 0;
  }
  .buy .iconfont{
    color: #ff4452;
    font-size: 12px;
  }
  .teacher {
    font-size: 12px;
  }
  .price {
    float: right;
    color: #ff4400;
    font-size: 14px;
  }
  .remote {
    width: 252px;
    height: 254px;
    padding-bottom: 21px;
  }
  .remoteImg img{
    width: 110%;
    height: 100%;
    border-radius: 10px;
  }
  .productType {
    position: absolute;
    top: 5px;
    right: 5px;
    padding: 5px 8px;
    font-size: 14px;
    color: #ffffff;
    border-radius: 3px;
    background-color: rgba(0,0,0,.3);
  }
</style>