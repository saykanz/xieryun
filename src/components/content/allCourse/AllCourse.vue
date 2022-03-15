<template>
  <div class="courses">
        <div v-for="(i,index) in courses.childrenList" :key="index">
          <el-divider content-position="left">{{i.seriesName}}</el-divider>
          <div v-for="course in i.courseList" class="itemName">
            <span>{{course.productName}}</span>
          </div>
        </div>
    <div class="triangle"></div>
  </div>
</template>

<script>
  export default {
    name: "AllCourse",
    props:{
      courses:{
        type:Object,
        default(){
          return {}
        }
      },
    },
    inheritAttrs:true
  }
</script>

<style scoped>
.courses {
  position: relative;
  width: 815px;
  color: #1fa2f8;
  font-size: 14px;
  background-color: #fff;
}
  .el-divider>>>.el-divider__text {
    color: #29a6f8;
    font-size: 16px;
  }
  .itemName {
    display: inline-block;
    margin: 17px 25px;
  }
  .triangle {
    top: 15px;
    left: -20px;
    position: absolute;
    border: 10px solid transparent;
    border-right-color: white;
  }
</style>