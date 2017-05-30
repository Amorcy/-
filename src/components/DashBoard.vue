<!--
描述:登录成功概览
作者:dong.xie
-->
<template>
	<div>
		<Labels 
	         :name="textName"
             :hasSearch="false"

	     ></Labels>
	     <div class="dashboard">
	        <div class="dashboradcxt">
	     	 <div class="dashcxt">
	     	 	 <div class="dashcxt-item">
	     	 	 	 <div class="dashcxt-item-sales">
	     	 	 	 	<span class="item-sales-number">300</span>
	     	 	 	 	<span class="item-sales-sales">签约商户</span>
	     	 	 	 </div>
	     	 	 	 <div class="lines"></div>
	     	 	 	 <div class="dashcxt-item-add">
	     	 	 	 	<span class="item-add-number">8</span>
	     	 	 	 	<span class="item-add-add">今日新增</span>
	     	 	 	 </div>
	     	 	 </div>
	     	 	 <div class="dashcxt-item">
	     	 	 	 <div class="dashcxt-item-sales">
	     	 	 	 	<span class="item-sales-number">300</span>
	     	 	 	 	<span class="item-sales-sales">签约商户</span>
	     	 	 	 </div>
	     	 	 	 <div class="lines"></div>
	     	 	 	 <div class="dashcxt-item-add">
	     	 	 	 	<span class="item-add-number">8</span>
	     	 	 	 	<span class="item-add-add">今日新增</span>
	     	 	 	 </div>
	     	 	 </div>
	     	 	 <div class="dashcxt-item">
	     	 	 	 <div class="dashcxt-item-sales">
	     	 	 	 	<span class="item-sales-number">300</span>
	     	 	 	 	<span class="item-sales-sales">签约商户</span>
	     	 	 	 </div>
	     	 	 	 <div class="lines"></div>
	     	 	 	 <div class="dashcxt-item-add">
	     	 	 	 	<span class="item-add-number">8</span>
	     	 	 	 	<span class="item-add-add">今日新增</span>
	     	 	 	 </div>
	     	 	 </div>
	     	 </div>
             </div>
             <div class="dashchart">
             	<Charts></Charts>
             </div>
	     </div>

	</div>
</template>

<script>
	import Labels from './Labels';
	import Charts from './Charts';
	export default {
		 name:'dashboard',
		 components:{Labels,Charts},
		 data(){
		 	return {textName:'概览'}
		 } 
	}
</script>

<style>
	.dashboard{
		width:12.66rem;
    	height:calc(100% - 1.13rem);
		height:-moz-calc(100% - 1.13rem);
		height:-webkit-calc(100% - 1.13rem);
    	background-color: rgb(237,237,237);
    	overflow-y:scroll;
	}
	.dashboradcxt{
		width:12.66rem;
		height: 1.5rem;
		display: flex;
    	align-items: center;
    	flex-direction: column;
    	overflow: hidden;
	}
	.dashcxt{
		width:12rem;
		height: 1.5rem;
		display: flex;
		justify-content:space-between;
		align-items: flex-end;
		overflow: hidden;
	}
	.dashcxt>div{
		width:3.84rem;
		height:1.2rem;
		border-radius: 8px;
		background-color: #ffffff;
	}
	.dashchart{
		width:12rem;
		height: 5.04rem;
		background-color: #ffffff;
		border-radius:8px;
		margin: 0.2rem auto;
	}
	.dashcxt-item{
		display: flex;
		align-items: center;
	}
	.dashcxt-item-sales{
		flex: 1;
		height:100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.lines{
		height: 0.7rem;
		width:1px;
		background-color: #dddddd;
	}
	.dashcxt-item-add{
		flex: 1;
		height:100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.item-sales-number{
		font-size:0.2rem;
	}
	.item-sales-sales,.item-add-add{
		font-size:0.14rem;
	}
	.item-add-number{
		font-size:0.2rem;
		color: rgb(51, 135, 255);
	}
	
</style>