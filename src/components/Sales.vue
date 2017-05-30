<!--
描述:登录成功商户
作者:dong.xie
-->
<template>
	<div>
		<Labels 
	         :name="textName"
             :hasSearch="true"
             :title="title"
	     ></Labels>

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
		 		title:'门面名称/门店编号',
		 	}
		 } 
	}
</script>


<style>
	


</style>