<!--
用户管理组件
-->
<template>
	<div>
		<Labels 
	         :name="textName"
             :hasSearch="true"
             :title="title"
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
	import ButtonGroup from './ButtonGroup';
	import Tables from './Tables';
	export default {
		 name:'dashboard',
		 components:{Labels,ButtonGroup,Tables},
		 data(){
		 	var _this=this;
		 	return {
		 		textName:'用户管理',
		 		title:'用户名称/用户编号',
		 		bodyName:["门店编号","门店名称","所属省","管理模式","经营模式","品牌","联系人","联系电话","登录账户"],
		 		actionName:[
		 		{"txt":"编辑",txtColor:{color:'rgb(51, 135, 255)'},actions:function(){
                      alert('编辑');
		 		}},
		 		{"txt":"删除",txtColor:{color:'red'},actions:function(){
                      alert('删除');
		 		}}
		 		],
		 		resultSet:9,
		 		btnList:[
		 		   {title:'添加账号',action:function(){
		 		   	 alert('添加啊');
		 		   },styles:{width:'0.75rem'}},
		 		  ]
		 	}
		 } 
	}
</script>

<style>
	.tables{
		width:12.66rem;
    	height:calc(100% - 1.13rem);
		height:-moz-calc(100% - 1.13rem);
		height:-webkit-calc(100% - 1.13rem);
    	background-color: rgb(237,237,237);
    	overflow:scroll;
	}

</style>