<!--
添加门店组件
-->
<template>
	<div class="add-business">
		<div class="add-cxt">
			
		</div>
		<div class="add-tables">
			
				<div class="add-tables-cxt">
					<Tables 
					:bodyName="bodyName"
                    :actionName="actionName"
                    :resultSet="resultSet"
					></Tables>
				</div>
			
		</div>
	</div>
</template>

<script>
 import Tables from './Tables';
 export default {
 	 name:'addbusiness',
 	 components:{Tables},
 	 data(){
        return {
        	    bodyName:["商户编号","商户名称","商户类型","门店数","协议周期","签约时间","协议状态"],
		 		actionName:[
		 		{"txt":"编辑",actions:function(){
                      alert('详细');
		 		}},
		 		{"txt":"协议",actions:function(){
                      alert('详细');
		 		}},
		 		],
		 		resultSet:7,
		 		isCheckBox:false,
        }
 	 }
 }

</script>

<style>
	.add-business{
		width:100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.add-cxt{
		width:3rem;
		height: 100%;
		background-color: #ffffff;
	}
	.add-tables{
		width:9.66rem;
		height: 100%;
		overflow-x: scroll;
	}
    .add-tables-cxt{
    	padding: 0.2rem;
    }
</style>