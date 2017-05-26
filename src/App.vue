<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
  	return {
  		
  	}
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
html,body{
	width:100%;
	height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   position: relative;
   width: 100%;height: 100%;
}
@import './assets/vue-material.css';
@import './assets/iconfont.css';
</style>
