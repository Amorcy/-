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
import AddAgreement from '@/components/AddAgreement';
import Seller from '@/components/Seller'
import Users from '@/components/Users'

import VendorCheck from '@/components/VendorCheck';
import BusinessCheck from '@/components/BusinessCheck';
import BusinessList from '@/components/BusinessList';
import AddBusiness from '@/components/AddBusiness';
import EditBusiness from '@/components/EditBusiness';
import StoresList from '@/components/StoresList';
import AddStores from '@/components/AddStores';
import SalesList from '@/components/SalesList';
import SalesInvite from '@/components/SalesInvite';
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
          {path:'/business',name:'business',component:Business,
              children:[
                  {path:'/',name:'business',component:BusinessList},
                  {path:'/business/add',name:'addBusiness',component:AddBusiness},
                  {path:'/business/edit/:id',name:'editBusiness',component:EditBusiness},
                  {path:'/business/addAgree',name:'addAgree',component:AddAgreement}
              ]},
          {path:'/sales',name:'sales',component:Sales,children:
          [
             {path:'/',name:'sales',component:SalesList},
             {path:'sales/invite',name:'salesInvite',component:SalesInvite},
             ]
          },
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
            {path:'/setting/manageStores',name:'manageStores',component:Stores,
                children:[
                   {path:'/',name:'manageStores',component:StoresList},
                   {path:'/setting/manageStores/add',name:'addStores',component:AddStores}
                 ]

            },
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
