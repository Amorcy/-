<!--
门店管理
author:dong.xie
-->
<template>
	 <div>
	     <Labels
	         :name="textName"
             :title="placeTxt"
             :hasSearch="true"
	     ></Labels>
         <div class="tables">
            <router-view></router-view>
         </div>
	  </div>
</template>
<script>
	import Labels from './Labels';
	import StoresList from './StoresList';
	export default {
		 name:'stores',
		 data(){
		 	var _this=this;
		 	return{
		 		textName:'门店管理',
		 		placeTxt:'门面名称/门店编号',

		 	}
		 },
		 components:{Labels}
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
