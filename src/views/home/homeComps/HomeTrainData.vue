<template>
  <div class="bc w clearfix" >
    <div class="data-head">
      <img src="@/assets/images/home/tree.png" alt="">
      <span>培训数据</span>
      <i class="iconfont icon-zhengfangxing"></i>
    </div>
    <div ref="map" id='map' style="width:800px;height:400px" class="mapc"></div>
    <div class="totalData">
      <div>全国培训总人数：</div>
      <div class="datas">{{totalNumber}}</div>
    </div>
    <el-table :data="tableData" height="375px" border style="width: 350px" header-align="center">
      <el-table-column prop="topicScrollName" label="城市" width="115px">
      </el-table-column>
      <el-table-column prop="periodsNumber" label="期数" width="115px">
      </el-table-column>
      <el-table-column prop="peopleNumber" label="总培训人数">
      </el-table-column>
    </el-table>
  </div>
</template>

<style></style>

<script>
  import * as echarts from 'echarts';
  import 'echarts/map/js/china.js'
  
  var myCharts = null
  
  export default {
    name: 'HomeTrainData',
    props: {
      trainData: {
        type: Object,
        default() {
          return {}
        }
      },
      trainTable: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        tableData: [],
        totalNumber:''
      }
    },
    watch: {
      trainData : {
        handler(){
          if(this.trainData&&this.trainData.code === 200){
            myCharts = echarts.init(this.$refs.map);
            this.initCharts()
          }
        }
      },
      trainTable: {
        handler() {
          if (this.trainTable && this.trainTable.code === 200) {
            this.initTableData()
          }
        },
      }
    },
    mounted() {
      if(this.trainData.code === 200){
        myCharts = echarts.init(this.$refs.map);
        this.initCharts()
      }
      if (this.trainTable && this.trainTable.code === 200) {
        this.initTableData()
      }
    },
    beforeDestroy() {
      if (myCharts) {
        myCharts.clear()
      }
    },
    methods: {
      initCharts(){
        let mapData = this.trainData.data.rows
        this.totalNumber = this.trainData.data.totalNumber
        for(let i = 0; i<mapData.length; i++){
          if(mapData[i].regionID===110000){  mapData[i].name='北京' }
          else if(mapData[i].regionID===120000 ){  mapData[i].name='天津' }
          else if(mapData[i].regionID===130000 ){  mapData[i].name='河北' }
          else if(mapData[i].regionID===140000 ){  mapData[i].name='山西' }
          else if(mapData[i].regionID===150000 ){  mapData[i].name='内蒙古' }
          else if(mapData[i].regionID===210000 ){  mapData[i].name='辽宁' }
          else if(mapData[i].regionID===220000 ){  mapData[i].name='吉林' }
          else if(mapData[i].regionID===230000 ){  mapData[i].name='黑龙江' }
          else if(mapData[i].regionID===310000 ){  mapData[i].name='上海' }
          else if(mapData[i].regionID===320000 ){  mapData[i].name='江苏' }
          else if(mapData[i].regionID===330000 ){  mapData[i].name='浙江' }
          else if(mapData[i].regionID===340000 ){  mapData[i].name='安徽' }
          else if(mapData[i].regionID===350000 ){  mapData[i].name='福建' }
          else if(mapData[i].regionID===360000 ){  mapData[i].name='江西' }
          else if(mapData[i].regionID===370000 ){  mapData[i].name='山东' }
          else if(mapData[i].regionID===410000 ){  mapData[i].name='河南' }
          else if(mapData[i].regionID===420000 ){  mapData[i].name='湖北' }
          else if(mapData[i].regionID===430000 ){  mapData[i].name='湖南' }
          else if(mapData[i].regionID===440000 ){  mapData[i].name='广东' }
          else if(mapData[i].regionID===450000 ){  mapData[i].name='广西' }
          else if(mapData[i].regionID===460000 ){  mapData[i].name='海南' }
          else if(mapData[i].regionID===500000 ){  mapData[i].name='重庆' }
          else if(mapData[i].regionID===510000 ){  mapData[i].name='四川' }
          else if(mapData[i].regionID===520000 ){  mapData[i].name='贵州' }
          else if(mapData[i].regionID===530000 ){  mapData[i].name='云南' }
          else if(mapData[i].regionID===540000 ){  mapData[i].name='西藏' }
          else if(mapData[i].regionID===610000 ){  mapData[i].name='陕西' }
          else if(mapData[i].regionID===620000 ){  mapData[i].name='甘肃' }
          else if(mapData[i].regionID===630000 ){  mapData[i].name='青海' }
          else if(mapData[i].regionID===640000 ){  mapData[i].name='宁夏' }
          else if(mapData[i].regionID===650000 ){  mapData[i].name='新疆' }
          else if(mapData[i].regionID===710000 ){  mapData[i].name='台湾' }
          else if(mapData[i].regionID===810000 ){  mapData[i].name='香港' }
          else if(mapData[i].regionID===820000 ){  mapData[i].name='澳门' }
        }
        let options= {
          visualMap:{
            type:'continuous',
            show:false,
            min:0,
            max:10000,
            color: [
              '#3268ff',
              '#e6ebff',
            ]
          },
          geo: {
            map: 'china',
            zoom: 1.5,//默认地图显示的比例
            show:true,
            roam: true,//地图是否可以缩放以及平移
            label: {//图形上的文本标签
              show: true,
              color: '#2b2b2b',//图形上一般状态下文字的颜色
              fontSize: 18,//文字的大小
              padding: [2, 3],
              formatter: function (value) {
                return value.periodsNumber
              }
            },
            itemStyle: {//地图区域多边形的样式
              areaColor: '#e6ebff',
              borderColor: '#fff',//图形的边框颜色
            },
            emphasis: {//图形在高亮时的样式
              label: {//图形高亮时的文字
            
              },
              itemStyle: {//图形高亮时的图形样式
                areaColor: '#3268ff'
              }
            },
          },
          tooltip: {//设置提示框
            trigger: 'item',
            //提示框浮层内容格式器，支持字符串模板和回调函数两种形式。
            formatter:function (params) {
              // console.log(params);
              return `参加${params.data.periodsNumber}期培训<br/>累计${params.data.peopleNumber}名学员参加`
            }
          },
          series: [{
            name:'培训数据',
            type: 'map',
            geoIndex:0,
            data:mapData
          }],
        }
        myCharts.setOption(options);
      },
      initTableData() {
        this.tableData = this.trainTable.data
      }
    },
    
  };
</script>
<style scoped>
  .bc {
    position: relative;
    padding: 20px 0;
    background-color: #fff;
    width: 100%;
  }
  
  .data-head {
    height: 40px;
    line-height: 40px;
    width: 400px;
    margin: 30px auto 10px;
  }
  .data-head img {
    float: left;
    margin-right: 15px;
    vertical-align: bottom;
  }
  
  .data-head span {
    float: left;
    font-size: 40px;
    color: #565656;
  }
  
  .mapc {
    position: relative;
    margin: 36px auto;
  }
  
  .icon-zhengfangxing {
    font-size: 10px;
    color: #4aa1f0;
    line-height: 70px;
    margin-left: 15px;
  }
  
  .totalData {
    position: absolute;
    top: 390px;
    left: 100px;
    color: #1d130a;
    font-size: 18px;
  }
  
  .totalData .datas {
    font-size: 33px;
    color: white;
    text-align: center;
    padding: 10px 20px;
    background-color: rgb(16, 143, 245);
  }
  .el-table {
    position: absolute;
    top: 150px;
    right: 66px;
  }
  .el-table >>> thead {
    color: #ffffff;
  }
  
  .el-table >>> th.el-table__cell {
    background-color: #4ba1f0;
  }
</style>