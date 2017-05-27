import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import DashBoard from '@/components/DashBoard'
import Business from '@/components/Business'
import Sales from '@/components/Sales'
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
          {path:'/',name:'summery',component:DashBoard},
          {path:'/business',name:'business',component:Business},
          {path:'/sales',name:'sales',component:Sales},
          {path:'/check',name:'check',component:CheckSale},
          {path:'/setting',name:'setting',component:Setting,
            children:[{path:'/',name:'setting',component:Setting}]
          }
      ]
    }
  ]
})
