<template>
  <el-container>
    <el-header class="header w">
      <!--        logo-->
      <div class="logo" @click="logoClick"> <img src="@/assets/images/common/logo.png" alt="西尔云"></div>
      
      <!--        全部课程-->
      <el-dropdown v-if="Object.keys(navAllCourse).length !== 0" ref="allCourses">
        <el-button type="primary" class="all-course">
         全部课程<i class="el-icon-s-fold"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item  v-for="(item,index) in navAllCourse" :key="index" @mouseenter.native="apperanceCourse()">
             <div @mouseover="switchCourse(index)" >{{item.navigationName}}
               <i class="el-icon-arrow-right"></i></div>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <all-course :courses = "itemsCourse" class="courseItem" :style="{display:showCourse}"
                  @mouseleave.native="clearCourse()"
                  />
      
          
        
      <!--        首页 图书馆 优秀教师 热门资讯-->
      <el-menu :default-active="activeIndex"
               class="el-menu-demo index-nav"
               mode="horizontal"
               active-text-color="#4aa1f0"
               @select="handleSelect">
        <el-menu-item :index="(index+'')"
                      v-for="(item,index) in navTitles"
                      :key="index"
                      @click="navClick(index)"
                      path="navPath[index]"
        >{{item}}</el-menu-item>
      </el-menu>
      
<!--      42-->
      
      <!--        搜索框-->
      <div style="margin-top: 10px;" class="ipt-nav">
        <el-input placeholder="请输入内容" v-model="ipt" style="width: 200px;">
          <el-button slot="append" icon="iconfont icon-sousuo"></el-button>
        </el-input>
      </div>
      
      
      <!--        VIP畅学-->
      <div class="text-vip" @click="vipClick" path="/login">VIP畅学</div>
      
      <!--        下载app-->
      <div>
        <el-dropdown class="downapp-nav" ref="course">
                <span class="el-dropdown-link">
                  <i class="iconfont icon-shoujixiazai"></i>
                   下拉菜单
                 </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><img src="@/assets/images/home/download.png" alt=""></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      
      <!--        登录/注册-->
      <div>
        <el-link type="primary" class="login-nav" :underline="false" @click="loginClick" path="/login">登录/注册</el-link>
      </div>
      
      <!--        查询证书-->
      <div>
        <el-button type="primary" round @click="credentialsClick" path="/credentials">查询证书</el-button>
      </div>
    
    </el-header>
  </el-container>
</template>
<script>
  import AllCourse from "@/components/content/allCourse/AllCourse"
  
  // 请求导航栏全部课程数据
  import {getNavCourse} from "../../../network/home";

  export default {
    name: "NavBar",
    data() {
      return {
        navAllCourse:[],
        itemsCourse:{},
        currentIndex:0,
        showCourse:'block',
        activeIndex: '0',
        navTitles:['首页', '图书馆', '优秀教师', '热门资讯'],
        navPath:['/','/library','/teacher','message'],
        ipt: '课程、班级',
      };
    },
    components:{
      AllCourse
    },
    created(){
      this._getNavCourse(1,8)
    },
    methods: {
      /**
       * 网络请求相关方法
       */
       _getNavCourse(pageNo,pageSize){
         getNavCourse().then(res=>{
           this.navAllCourse = res.data.data
         })
      },
      /**
       *事件相关方法
       */
      switchCourse(index){
       this.itemsCourse = this.navAllCourse[index];
        index =  this.currentIndex
      },
      clearCourse(){
        this.showCourse = 'none'
      },
      apperanceCourse(){
        this.showCourse='block'
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      handleCommand(command) {
        this.$message('click on item ' + command);
      },
      logoClick(){
        this.$router.push('/')
      },
      navClick(index) {
        this.$router.push(this.navPath[index])
      },
      vipClick(){
        this.$router.push('/vip')
      },
      loginClick(){
        this.$router.push('/login')
      },
      credentialsClick(){
        this.$router.push('/credentials')
      }
    }
    
  }
</script>

<style scoped>
  .header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 16px;
    background-color: #fff;
  }
  
  /*logo样式*/
  .logo img {
    margin-top: 20px;
    width: 102px;
    height: 32px;
    margin-right: 20px;
  }
  
  
  /*下拉菜单*/
  
  .el-icon-arrow-down {
    font-size: 12px;
  }
  
  
  /*全部课程*/
  .all-course{
    display: inline-block;
    padding: 0 10px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 16px;
    color: #ffffff;
    background-color: #4aa1f0;
  }
  .el-dropdown-menu {
    position: relative;
  }
  .courseItem {
    display: none;
    position: absolute;
    top: 63px;
    left: 430px;
    z-index: 999999;
  }
  
  /*图书馆到下载app 统一样式*/
  .el-link--inner {
    color: #333333;
    padding: 20px 10px;
  }
  .el-menu-item {
    font-size: 16px;
  }
  .el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
    color: #4ca2ff !important;
    border-bottom: 2px solid  #4ca2ff !important;
  }
  
  /*搜索框*/
 
  /*vip畅学*/
  .text-vip {
    height: 60px;
    line-height: 60px;
    color: #ffa537;
    cursor: pointer;
  }

  /*登录*/
  .el-link.el-link--primary[data-v-72d63b79] {
    font-size: 16px;
     color: #97989a;
  }
   .el-link.el-link--primary {
     font-size: 16px;
      color: #97989a;
   }
  
  /*查询证书*/
  .el-button.is-round {
    padding: 6px 9px;
  }
</style>