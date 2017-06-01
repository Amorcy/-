<template>
<div>
	<ButtonGroup
             :btnList="btnList"
            ></ButtonGroup>
            <Tables
              :bodyName="bodyName"
              :actionName="actionName"
              :resultSet="resultSet"
            ></Tables>
</div>  
</template>
<script>
import Tables from './Tables';
import ButtonGroup from './ButtonGroup';
 export default{
 	 name:'storeslist',
 	 
 	 data(){
 	 	var _this=this;
 	 	return {
 	 		btnList:[
		 		   {title:'添加门店',action:function(){
		 		   	_this.$router.push({name:'addStores'});
		 		   },styles:{width:'0.75rem',backgroundColor:'rgb(51, 135, 255)',color:'#ffffff'}},

		 		   {title:'添加品牌',action:function(){
		 		   	 alert('dddd');
		 		   },styles:{width:'0.75rem',backgroundColor:'#ffffff',color:'#333333'}},

		 		   {title:'批量导入门店',action:function(){
		 		   	 alert('ddddddddsxxxxxx');
		 		   },styles:{width:'1rem',backgroundColor:'#ffffff',color:'#333333'}},
		 		],
		 		bodyName:["门店编号","门店名称","所属省","管理模式","经营模式","品牌","联系人","联系电话","登录账户"],
		 		actionName:[
		 		{"txt":"禁用",actions:function(){
                      alert('禁用');
		 		}},
		 		{"txt":"编辑",actions:function(){
                      alert('编辑');
		 		}}
		 		],
		 		resultSet:9,
 	 	}
 	 },
 	 components:{ButtonGroup,Tables},
 }
</script>