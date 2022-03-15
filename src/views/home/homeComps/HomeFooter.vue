<template>
  <div class="homeFooter">
        <el-tabs v-model="activeName" @tab-click="handleClick" class="w clearfix">
          <el-tab-pane label="生态环境部及直属单位" name="first">
             <div class="envir">
               <el-row :gutter="10">
                 <el-col :span="5"><a href="http://rss.mee.gov.cn">行政体制与人事司</a></el-col>
                 <el-col :span="5"><a href="http://zfj.mee.gov.cn">生态环境执法局</a>></el-col>
                 <el-col :span="5"> <a href="http://jcs.mee.gov.cn">生态环境监测司</a></el-col>
                 <el-col :span="5"> <a href="http://qhs.mee.gov.cn">应对气候变化司</a></el-col>
                 <el-col :span="4"> <a href="http://www.cnemc.cn">中国环境监测总站</a></el-col>
               </el-row>
               <el-row :gutter="10">
                 <el-col :span="5"> <a href="http://www.chinaeol.net">环保部宣传教育中心</a></el-col>
                 <el-col :span="5"> <a href="https://yjb.mee.gov.cn/">环境应急与事故调查中心</a></el-col>
                 <el-col :span="5"> <a href="http://www.cenews.com.cn">中国环境报社</a></el-col>
                 <el-col :span="5"> <a href="http://www.caep.org.cn/">环境规划院</a></el-col>
                 <el-col :span="4"> <a href="http://zfj.mee.gov.cn">中国-东盟环境保护合作中心
                 </a></el-col>
               </el-row>
               <el-row :gutter="10">
                 <el-col :span="5"></el-col><a href="http://www.edcmep.org.cn">中日友好环境保护中心（环境发展中心）</a> </el-col>
                 <el-col :span="5"></el-col><a href="http://www.prcee.org">环境与经济政策研究中心</a> </el-col>
                 <el-col :span="5"></el-col><a href="http://www.sepact.com">北京会议与培训基地</a> </el-col>
                 <el-col :span="5"></el-col><a href="http://www.bdhetec.com.cn">北戴河环境技术交流中心</a> </el-col>
                 <el-col :span="4"></el-col> </el-col>
               </el-row>
             </div>
          </el-tab-pane>
          <el-tab-pane label="各省市服务单位" name="second" class="w">
            <div class="provinces">
              <el-row :gutter="10">
                <el-col :span="5"> <a href="http://www.bjmemc.com.cn">北京市环境监测中心</a> </el-col>
                <el-col :span="5"> <a href="http://sthjt.shanxi.gov.cn">山西省环境监察总队</a></el-col>
                <el-col :span="5"> <a href="http://sthj.ln.gov.cn">辽宁省生态环境执法局</a></el-col>
                <el-col :span="5"> <a href="http://hb.yingkou.gov.cn">营口市环境保护局</a></el-col>
                <el-col :span="4"> <a href="http://ddepb.dandong.gov.cn">丹东市环境保护局
                </a> </el-col>
              </el-row>
              <el-row :gutter="10">
                <el-col :span="5"> <a href="http://hbt.jl.gov.cn">吉林省环境监察总队</a> </el-col>
                <el-col :span="5"> <a href="http://www.ccepb.gov.cn">长春市环境保护局</a></el-col>
                <el-col :span="5"> <a href="http://www.hljdep.gov.cn">黑龙江省环境监察局</a></el-col>
                <el-col :span="5"> <a href="http://www.sepi.gov.cn">上海市环境监察总队</a></el-col>
                <el-col :span="4"> <a href="http://www.aepb.gov.cn">安徽省环境监察局</a></el-col>
              </el-row>
              <el-row :gutter="10">
                <el-col :span="5"><a href="http://hbt.fujian.gov.cn">福建省环境监察总队</a> </el-col>
                <el-col :span="5"><a href="http://www.sdein.gov.cn">山东省环境执法局</a></el-col>
                <el-col :span="5"><a href="http://www.hnep.gov.cn">河南省环境监察总队</a></el-col>
                <el-col :span="5"><a href="http://hbt.hubei.gov.cn">湖北省环境监察总队</a></el-col>
                <el-col :span="4"><a href="http://www.hnhbxww.com">湖南省生态环境网</a></el-col>
              </el-row>
              <el-row :gutter="10">
                <el-col :span="5"> <a href="http://www.gdep.gov.cn">广东省环保厅</a> </el-col>
                <el-col :span="5"> <a href="http://218.77.183.51">海南省生态环境厅法规处</a></el-col>
                <el-col :span="5"> <a href="http://pub.hainan.gov.cn">海南省生态环境监察总队</a></el-col>
                <el-col :span="5"> <a href="http://www.cepb.gov.cn">重庆市环境监察总队</a></el-col>
                <el-col :span="4"> <a href="http://www.cepb.gov.cn">重庆市江北区环保局</a>
                </el-col>
              </el-row>
              <el-row :gutter="10">
                <el-col :span="5"><a href="http://hb.guizhou.gov.cn">贵州省环境监察总队</a> </el-col>
                <el-col :span="5"><a href="http://www.ynepb.gov.cn">云南省环境监察总队</a></el-col>
                <el-col :span="5"><a href="http://www.gshjjcj.com">甘肃省环境监察局</a></el-col>
                <el-col :span="5"><a href="http://www.qhepb.gov.cn">青海省环境监察总队</a></el-col>
                <el-col :span="4"><a href="http://www.xjepb.gov.cn">新疆维吾尔自治区环境监察总队</a> </el-col>
              </el-row>
              <el-row :gutter="10">
                <el-col :span="5"> <a href="http://m.xjbt.gov.cn">新疆生产建设兵团环境监察总队</a> </el-col>
                <el-col :span="5"><a href="http://sthjt.nmg.gov.cn">内蒙古自治区环境监察局</a>        </el-col>
                <el-col :span="5"><a href="http://sthjt.nmg.gov.cn">内蒙古自治区西部环境保护督查中心</a>   </el-col>
              </el-row>
            </div>
          </el-tab-pane>
        </el-tabs>
  </div>
</template>

<script>
  export default {
    name: "HomeFooter",
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>

<style scoped>
.homeFooter {
  background-color: black;
  width: 100%;
}
.envir,.provinces {
  margin-top: 30px;
}
.el-tabs {
  border-bottom: 2px solid #ffffff;
}
.el-tabs>>>.el-tabs__item {
  color: #ffffff;
  font-size: 20px;
}
.el-tabs>>>.el-tabs__item.is-active {
  color: #4aa1f0;
}
.el-tabs>>>.el-tabs__nav-scroll {
  width: 100%;
}
.el-tabs>>>.el-tabs__nav {
  z-index: 0;
}
.el-tabs>>>.el-tabs__nav.is-top {
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.el-row {
  margin-bottom: 20px;
&:last-child {
   margin-bottom: 0;
 }
}
.el-col {
  border-radius: 4px;
}
  a{
    text-decoration: none;
    color: #ffffff;
    font-size: 18px;
  }
  a:hover {
    color: #4aa1f0;
  }
</style>