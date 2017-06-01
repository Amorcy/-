<!--
添加商户组件
-->
<template>
	<div class="add-business">
		<div class="add-cxt">
			<div class="add-cxt-form">
			    <div class="cxt-form-items">
			        <span class="form-items-starts">*</span>
					<label class="form-label">商户类型</label>
                    单店:<md-radio v-model="orgForm" id="my-test4" name="my-test-group2" md-value="2" class="md-primary"></md-radio>
                    连锁:<md-radio v-model="orgForm" id="my-test5" name="my-test-group2" md-value="1" class="md-primary"></md-radio>
				</div>
				<div class="cxt-form-items">
				    <span class="form-items-starts">*</span>
					<label class="form-label">商户名称</label>
                    <input v-model="orgName" class="form-input" type="text"/>
				</div>
				<div class="cxt-form-items">
				    <span class="form-items-starts">*</span>
					<label class="form-label">门店名称</label>
                    <input   class="form-input" type="text"/>
				</div>
				
				
				
				<div class="cxt-form-items">
				   
					<label class="form-label">地址</label>
                    <select class="form-input">
                    	<option>北京</option>
                    	<option>上海</option>
                    	<option>天津</option>
                    	<option>广州</option>
                    	<option>深圳</option>
                    </select>  
				</div>
				<div class="cxt-form-items">
				    
					<label class="form-label"></label>
                    <input class="form-input" placeholder="详细地址" type="text"/>
				</div>


				<div class="cxt-form-items">
				    <span class="form-items-starts">*</span>
					<label class="form-label">联系人</label>
                    <input class="form-input" type="text"/>
				</div>
				<div class="cxt-form-items">
				    <span class="form-items-starts">*</span>
					<label class="form-label">联系方式</label>
                    <input class="form-input" type="text"/>
				</div>
				<div class="cxt-form-items">
				    <span class="form-items-starts">*</span>
					<label class="form-label">账号名称</label>
                    <input v-model="accountName" class="form-input" type="text"/>
				</div>
				<div class="cxt-form-items">
				    <span class="form-items-starts">*</span>
					<label class="form-label">初始密码</label>
                    <input v-model="accountPassword" class="form-input" type="text"/>
				</div>
				<div class="form-items-sub">
				     <div class="items-pad"></div>
					 <div class="items-sub">
					 	<md-button  @click.native="addBusiness" class="md-raised md-primary sub-btn">提交</md-button>
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
              :isCheckBox="isCheckBox"
            ></Tables>
			</div>
		</div>
	</div>
</template>

<script>
 import Tables from './Tables';
 import Api from '../api/api';
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
		 		orgForm:true,
                //orgForm类型  1连锁 2 单店
                //orgName商户名称
                //
                orgName:'',
                accountName:'',
                accountPassword:'',
                ADD_SERVICE:'http://172.16.38.191:8093/api/merchant'
        }
 	 },
 	 methods:{
 	 	addBusiness:function(){
 	 		 var options={
                 headers:{ 
                                   'Content-Type':'application/x-www-form-urlencoded',
                                   'Authorization':Api.getToken()
                                 }
                };
                console.log(options);
              var body ={
              	   orgName:this.orgName,
              	   accountName:this.accountName,
              	   accountPassword:this.accountPassword,
                   orgForm:this.orgForm
              };  
 	 		this.$http.post(this.ADD_SERVICE,Api.formFormat(body),options).then((res)=>res.json()).then((res)=>{
 	 			  console.log(res);
 	 		});
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
		overflow:hidden;
	}
	.add-tables{
		width:9.66rem;
		height: 100%;
		overflow-x: scroll;
	}
    .add-tables-cxt{
    	padding: 0.2rem;
    }
    .add-cxt-form{
    	width:2.4rem;
    	margin:0.25rem auto;
    	height: 4.6rem;
    }
    .cxt-form-items{
    	width:100%;
    	height: 0.46rem;
    	display: flex;
    	justify-content: space-between;
    	align-items: center;
    }
    .form-label{
    	width:0.8rem;
    	text-align: left;
    	font-size: 0.14rem;
    }
    .form-input{
        width:1.6rem;
        height: 0.28rem;
        border:1px solid #dddddd;
        border-radius:4px;
        
    }
    .form-items-starts{
    	width:0.14rem;
    	height: 0.14rem;
    	font-size:0.14rem;
    	text-align: center;
    	color: red;
    }
    .form-items-sub{
    	height:0.54rem;
    	display: flex;
    	justify-content: center;
    	align-items: center;
    }
    .items-pad{
    	width:0.8rem;
    	height:0.54rem;
    }
    .items-sub{
    	width:1.6rem;
    	height:0.54rem;
    	display: flex;justify-content: space-between;
    	
    }
    .sub-btn,.sub-reset{
    	width:0.7rem;
    	height:0.28rem
    }
    .md-button.md-dense {
	    min-height: 0px;
	    line-height: 32px;
	    font-size: 13px;
	        line-height: 0.24rem;
	}

</style>