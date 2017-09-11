<!--
最底部的二维码设置
-->
<template>
	<div class="container-show-barcode"
          @click="callback._callback(name.items,index,edit._edit)"
          :class="{'title-select':edit._edit}">
        	  	    <img src="../assets/barcode.jpg" class="container-show-img">
                    <div class="edit-box" v-if="edit._edit==true">
                        <span @click.stop="openbox._openBox($event,name.items,index,'EDIT')">编辑</span>
                    <span @click.stop="openbox._openBox($event,name.items,index,'ADD')">加内容</span>
                    <span @click.stop="openbox._openBox($event,name.items,index,'REMOTE')">删除</span>
                    </div>
                    <div v-else></div>
        	  </div>
</template>
<style scoped>
	.container-show-barcode{
    	width:100%;
    	height:160px;
    	padding:20px;
    	display: flex;
    	justify-content: center;
    	align-items: center;
        position: relative;
    }
    .title-select{
        border:1px dashed rgb(107,107,107);
    }
    .container-show-img{
        width:140px;
        height: 140px;
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
<script >
	export default {
		 name:"PrintBarCode",
          props:['index','name','callback','edit','openbox'],
	}
</script>