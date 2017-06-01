<!--
描述:登录成功商户
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
			       <router-view></router-view>   
		 </div>
	     

	</div>
</template>

<script>
	import Labels from './Labels';
	import Api from '../api/api';
	export default {
		 name:'dashboard',
		 components:{Labels},
		 data(){
		 	var  _this=this;
		 	return {
		 		textName:'商户管理',
		 		title:'商户名称/商户编号',
		 		bodyName:["商户编号","商户名称","商户类型","门店数","协议周期","签约时间","协议状态"],
		 		cellStyle:{textAlign:'center',paddingRight:'0.6rem'},
		 		actionName:[
		 		{"txt":"编辑",actions:function(){
                      alert('详细');
		 		}},
		 		{"txt":"协议",actions:function(){
                      alert('详细');
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
		        businessService:'http://101.200.79.3:8765/org/api/merchant/list',
		 	}
		 },
		 mounted(){
		 	 //设置默认请求数据量
		 	 var _body={page:1,size:10};
		 	 var _token=Api.getToken();
		 	 //设置请求头部
		 	 var _options={
		 	 	headers:{ 
                           'Content-Type':'application/x-www-form-urlencoded',
                           'Authorization':_token
                            }
		 	 }
		 	 //发送请求
		 	 this.$http.post(this.businessService,Api.formFormat(_body),_options).then((res)=>res.json()).then((response)=>{
                console.log(response);
		 	 });
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