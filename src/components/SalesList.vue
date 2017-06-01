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
<script >
	import Tables from './Tables';
	import ButtonGroup from './ButtonGroup';
	export default {
		 name:'saleslist',
		  components:{Tables,ButtonGroup},
		 data(){
		 	var _this=this;
		 	return {
		 		textName:'分销商',
		 		title:'分销商名称/分销商编号',
		 		bodyName:["门店编号","门店名称","分销商数","交易单数","交易金额","反佣金","待结算金额","登录账户"],
		 		actionName:[
		 		{"txt":"审核",actions:function(){
                      alert('审核');
		 		}},
		 		{"txt":"停用",actions:function(){
                      alert('停用');
		 		}}
		 		],
		 		resultSet:8,
		 		btnList:[
		           {title:'发起邀请',action:function(){
		              _this.$router.push({name:'salesInvite'});
		           },styles:{width:'0.75rem',backgroundColor:'rgb(51, 135, 255)',color:'#ffffff'}},

		           {title:'批量导入',action:function(){
		             alert('添加啊');
		           },styles:{width:'0.75rem',backgroundColor:'#ffffff',color:'#333333'}}
		        ],
		        btnLabel:[{text:'今日新增',value:20},{text:'分销商总数',value:100}],
		        labelIs:true
		 	}
		 } 
	}
</script>