<template>
  <div>
    <div class="footer">
      <div class="w">
        <el-row :gutter="20">
          <el-col :span="6">
            <div  class="left">
              <div>客服咨询</div>
              <div>
                <p>服务电话：<i class="iconfont icon-phone"></i>4000810101</p>
                <p>在线客服：<a href="javascript:;"><i class="iconfont icon-xinxi"></i>立即咨询</a></p>
                <p>服务邮箱：<i class="el-icon-message"></i>passport@cei.net.cn</p>
                <p>周一至周五：9:00-18:00</p>
              </div>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="course">
              <div>精品课程</div>
              <a href="">生态环境执法培训</a>
              <a href="">生态环境监测培训</a>
              <a href="">排污企业培训</a>
              <a href="">第三方环保培训</a>
            </div>
          </el-col>
          <el-col :span="2">
            <div class="entry">
              <div>快速入口</div>
              <a href="">个人中心</a>
              <a href="">购物车</a>
              <a href="">我的订单</a>
              <a href="">登录注册</a>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="about">
              <div>西尔介绍</div>
              <a href="">版权声明</a>
              <a href="">愿景与使命</a>
              <a href="">大事记</a>
              <a href="">合作伙伴</a>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="weixin">
              <div><img src="data:image/jpeg;base64,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" alt=""></div>
              <p>关注西尔微信</p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="app">
              <div><img src="https://www.cei.net.cn/static/app-dl.d091d4e3.png" alt=""> </div>
              <p>西尔云学院App</p>
            </div>
          </el-col>
        </el-row>
        <div class="number">
          <i class="iconfont icon-guohui"></i>
          京公网安备&nbsp;&nbsp;11010102004423号
        </div>
      </div>
    </div>
    <div> <p class="copyRight">Copyright2022&nbsp;西尔环境教育&nbsp;(CEI）&nbsp;版权所有&nbsp;主办单位
      &nbsp;北京西尔云教育科技有限公司&nbsp;承办单位：&nbsp; 辽宁省两山科技有限公司提供技术开发和技术维护
      <a href="javascript:;"> 京ICP备19011394号-2</a> 出版物经营许可证：新出发京零字第海180213号</p></div>
  </div>
</template>

<script>
  export default {
    name: "FooterBar",
  }
</script>

<style scoped>
.footer {
  padding: 30px;
  width: 100%;
  color: white;
  font-size: 14px;
  background-color: #000000;
}
a {
  display: block;
  text-decoration: none;
  color: white;
}
a:hover {
  color: white;
}
  img {
    width: 120px;
    height: 120px;
  }
  p {
    color: white;
  }
  
.left p ,.entry a,.course a,.about a {
  line-height: 30px;
}
  .left,.entry,.course,.about {
    margin-bottom: 30px;
  }
  .left a,.copyRight a {
    display: inline-block;
    color: #1fa2f8;
  }
  .number {
    margin:45px auto 20px;
    width: 600px;
  }
.number .iconfont {

}
  .copyRight {
    text-align: center;
    height: 74px;
    line-height: 30px;
    font-size: 16px;
    width: 100%;
    background-color: #424242;
  }
</style>