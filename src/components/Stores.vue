<!--
门店管理
author:dong.xie
-->
<template>
	 <div>
	     <Labels 
	         :name="textName"
             :title="placeTxt"
             :source="api"
             :hasSearch="true"

	     ></Labels>
         <div class="tables">
            <ButtonGroup
             :btnList="btnList"
            ></ButtonGroup>
            <Tables
              :bodyName="bodyName"
              :actionName="actionName"
              :resultSet="resultSet"
            ></Tables>
         </div>
	  </div>
</template>
<script>
	import Labels from './Labels';
	import Tables from './Tables';
	import ButtonGroup from './ButtonGroup';
	export default {
		 name:'label',
		 data(){
		 	var _this=this;
		 	return{
		 		textName:'门店管理',
		 		btnList:[
		 		   {title:'添加门店',action:function(){
		 		   	 alert('添加啊');
		 		   },styles:{width:'0.75rem',backgroundColor:'rgb(51, 135, 255)',color:'#ffffff'}},

		 		   {title:'添加品牌',action:function(){
		 		   	 alert('添加啊');
		 		   },styles:{width:'0.75rem',backgroundColor:'#ffffff',color:'#333333'}},

		 		   {title:'批量导入门店',action:function(){
		 		   	 alert('添加啊');
		 		   },styles:{width:'1rem',backgroundColor:'#ffffff',color:'#333333'}},
		 		],

		 		placeTxt:'门面名称/门店编号',
		 		bodyName:["门店编号","门店名称","所属省","管理模式","经营模式","品牌","联系人","联系电话","登录账户"],
		 		actionName:[
		 		{"txt":"编辑",actions:function(){
                      alert('禁用');
		 		}},
		 		{"txt":"协议",actions:function(){
                      alert('编辑');
		 		}}
		 		],
		 		resultSet:9,
		 		api:{
		 			url:'https://www.baidu.com/s?ie=utf-8&mod=11&isbd=1&isid=C766E1F407116111&ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=',
		 			type:'get',
		 			success:function(data){
		 				console.log(this);
		 			}
		 		}
		 	}
		 },
		 components:{Labels,Tables,ButtonGroup}
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