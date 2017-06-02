// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
var VueMaterial=require('vue-material')
global.PATH = process.env.ROOT_API;
import  VueResource  from 'vue-resource'
import filterStatus from './api/filter'
Vue.use(VueResource)
Vue.use(VueMaterial);
Vue.use(VueMaterial.MdCore) //Required to boot vue material
Vue.use(VueMaterial.MdButton)
Vue.use(VueMaterial.MdIcon)
Vue.use(VueMaterial.MdSidenav)
Vue.use(VueMaterial.MdToolbar)
Vue.use(filterStatus);
Vue.material.registerTheme({
  default: {
    primary: 'blue',
    accent: 'red'
  }
})

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
})

//设置ajax请求基本url

console.log(global.PATH)


