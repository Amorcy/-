<!--
描述:权限组件
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
              :hasRoles="hasRoles"
              :roleList="roleList"
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
		 		textName:'角色管理',
		 		hasRoles:true,
		 		title:'权益编号/权益名称/状态',
		 		bodyName:["编号","角色名称","角色描述","角色权限"],
		 		actionName:[
		 		{"txt":"编辑",txtColor:{color:'rgb(51, 135, 255)'},actions:function(){
                      alert('编辑');
		 		}},
		 		{"txt":"删除",txtColor:{color:'red'},actions:function(){
                      alert('删除');
		 		}}
		 		],
		 		resultSet:4,
		 		btnList:[
		           {title:'添加角色',action:function(){
		             alert('添加啊');
		           },styles:{width:'0.75rem',backgroundColor:'rgb(51, 135, 255)',color:'#ffffff'}}
		        ],
		        btnLabel:[{text:'今日新增',value:20},{text:'分销商总数',value:100}],
		        labelIs:false,
		        roleList:[
		           {id:1,roleName:'超级管理员',roleDesc:["概览","分销商","核销","商户","设置"],roles:'启用'},
                    {id:2,roleName:'管理员',roleDesc:["概览","分销商"],roles:'启用'},
                     {id:3,roleName:'商户',roleDesc:["概览","分销商","核销","商户","设置"],roles:'启用'},
                      {id:4,roleName:'销售',roleDesc:["核销","商户","设置"],roles:'启用'},
                       {id:5,roleName:'财务',roleDesc:["概览","商户","设置"],roles:'启用'},
                        {id:6,roleName:'地主',roleDesc:["商户","设置"],roles:'启用'},
                         {id:7,roleName:'小地主',roleDesc:["设置"],roles:'启用'},

		        ]
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