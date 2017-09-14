<!--
logo设置
-->
<template>
	 <div class="container-logo"
	      @click="callback._callback(name.items,index,edit._edit)"
	      :class="{'title-select':edit._edit}"
	 >
        	  	 <img :src="img.imgSrc || require('../assets/kfc.png')" class="container-logo-img"/>
	        	  	 <div class="edit-box" v-if="edit._edit==true">
	        	  		<span @click.stop="handleClick($event)">编辑</span>
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
  import store from '../constant/store';
  import {shareImgAction} from '../constant/actions';

  export default {
		 name:'PrintLogo',
		 props:['index','name','callback','edit','openbox'],
     data(){
		   return {
         img:{
           id:4,
           areaCode:'LG',
           areaName:'LOGO',
           areaSeq:3,
           picDirection:1,
           editType:2,
           type:'IMG',
           index:'',
           imgSrc:''
         }
       }
     },
    methods:{
      handleClick($event){
        this.openbox._openBox($event,this.name.items,this.index,'EDIT');
        this.img.index=this.index.i;
        store.dispatch(shareImgAction(this.img))

      },
      updateViews:function(){
        if(this.index.i==store.getState().img.index){
          this.img=store.getState().img;
        }
      }
    },
    mounted(){
      this.updateViews();
      store.subscribe(()=>{
        this.updateViews();
      });
    }
	}
</script>
