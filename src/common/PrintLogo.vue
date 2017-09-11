<!--
logo设置
-->
<template>
	 <div class="container-logo"
	      @click="callback._callback(name.items,index,edit._edit)"
	      :class="{'title-select':edit._edit}"
	 >
        	  	 <img src="../assets/kfc.png" class="container-logo-img"/>
	        	  	 <div class="edit-box" v-if="edit._edit==true">
	        	  		<span @click.stop="openbox._openBox($event,name.items,index,'EDIT')">编辑</span>
        	  		<span @click.stop="openbox._openBox($event,name.items,index,'ADD')">加内容</span>
        	  		<span @click.stop="openbox._openBox($event,name.items,index,'REMOTE')">删除</span>
	        	  	</div>
	        	  	<div v-else></div>
        	  </div>
</template>
<style scoped>
	.container-logo{
        width:100%;
        height:140px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding:20px 0px 20px 0px;
        position: relative;
	}
	.container-logo-img{
		width:120px;
		height: 120px;
	}
	.title-select{
		border:1px dashed rgb(107,107,107);
	}
	.edit-box{
		width:180px;
		height:20px;
		position: absolute;
		background-color: rgb(107,107,107);
		line-height: 20px;
		display: flex;
		bottom:0px;
		right: 0px;
		z-index: 9999;
	}
	.edit-box>span{
		flex:1;
        color: #ffffff;
        text-align: center;
        z-index: 9999;
	}
</style>

<script>
	export default {
		 name:'PrintLogo',
		 props:['index','name','callback','edit','openbox'],
	}
</script>