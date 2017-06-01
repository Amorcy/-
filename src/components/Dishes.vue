<!--
描述:菜品管理组件
作者:dong.xie
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
             :btnLabel="btnLabel"
             :labelIs="labelIs"
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
		 name:'dashboard',
		 components:{Labels,Tables,ButtonGroup},
		 data(){
		 	return {
		 		textName:'菜品管理',
		 		title:'菜品名称/菜品编号',
		 		bodyName:["菜品编号","菜品名称","菜品缩写","图片"],
		 		actionName:[
		 		{"txt":"审核",actions:function(){
                      alert('审核');
		 		}},
		 		{"txt":"停用",actions:function(){
                      alert('停用');
		 		}}
		 		],
		 		resultSet:4,
		 		btnList:[
		           {title:'添加菜品',action:function(){
		             alert('添加啊');
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