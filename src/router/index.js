import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = ()=>import('@/views/home/Home')
const Library =()=>import('@/views/library/Library')
const HotMessage =()=>import('@/views/hotMessage/HotMessage')
const Teacher =()=>import('@/views/teacher/Teacher')
const FIndCredentials=()=>import('@/views/findCredentials/FindCredentials')
const Login=()=>import('@/views/login/Login')
const VipStudy=()=>import('@/views/vipStudy/VipStudy')

const routes=[
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/',
    component:Home
  },
  {
    path:'/library',
    component:Library
  },
  {
    path:'/message',
    component:HotMessage
  },
  {
    path:'/teacher',
    component:Teacher
  },
  {
    path:'/credentials',
    component:FIndCredentials
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/vip',
    component:VipStudy
  },
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router