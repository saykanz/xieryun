<template>
 <div class="special-pro w clearfix">
   <div v-for="(item,index) in specialic" :key="index" @click="speClick(index)">
     <img :src="item.imgS" alt="" class="small" @mouseenter="speMouse(index)">
     <img :src="item.imgB" alt="" class="big" :style="{display:currentIndex===index? 'block' :'none'}">
   </div>
 </div>
</template>

<script>
     export default {
       name: "SpecialPro",
       data() {
         return {
           drawer: false,
           // modal:true ,
           direction: 'rtl',
           specialic:[{imgB:'https://www.cei.net.cn/static/slide_big_two.4d9f0f56.jpg',imgS:'https://www.cei.net.cn/static/slide_two.cdc5e745.jpg'},
             {imgB:'https://www.cei.net.cn/static/slide_big_one.579062b4.jpg',imgS:'https://www.cei.net.cn/static/slide_one.e60208db.jpg'},
             {imgB:'https://www.cei.net.cn/static/slide_big_three.5cc37c69.jpg',imgS:
                   'https://www.cei.net.cn/static/slide_three.52b7e942.jpg'}
           ],
           currentIndex:0
         }
       },
       computed:{
       },
       methods: {
         //实现动画效果，可惜不尽人意
         speMouse(index) {
           console.log(index);
           this.currentIndex = index;
         },
         //点击跳转到相应的页面
         speClick(index) {
           console.log(index);
           this.currentIndex = index;
         }
       }
     }
</script>

<style scoped>
  .special-pro {
    width: 100%;
    margin-top: 48px;
    margin-left: 5%;
    height: 270px;
    cursor: pointer;
  }

.special-pro div img{
  float: left;
 }
.big {
    display: none;
  }
.special-pro div:last-child img{
    display: block;
  }
</style>