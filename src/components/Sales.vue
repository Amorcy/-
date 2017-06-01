<!--
描述:分销商组件
作者:dong.xie
-->
<template>
	<div>
		<Labels 
	         :name="textName"
             :hasSearch="true"
             :title="title"
	     ></Labels>
	      <div class="tables">
	         <router-view></router-view>
         </div>

	</div>
</template>

<script>
	import Labels from './Labels';
	
	export default {
		 name:'dashboard',
		 components:{Labels},
		 data(){
		 	return {
		 		textName:'分销商',
		 		title:'分销商名称/分销商编号',
		 		
		 	}
		 } 
	}
</script>


<style>
	 .views>div{
    	width: 100%;height: 100%;
    }
	.tables{
		width:12.66rem;
    	height:calc(100% - 1.13rem);
		height:-moz-calc(100% - 1.13rem);
		height:-webkit-calc(100% - 1.13rem);
    	background-color: rgb(237,237,237);
    	overflow:scroll;
	}


</style>