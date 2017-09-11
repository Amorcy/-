import Vue from 'vue'
import Router from 'vue-router'
import PrintContainer from '@/common/PrintContainer'
Vue.use(Router)
export default new Router({
  routes: [
    {
    	path:'/',
    	name:'PrintContainer',
    	component:PrintContainer
    }
  ]
})
