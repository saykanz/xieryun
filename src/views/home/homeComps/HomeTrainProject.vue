<template>
  <div class="trainProject w clearfix">
    <!--    头部-->
    <div class="projectHead" :style="{display:floorID===1?'block':'none'}">
      <img alt="" src="@/assets/images/home/tree.png">
      <span>培训专栏</span>
      <i class="iconfont icon-zhengfangxing"></i>
    </div>
    
    <!--    主体部分-->
    <div class="projectMain">
      <div class="left-imgs">
        <div class="demo-image__lazy" v-for="(item,index) in floor.leftAdvertisementList" :key="index">
          <el-image :src="item.imageUrl" class="adv-left" lazy>
          </el-image>
        </div>
      </div>
      
      
      <!--    中间部分-->
      <div class="mainItem clearfix">
        
        <!--        中间左侧部分-->
        <div class="itemName">
          <i class="iconfont icon-zhengfangxing"></i>
          <span>{{floor.floorName}}</span>
        </div>
        <!--        中间tab部分-->
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="推荐" name="first">
            <train-common-items :product="productCourse"/>
            <train-common-items :product="productClass"/>
          </el-tab-pane>
          <el-tab-pane label="在线课程" name="second">
            <train-common-items :product="productOnline"/>
          </el-tab-pane>
          <el-tab-pane label="远程培训班" name="third">
            <train-common-items :product="productRemote"/>
          </el-tab-pane>
          <el-tab-pane label="面授培训班" name="forth">
            <train-common-items :product="productFace"/>
          </el-tab-pane>
        </el-tabs>
        
        <!--      中间右侧更多部分-->
        <div class="more">
          <span>更多</span>
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
  
      <!--            右侧部分-->
      <div class="projectAbout">
        <!--        热门资讯-->
        <div class="hotMessage">
          <div class="message">
            <i class="iconfont icon-zhengfangxing"></i>
            <span class="title">热门资讯</span>
            <div class="more">
              <span>更多</span>
              <i class="el-icon-arrow-right"></i>
            </div>
          </div>
          <div class="messageContent" v-for="item in floor.informationList" :key="item.informationID">
            <div class="pageName">{{item.pageName}}</div>
            <div class="updateTime">{{item.updateTime}}</div>
          </div>
        </div>
        

        <div class="hotAnswer">
          <el-tabs v-model="activeName2" @tab-click="handleClick">
            <!--        热门回答-->
            <el-tab-pane label="热门回答" name="one">
              <div class="askTitle">{{floor.askList[0].title}}</div>
              <div class="answer">
                <div> <img :src="floor.askList[0].headUrl" alt=""></div>
                <span>{{floor.askList[0].askNickName}}</span>
              </div>
              <div class="answerContent" v-html="floor.askList[0].answerText"></div>
              <div class="check">查看</div>
            </el-tab-pane>
            
            
<!--            免费资料-->
            <el-tab-pane label="免费资料" name="two">
              <div class="freeBook">
                <div v-for="item in floor.lawList" :key="item.lawID">
                   <div class="lawName">{{item.lawName}}</div>
                   <div class="publishTime">发布时间：{{item.publishTime}}</div>
                   <div class="doTime">实施时间：{{item.implementationTime}}</div>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
        <div class="hotMore">更多<i class="el-icon-arrow-right"></i></div>
      </div>
      
<!--      底部部分-->
       <div class="bottom">
        <div class="bottom-img" v-for="item in floor.downAdvertisementList" :key="item.advertisementID">
          <div class="items"><img :src="item.imageUrl" alt=""></div>
        </div>
       </div>
    </div>
  </div>
</template>

<script>
  import TrainCommonItems from "./TrainCommonItems";
  import {getFloorProductRecomList,getFloorProductOnline,getFloorProductRemote,getFloorProductFace} from "../../../network/home";

  export default {
    name: "HomeTrainProject",
    inheritAttrs: false,
    components: {
      TrainCommonItems
    },
    props: ['floor','floorID'],
    data() {
      return {
        activeName: 'first',
        activeName2: 'one',
        productClass:[],
        productCourse:[],
        productOnline:[],
        productRemote:[],
        productFace:[]
      };
    },
    created(){
     this. _getFloorProductRecomList(this.floorID);
     this._getFloorProductOnline(this.floorID);
      this._getFloorProductRemote(this.floorID)
     this._getFloorProductFace(this.floorID)
    },
    methods: {
      /**
      网络请求方法
       */
      //推荐
      _getFloorProductRecomList(floorID){
        getFloorProductRecomList(floorID).then(res=>{
          this.productClass = res.data.data.classList
          this.productCourse = res.data.data.courseList
        })
      },
      //在线
      _getFloorProductOnline(floorID) {
        getFloorProductOnline(floorID).then(res=>{
          this.productOnline = res.data.data.rows
        })
      },
      //远程
      _getFloorProductRemote(floorID) {
        getFloorProductRemote(floorID).then(res=>{
          this.productRemote = res.data.data.rows
        })
      },
      //面授
      _getFloorProductFace(floorID) {
        getFloorProductFace(floorID).then(res=>{
          this.productFace = res.data.data.rows
        })
      },
      /**
       * 事件请求方法
       * @param tab
       */
      handleClick(tab) {
        // console.log(tab);
      },
    }
  }
</script>

<style scoped>
  .trainProject {
  }
  .projectHead {
    color: #565656;
    width: 300px;
    height: 40px;
    margin: 40px auto;
    line-height: 40px;
  }
  .projectHead .icon-zhengfangxing {
    font-size: 10px;
    color: #4aa1f0;
    line-height: 70px;
    margin-left: 15px
  }
  .projectHead img {
    float: left;
    margin-right: 15px;
    vertical-align: center;
  }
  .projectHead span {
    float: left;
    font-size: 40px;
    color: #565656;
  }
  .left-imgs {
    float: left;
    margin-right: 25px;
  }
  .adv-left {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 30px 0 10px 0;
    width: 210px;
    height: 288px;
    border-radius: 10px;
  }
  .itemName {
    position: absolute;
    top: 11px;
    left: 15px;
    font-size: 16px;
  }
  .itemName .iconfont {
    font-size: 12px;
    color: #4aa1f0;
  }
  .itemName span {
    color: black;
    margin-left: 15px;
  }
  .mainItem {
    position: relative;
    margin-top: 28px;
    float: left;
    width: 660px;
    background-color: #fff;
    border-radius: 10px;
  }
  .mainItem  .el-tabs >>> .el-tabs__header {
    display: flex;
    justify-content: space-around;
    margin: 4px 119px 15px;
  }
  .el-tabs >>> .el-tabs__nav-wrap::after {
    background-color: #ffffff;
  }
  .mainItem .more {
    position: absolute;
    padding: 0 5px;
    top: 15px;
    right: 10px;
    cursor: pointer;
    color: #595959;
  }
  .projectAbout {
    float: left;
    width: 260px;
    height: 583px;
    margin: 28px -4px;
    padding: 12px 24px;
    background-color: #fff;
    
  }
  .hotMessage{
    padding: 5px;
    background-color: #fff;
    width: 260px;
    height: 280px;
    overflow: hidden;
    border-bottom: 1px solid #dacfcf;
    color: #595959;
    
  }
  .hotMessage .iconfont {
    font-size: 12px;
    color: #4aa1f0;
  }
  .hotMessage .title {
    display: inline-block;
    margin-left: 8px;
    color: black;
    font-size: 19px;
  }
  .hotMessage .more {
    float: right;
    padding-top: 10px;
    color: #595959;
  }
  .messageContent {
    margin-top: 14px;
    line-height: 24px;
    font-size: 17px;
  }
  .hotAnswer {
    width: 260px;
    height: 230px;
    overflow: hidden;
    color: #595959;
  }
  .askTitle {
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
  }
  .answer {
    vertical-align: middle;
    color: #595959;
  }
  .answer>div {
    display: inline-block;
  }
  .answer img{
    width: 45px;
    height: 45px;
  }
  .answerContent {
  
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp:4;
    text-overflow: ellipsis;
  
    display: -moz-box;
    -moz-line-clamp:4;
    -moz-box-orient: vertical;
  
    overflow-wrap: break-word;
    white-space: normal;
    overflow: hidden;
  }
  .check {
    float: right;
    color: #71a8ef;
  }
  .hotMore {
    width: 50px;
    height: 30px;
    margin: 10px auto;
    text-align: center;
    line-height: 30px;
    border-radius: 15px;
    padding: 0 13px;
    border: 2px solid #ccc;
    color: #595959;
  }
  .freeBook {
    overflow: hidden;
    line-height: 20px;
    color: #595959;
  }
  .lawName {
    font-size: 16px;
    color: #5d9cec;
    margin: 7px 0;
  }
  .bottom {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
</style>