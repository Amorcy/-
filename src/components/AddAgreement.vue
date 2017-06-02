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
		 		title:'协议名称/协议编号',
		 		bodyName:["协议编号","协议名称","协议周期","签约时间","协议状态"],
		 		cellStyle:{textAlign:'center',paddingRight:'0.6rem'},
		 		actionName:[
		 		{"txt":"查看",actions:function(){
                     
		 		}},
		 		{"txt":"停用",actions:function(){
                   
		 		}},
		 		],
		 		resultSet:5,
		 		isCheckBox:true,
		 		btnList:[
		           {title:'添加协议',action:function(){
		              _this.$router.push({name:'addBusiness'});
		           },styles:{width:'0.75rem',backgroundColor:'#2196f3',color:'#ffffff'}}],

		        btnLabel:[{text:'今日新增',value:20},{text:'分销商总数',value:100}],
		        labelIs:false,
		        businessService:'http://101.200.79.3:8765/org/api/merchant/list'
		 	}
		 }
	}

</script>