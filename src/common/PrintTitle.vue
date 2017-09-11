<!--
标题设置
-->
<template>
	 <div 
	 @click="callback._callback(name.items,index,edit._edit)"
	 class="container-topic"
	 :class="{'title-select':edit._edit}">
        	  	<h4 
        	  	class="container-topic-title"
        	  	:class="{'input-font-weight':txt.textWeight}"
        	  	:style="{'textAlign':txt.textAlign,'fontFamily':txt.textFamily}"
        	  	>{{txt.textValue}}</h4>
        	  	<div class="edit-box" v-if="edit._edit==true">
        	  		<span @click.stop="handleClick($event)">编辑</span>
        	  		<span @click.stop="openbox._openBox($event,name.items,index,'ADD')">加内容</span>
        	  		<span @click.stop="openbox._openBox($event,name.items,index,'REMOTE')">删除</span>
        	  	</div>
        	  	<div v-else></div>
        	  	
     </div>
</template>

<style scoped>
	.container-topic-title{
		line-height: 50px;
		text-align: center;
		user-select: none;
		font-size: 20px;
		font-weight:100;
		
	}
	.container-topic{
		width:100%;
		height:50px;
		position: relative;
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
	.input-font-weight{
        font-weight: 700
     }

</style>

<script>
    import store from '../constant/store';
    import {shareTxtAction} from '../constant/actions';
	export default {
		 name:'PrintTitle',
		 props:['index','name','callback','edit','openbox'],
		 data(){
		 	return {
		 		txt:{
		 			type:'TXT',
		 			index:'',
					textValue:'物美店庆大酬宾欢迎您！',
					textUpper:false,
					textFamily:'',
					textAlign:'center',
					textWeight:false
				}
		 	}
		 },
		 methods:{
		 	handleClick:function($event){
		 		//console.log('当前组件下标');
		 		//console.log(this.index.i);
		 		this.openbox._openBox($event,this.name.items,this.index,'EDIT');
		 		this.txt.index=this.index.i;
		 		store.dispatch(shareTxtAction(this.txt));
		 	}
		 },
		 mounted:function(){
              this.txt=store.getState().txt;
              store.subscribe(()=>{
              	 this.txt=store.getState().txt;
              	 //console.log('获取编辑框传递的数据是:');
              	 //console.log(store.getState().txt);
              });
		 }
	}
</script>