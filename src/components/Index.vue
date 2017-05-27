<!--
描述:登录成功首页
作者:dong.xie
-->
<template>
	<div class="container">
	    <div class="menus">
	    	<AppMenu></AppMenu>
	    </div>
	    <div class="views">
	       <router-view></router-view>
	    </div>   
	</div>
</template>
<script>
	import AppMenu from './AppMenu.vue';
    export default {
    	name:'index',
    	components:{AppMenu}
    }
</script>
<style>
	.container{
		display: flex;
		width: 100%;height: 100%;
	}
	.menus{
		width:1.78rem;
		height: 100%;
		background-color: rgb(48,57,69);
	}
	.views{
		width:12.66rem;
		height: 100%;
	}
</style>