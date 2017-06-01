<!--
分销商 邀请
-->
<template>
	<div class="add-business">
		<div class="add-cxt">
			 <div class="add-cxt-enter">
			 	<div class="add-area">
			 		<label>邀请手机号:</label>
			 		<textarea></textarea>
			 	</div>
			 	<div class="add-enter">
			 		<div>
			 			<md-button class="md-raised md-primary sub-btn">提交</md-button>
					 	<md-button class="md-raised md-dense sub-reset">重置</md-button>
			 		</div>
			 	</div>
			 </div>
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
	.add-cxt-enter{
		width:2.4rem;
		height:1.88rem;
		margin:0.24rem auto;
	}
	.add-area{
		width:100%;
		height: 1.26rem;
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
	}
	.add-area>label{
		font-size: 0.12rem;
		width:0.7rem;
	}
	.add-area>textarea{
		width:1.6rem;
		height:1.26rem;
		border:1px solid #dddddd;
		border-radius: 4px;
	}
	.add-tables{
		width:9.66rem;
		height: 100%;
		overflow-x: scroll;
	}
    .add-tables-cxt{
    	padding: 0.2rem;
    }
    .add-enter{
    	width:100%;
    	height:0.66rem;
    	margin:0 auto;
    }
    .add-enter>div{
    	width:1.6rem;
    	float: right;
    	height: 100%;
    	display: flex;
    	justify-content: space-between;
    	align-items: flex-end;
    }
</style>