<!--
描述:商户子组件 包括按钮和列表 最终添加商户组件切换掉
作者:dong.xie
-->
<template>
<div>
       <ButtonGroup
		             :btnList="btnList"
		             :btnLabel="btnLabel"
		             :labelIs="labelIs"
		            ></ButtonGroup>
		<Tables
              :bodyName="bodyName"
              :actionName="actionName"
              :resultSet="resultSet"
              :isCheckBox="isCheckBox"
            ></Tables>

		            
    </div>     
</template>

<script>
	import Tables from './Tables';
	import ButtonGroup from './ButtonGroup';
	export default {
		 name:'businesslist',
		 components:{Tables,ButtonGroup},
		 data(){
		 	var _this=this;
		 	return {
		 		textName:'商户管理',
		 		title:'商户名称/商户编号',
		 		bodyName:["商户编号","商户名称","商户类型","门店数","协议周期","签约时间","协议状态"],
		 		cellStyle:{textAlign:'center',paddingRight:'0.6rem'},
		 		actionName:[
		 		{"txt":"编辑",actions:function(){
                      _this.$router.push({
                      	  name:'editBusiness',
                      	  params:{id:1}
                      });
		 		}},
		 		{"txt":"协议",actions:function(){
                      _this.$router.push({
                      	  name:'addAgree'
                      });
		 		}},
		 		],
		 		resultSet:7,
		 		isCheckBox:true,
		 		btnList:[
		           {title:'添加商户',action:function(){
		              _this.$router.push({name:'addBusiness'});
		           },styles:{width:'0.75rem',backgroundColor:'#2196f3',color:'#ffffff'}},

		           {title:'批量续签',action:function(){
		             alert('添加啊');
		           },styles:{width:'0.75rem',backgroundColor:'#ffffff',color:'#333333'}},
		           {title:'批量导入商户',action:function(){
		             alert('添加啊');
		           },styles:{width:'1rem',backgroundColor:'#ffffff',color:'#333333'}}
		        ],
		        btnLabel:[{text:'今日新增',value:20},{text:'分销商总数',value:100}],
		        labelIs:true,
		        businessService:'http://101.200.79.3:8765/org/api/merchant/list'
		 	}
		 }
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