<template>
  <div class="home">
    <nav-bar/>
    <home-swiper :swiperImages="swiperImages"/>
    <special-pro/>
    <home-train-data :trainData="trainData" v-if="trainData && trainData.length!==0" :trainTable="tableData"/>
    <home-doing :itemDo="ItemDo"/>
    <home-train-project :floor="item" :floorID="item.floorID" v-for="item in floor" :key="item.floorID"/>
    <div class="leiji"><img src="@/assets/images/home/leiji.png" alt=""></div>
    <home-honor/>
    <course-advantage/>
    <home-footer/>
    <footer-bar/>
  </div>
</template>

<script>
  //引入请求的数据
  import {getPictureRotation,getTrainData,getTrainTable ,getItemDo,getFloorList} from "@/network/home";
  
// 引入自定义组件
  import NavBar from "../../components/content/navbar/NavBar";
  import HomeSwiper from "./homeComps/HomeSwiper";
  import SpecialPro from "./homeComps/SpecialPro";
  import HomeTrainData from "./homeComps/HomeTrainData";
  import HomeDoing from "./homeComps/HomeDoing";
  import HomeTrainProject from "./homeComps/HomeTrainProject";
  import HomeHonor from "./homeComps/HomeHonor";
  import CourseAdvantage from "./homeComps/CourseAdvantage";
  import HomeFooter from "./homeComps/HomeFooter";
  import FooterBar from "../../components/content/footer/FooterBar";
  
  export default {
    name: "Home",
    components:{
      NavBar,
      HomeSwiper,
      SpecialPro,
      HomeTrainData,
      HomeDoing,
      HomeTrainProject,
      HomeHonor,
      CourseAdvantage,
      HomeFooter,
      FooterBar
    },
    created(){
      this._getPictureRotation()
      this._getTrainData()
      this._getTrainTable()
      this._getItemDo(19)
      this._getFloorList()
    },
    mounted(){
    },
    data() {
      return {
        activeIndex: '0',
        swiperImages:[],
        trainData:{},
        tableData:{},
        ItemDo:[],
        floor:[],
        ipt: '课程、班级'
      };
    },
    methods:{
      
      /**
       * 网络相关方法
       */
      //请求轮播图图片
      _getPictureRotation(){
        getPictureRotation().then(res=>{
          this.swiperImages = res.data.data;
         })
      },
      //请求培训地图数据
      _getTrainData() {
        getTrainData().then(res=>{
          this.trainData = res.data
        })
      },
      //请求培训表格数据
      _getTrainTable(){
        getTrainTable().then(res=>{
          this.tableData =res.data
        })
      },
      //请求正在进行的项目
      _getItemDo(viewPageID){
        getItemDo().then(res=>{
          this.ItemDo = res.data.data.rows
        })
      },
      //请求培训栏目floorList的项目
      _getFloorList() {
        getFloorList().then(res=>{
          this.floor = res.data.data
        })
      },
      
      
      /**
       * 事件相关方法
       */
     
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      handleCommand(command) {
        this.$message('click on item ' + command);
      }
    }
  }
</script>

<style scoped>
.leiji {
  background-color: #fff;
  width: 100%;
  padding: 30px 0;
}
</style>