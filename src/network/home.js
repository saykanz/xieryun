import {request} from './request'

//请求轮播图图片
export function getPictureRotation() {
  return request({
    url:'/front/get_picture_rotation',
  })
}

//请求全部课程下的菜单
export function getNavCourse(pageNo,pageSize) {
   return request({
     url:'/front/get_navigation_list',
     query:{
       pageNo,
       pageSize
     }
   })
}

//请求培训地图数据
export function getTrainData(platType) {
  return request({
    url:'/front/search_plat_topic_list?platType=1',
  })
}
//请求培训表格数据
export function getTrainTable(pageSize) {
  return request({
    url:'/front/search_plat_topic_scroll_list',
    params:{
      pageSize:40
    }
  })
}

//请求正在进行的项目
export function getItemDo(viewPageID) {
  return request({
    url:'/get_recommend_list',
    query:{
      viewPageID
    }
  })
}

//请求培训专栏floor_list的数据
export function getFloorList() {
  return request({
    url:'/front/search_home_floor_list'
  })
}

// 请求培训专栏 product 推荐 的项目
export  function getFloorProductRecomList(floorID) {
  return  request({
    url:'/front/search_home_floor_product_web_recom_list',
    params:{
      floorID
    }
  })
}

// 请求培训专栏 product 在线 的项目
export function getFloorProductOnline(floorID,seriesID,type,pageSize) {
   return request({
     url:'front/search_home_floor_product_list',
     params:{
       floorID,
       seriesID:0,
       type:1,
       pageSize:6
     }
   })
}


// 请求培训专栏 product 在线 的项目
export function getFloorProductRemote(floorID,seriesID,type,pageSize) {
  return request({
    url:'front/search_home_floor_product_list',
    params:{
      floorID,
      seriesID:0,
      type:2,
      pageSize:4
    }
  })
}

// 请求培训专栏 product 在线 的项目
export function getFloorProductFace(floorID,seriesID,type,pageSize) {
  return request({
    url:'front/search_home_floor_product_list',
    params:{
      floorID,
      seriesID:0,
      type:3,
      pageSize:4
    }
  })
}

