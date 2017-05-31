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
		 		textName:'商户优惠',
		 		title:'商户名称/商户编号',
		 	}
		 } 
	}
</script>

<style>
	

</style>