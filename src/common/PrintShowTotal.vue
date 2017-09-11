<!--
展示统计和优惠设置
-->
<template>
	<div class="container-show-total"
        @click="callback._callback(name.items,index,edit._edit)"
          :class="{'title-select':edit._edit}"
    >
        	  	     <div class="container-show-total-header">
	        	  	  	  <div class="container-show-item-header-cxt">合计</div>
	        	  	  	  <div class="container-show-item-header-cxt">200</div>
	        	  	  	  <div class="container-show-item-header-cxt">14</div>
	        	  	  	  <div class="container-show-item-header-cxt">14</div>
	        	  	  	  <div class="container-show-item-header-cxt">0</div>
        	  	     </div>
        	  	     <div class="container-show-total-line"></div>
        	  	     <div class="container-show-total-gift">
        	  	     	  <div class="container-show-total-gift-its">
        	  	     	  	   <span class="gift-its-name">代金券:</span>
        	  	     	  	   <span class="gift-its-value">10</span>
        	  	     	  </div>
        	  	     	  <div class="container-show-total-gift-its">
        	  	     	  	   <span class="gift-its-name">代金券:</span>
        	  	     	  	   <span class="gift-its-value">10</span>
        	  	     	  </div>
        	  	     	  <div class="container-show-total-gift-its">
        	  	     	  	   <span class="gift-its-name">代金券:</span>
        	  	     	  	   <span class="gift-its-value">10</span>
        	  	     	  </div>
        	  	     </div>
        	  	      <div class="container-show-total-line"></div>
        	  	     <div class="container-show-total-pays">
        	  	     	  <div class="container-show-total-pays-its">
        	  	     	  	   <span class="gift-its-name">实付:</span>
        	  	     	  	   <span class="gift-its-value">10</span>
        	  	     	  </div>
        	  	     	  <div class="container-show-total-pays-its">
        	  	     	  	   <span class="gift-its-name">现金:</span>
        	  	     	  	   <span class="gift-its-value">10</span>
        	  	     	  </div>
        	  	     	  <div class="container-show-total-pays-its">
        	  	     	  	   <span class="gift-its-name">找零:</span>
        	  	     	  	   <span class="gift-its-value">10</span>
        	  	     	  </div>
        	  	     </div>
        	  	      <div class="container-show-total-line"></div>
                      <div class="edit-box" v-if="edit._edit==true">
                        <span @click.stop="openbox._openBox($event,name.items,index,'EDIT')">编辑</span>
                        <span @click.stop="openbox._openBox($event,name.items,index,'ADD')">加内容</span>
                        <span @click.stop="openbox._openBox($event,name.items,index,'REMOTE')">删除</span>
                    </div>
                    <div v-else></div>
        	  </div>
</template>
<style scoped>
	 .container-show-item-line,.container-show-total-line{
    	width:100%;
    	height: 0.5px;
    	border-bottom: 0.5px dashed #ddd;
    }
    .container-show-item-header-cxt{
    	flex: 1;
        width:60px;
        height:30px;
        text-align: center;
        line-height: 30px;
        font-size: 14px;
    }
   
    .container-show-item-header,.container-show-total-header{
    	width:100%;
    	height:40px;
    	display: flex;
    	justify-content: space-around;
    	align-items: center;
    }
    
    .container-show-total{
    	width:100%;
    	min-height: 240px;
    	padding: 20px 10px 0px 10px;
        position: relative;
    }
    .container-show-total-gift,.container-show-total-pays{
    	width:100%;
    	
    	padding: 0px 10px 20px 10px;
    }
    .container-show-total-gift-its,.container-show-total-pays-its{
    	display: flex;
    	height:20px;
    	line-height:20px;
    	padding-top: 10px;
    }
    .gift-its-name{
        flex:1;
    }
    .gift-its-value{
        flex:5;
        text-align: center;
    }
    .selected-style{
    	border:1px dashed #ddd;
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
		 name:'PrintShowTotal',
         props:['index','name','callback','edit','openbox'],
	}


</script>