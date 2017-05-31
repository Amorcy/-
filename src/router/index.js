import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import DashBoard from '@/components/DashBoard'
import Business from '@/components/Business'
import Sales from '@/components/Sales'
import CheckSale from '@/components/CheckSale'
import Setting from '@/components/Setting'
import Stores from '@/components/Stores'
import Dishes from '@/components/Dishes'
import Rights from '@/components/Rights'
import Roles from '@/components/Roles'
import Agreement from '@/components/Agreement'
import Seller from '@/components/Seller'
import Users from '@/components/Users'

import VendorCheck from '@/components/VendorCheck';
import BusinessCheck from '@/components/BusinessCheck';
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
          {path:'/check',name:'check',component:CheckSale,
            children:[
            {path:'/',name:'vendorCheck',component:VendorCheck},
            {path:'/check/vendorCheck',name:'vendorCheck',component:VendorCheck},
            {path:'/check/businessCheck',name:'businessCheck',component:BusinessCheck}
            ]
          },
          {path:'/setting',name:'setting',component:Setting,
            children:[
            {path:'/',name:'setting',component:Stores},
            {path:'/setting/manageStores',name:'manageStores',component:Stores},
            {path:'/setting/manageDishes',name:'manageDishes',component:Dishes},
            {path:'/setting/rightRoles',name:'rightRoles',component:Rights},
            {path:'/setting/agreementTemplates',name:'agreementTemplates',component:Agreement},
            {path:'/setting/discountUsers',name:'discountUsers',component:Seller},
            {path:'/setting/manageUsers',name:'manageUsers',component:Users},
            {path:'/setting/manageRoles',name:'manageRoles',component:Roles}
            ]
          }
      ]
    }
  ]
})
