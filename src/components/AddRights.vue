<!--
添加权益
-->
<template>
	<div class="add-business">
		<div class="add-cxt">
      <div class="add-cxt-form">
          
        <div class="cxt-form-items">
            <span class="form-items-starts" :style='{color:"#ffffff"}'>*</span>
          <label class="form-label">权益编号</label>
                    <input v-model="orgName" class="form-input" type="text"/>
        </div>
        <div class="cxt-form-items" v-if="isStoreName">
            <span class="form-items-starts">*</span>
          <label class="form-label">权益编号</label>
                    <input   class="form-input" type="text"/>
        </div>



        <div class="cxt-form-items">
            <span class="form-items-starts">*</span>
          <label class="form-label">权益类型</label>
                    <div class="form-address">
                        <input class="address-txt"></input>
                        <i class="iconfont icon-tubiao10"></i>
                    </div>
        </div>
        <div class="cxt-form-items">
            <span class="form-items-starts">*</span>
          <label class="form-label">权益内容</label>
                    到店消费<input class="form-input" type="text" :style="{width:'0.5rem'}"/>元
        </div>
        <div class="cxt-form-items">
             <span class="form-items-starts" :style="{color:'#ffffff'}">*</span>
          <label class="form-label"></label>
                    <div  :style='{marginRight:"0.08rem"}'>积<input class="form-input" placeholder="" type="text" :style="{width:'0.5rem'}"/>分</div>
        </div>


       
        <div class="cxt-form-items">
            <span class="form-items-starts" :style='{color:"#ffffff"}'>*</span>
          <label class="form-label">备注</label>
                    <textarea></textarea>
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
        var _this=this;
        return {
        	   bodyName:["权益编号","权益名称","权益内容","备注","状态"],
        actionName:[
        {"txt":"审核",actions:function(){
                      alert('审核');
        }},
        {"txt":"停用",actions:function(){
                      alert('停用');
        }}
        ],
		 		resultSet:5,
		 		isCheckBox:false,
		 		orgForm:false,
                //orgForm类型  1连锁 2 单店
                //orgName商户名称
                //
                orgName:'',
                accountName:'',
                accountPassword:'',
                ADD_SERVICE:'http://172.16.38.191:8093/api/merchant',
                isStoreName:true,

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
 	 	},
        changes:function(e){
           this.isStoreName=true;
        },
        removeName:function(){
            this.isStoreName=false;
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
    .form-input,textarea{
        width:1.6rem;
        height: 0.28rem;
        border:1px solid #dddddd;
        border-radius:4px;

    }
    textarea{
        width:1.6rem;
        height: 0.38rem;
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
    .form-address{
        width:1.6rem;
        height:0.28rem;
        border-radius:4px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border:1px solid #dddddd;
    }
    .address-txt{
        width:1.2rem;
        height:0.24rem;
        outline: none;
        border: none;
    }

</style>
