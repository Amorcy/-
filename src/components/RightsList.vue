<!--
描述:登录成功商户
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
            ></Tables>
	</div>
</template>

<script>
	import Labels from './Labels';
	import Tables from './Tables';
	import ButtonGroup from './ButtonGroup';
	export default {
		 name:'dashboard',
		 components:{Labels,Tables,ButtonGroup},
		 data(){
		 	var _this=this;
		 	return {
		 		textName:'分销商权益(商户权益)',
		 		title:'权益编号/权益名称/状态',
		 		bodyName:["权益编号","权益名称","权益内容","备注","状态"],
		 		actionName:[
		 		{"txt":"停用",actions:function(){
                      alert('停用');
		 		}},
		 		{"txt":"编辑",actions:function(){
                      alert('编辑');
		 		}}
		 		],
		 		resultSet:5,
		 		btnList:[
		           {title:'添加权益',action:function(){
		               _this.$router.push({
		               	   name:'AddRights'
		               });
		           },styles:{width:'0.75rem',backgroundColor:'rgb(51, 135, 255)',color:'#ffffff'}}
		        ],
		        btnLabel:[{text:'今日新增',value:20},{text:'分销商总数',value:100}],
		        labelIs:false
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
	.md-table .md-table-head.md-numeric {
    text-align: center;
    font-size: 0.14rem;
}
.md-table .md-table-cell .md-table-cell-container {
    /* padding: 9px 55px 6px 24px; */
    font-size: 0.14rem;
    text-align: center;
    width: 100%;
}

</style>