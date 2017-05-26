import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import DashBoard from '@/components/DashBoard'
import CheckSale from '@/components/CheckSale'
import Setting from '@/components/Setting'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
    	path:'/',
    	name:'Index',
    	component:Index,
      children:[
          {path:'/',name:'dashboard',component:DashBoard},
          {path:'/checksale',name:'checksale',component:CheckSale},
          {path:'/setting',name:'setting',component:Setting}
      ]
    }
  ]
})
